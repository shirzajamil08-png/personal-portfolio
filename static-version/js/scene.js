/* =========================================================
   scene.js — Three.js background
   A drifting particle field + wireframe solids that react to
   the mouse and to scroll position. Degrades gracefully:
   if WebGL or the CDN is unavailable the CSS gradients stay.
   ========================================================= */
(function () {
  "use strict";

  var canvas = document.getElementById("bg-canvas");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canvas || typeof window.THREE === "undefined") {
    if (canvas) canvas.style.display = "none";
    return;
  }

  var THREE = window.THREE;
  var scene, camera, renderer, particles, clock;
  var solids = [];
  var pointer = { x: 0, y: 0 };
  var target = { x: 0, y: 0 };
  var scrollY = 0;
  var running = true;

  var PALETTE = [
    new THREE.Color(0x7c5cff),
    new THREE.Color(0x22d3ee),
    new THREE.Color(0xf472b6),
    new THREE.Color(0x818cf8)
  ];

  function init() {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070711, 0.055);

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 120);
    camera.position.z = 22;

    try {
      renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    } catch (err) {
      canvas.style.display = "none";
      return false;
    }
    renderer.setClearColor(0x000000, 0);
    resize();

    buildParticles();
    buildSolids();

    clock = new THREE.Clock();
    return true;
  }

  /* ---- drifting star / dust field ---- */
  function buildParticles() {
    var count = window.innerWidth < 768 ? 900 : 1800;
    var positions = new Float32Array(count * 3);
    var colors = new Float32Array(count * 3);

    for (var i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10;

      var c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    var mat = new THREE.PointsMaterial({
      size: 0.22,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    particles = new THREE.Points(geo, mat);
    scene.add(particles);
  }

  /* ---- floating wireframe geometry ---- */
  function buildSolids() {
    var defs = [
      { geo: new THREE.IcosahedronGeometry(3.4, 0),        pos: [-11,  4, -6],  color: 0x7c5cff, speed: 0.16 },
      { geo: new THREE.TorusKnotGeometry(2, 0.55, 90, 12), pos: [ 12, -3, -8],  color: 0x22d3ee, speed: 0.12 },
      { geo: new THREE.OctahedronGeometry(2.4, 0),         pos: [  7,  6, -12], color: 0xf472b6, speed: 0.2  },
      { geo: new THREE.DodecahedronGeometry(2.1, 0),       pos: [-8,  -6, -10], color: 0x818cf8, speed: 0.14 }
    ];

    defs.forEach(function (d) {
      var mesh = new THREE.Mesh(
        d.geo,
        new THREE.MeshBasicMaterial({
          color: d.color, wireframe: true, transparent: true, opacity: 0.42
        })
      );
      mesh.position.set(d.pos[0], d.pos[1], d.pos[2]);
      mesh.userData.speed = d.speed;
      mesh.userData.baseY = d.pos[1];
      scene.add(mesh);
      solids.push(mesh);
    });
  }

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);
  }

  function animate() {
    if (!running) return;
    requestAnimationFrame(animate);

    var t = clock.getElapsedTime();

    // eased mouse parallax
    target.x += (pointer.x - target.x) * 0.045;
    target.y += (pointer.y - target.y) * 0.045;

    camera.position.x = target.x * 4;
    camera.position.y = -target.y * 3 - scrollY * 6;
    camera.lookAt(0, -scrollY * 2, 0);

    if (particles) {
      particles.rotation.y = t * 0.022;
      particles.rotation.x = Math.sin(t * 0.08) * 0.05;
    }

    solids.forEach(function (m, i) {
      m.rotation.x += m.userData.speed * 0.006;
      m.rotation.y += m.userData.speed * 0.009;
      m.position.y = m.userData.baseY + Math.sin(t * 0.5 + i) * 0.7;
    });

    renderer.render(scene, camera);
  }

  function renderOnce() {
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }

  /* ---- events ---- */
  function onPointerMove(e) {
    var x = e.touches ? e.touches[0].clientX : e.clientX;
    var y = e.touches ? e.touches[0].clientY : e.clientY;
    pointer.x = (x / window.innerWidth) * 2 - 1;
    pointer.y = (y / window.innerHeight) * 2 - 1;
  }

  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    scrollY = max > 0 ? window.scrollY / max : 0;
  }

  var resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      if (reduced) renderOnce();
    }, 150);
  }

  if (init() !== false) {
    window.addEventListener("resize", onResize);

    if (reduced) {
      renderOnce();
    } else {
      window.addEventListener("mousemove", onPointerMove, { passive: true });
      window.addEventListener("touchmove", onPointerMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      // pause the loop when the tab is hidden so we do not burn battery
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
          running = false;
        } else if (!running) {
          running = true;
          clock.getDelta();
          animate();
        }
      });
      animate();
    }
  }
})();
