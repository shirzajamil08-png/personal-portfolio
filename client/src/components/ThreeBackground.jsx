import { useEffect, useRef } from "react";
import * as THREE from "three";

const PALETTE = [0x7c5cff, 0x22d3ee, 0xf472b6, 0x818cf8];

/**
 * Fixed WebGL background: a drifting particle field plus wireframe solids that
 * react to the pointer and to scroll. Everything is created and disposed inside
 * one effect so React can mount/unmount it cleanly.
 */
export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      canvas.style.display = "none";   // no WebGL: the CSS gradients carry the page
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070711, 0.055);

    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 120);
    camera.position.z = 22;

    renderer.setClearColor(0x000000, 0);

    /* ---- particles ---- */
    const count = window.innerWidth < 768 ? 900 : 1800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10;

      color.setHex(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    /* ---- wireframe solids ---- */
    const defs = [
      { geo: new THREE.IcosahedronGeometry(3.4, 0), pos: [-11, 4, -6], color: 0x7c5cff, speed: 0.16 },
      { geo: new THREE.TorusKnotGeometry(2, 0.55, 90, 12), pos: [12, -3, -8], color: 0x22d3ee, speed: 0.12 },
      { geo: new THREE.OctahedronGeometry(2.4, 0), pos: [7, 6, -12], color: 0xf472b6, speed: 0.2 },
      { geo: new THREE.DodecahedronGeometry(2.1, 0), pos: [-8, -6, -10], color: 0x818cf8, speed: 0.14 }
    ];

    const solids = defs.map((d) => {
      const mesh = new THREE.Mesh(
        d.geo,
        new THREE.MeshBasicMaterial({ color: d.color, wireframe: true, transparent: true, opacity: 0.42 })
      );
      mesh.position.set(...d.pos);
      mesh.userData = { speed: d.speed, baseY: d.pos[1] };
      scene.add(mesh);
      return mesh;
    });

    /* ---- sizing ---- */
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight, false);
    };
    resize();

    /* ---- interaction ---- */
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let scrollRatio = 0;
    let running = true;
    let frameId;

    const onPointerMove = (e) => {
      const p = e.touches ? e.touches[0] : e;
      pointer.x = (p.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (p.clientY / window.innerHeight) * 2 - 1;
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRatio = max > 0 ? window.scrollY / max : 0;
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        if (reduced) renderer.render(scene, camera);
      }, 150);
    };

    const clock = new THREE.Clock();

    const animate = () => {
      if (!running) return;
      frameId = requestAnimationFrame(animate);

      const t = clock.getElapsedTime();

      target.x += (pointer.x - target.x) * 0.045;
      target.y += (pointer.y - target.y) * 0.045;

      camera.position.x = target.x * 4;
      camera.position.y = -target.y * 3 - scrollRatio * 6;
      camera.lookAt(0, -scrollRatio * 2, 0);

      particles.rotation.y = t * 0.022;
      particles.rotation.x = Math.sin(t * 0.08) * 0.05;

      solids.forEach((m, i) => {
        m.rotation.x += m.userData.speed * 0.006;
        m.rotation.y += m.userData.speed * 0.009;
        m.position.y = m.userData.baseY + Math.sin(t * 0.5 + i) * 0.7;
      });

      renderer.render(scene, camera);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
      } else if (!running) {
        running = true;
        clock.getDelta();
        animate();
      }
    };

    window.addEventListener("resize", onResize);

    if (reduced) {
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    } else {
      window.addEventListener("mousemove", onPointerMove, { passive: true });
      window.addEventListener("touchmove", onPointerMove, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      animate();
    }

    /* ---- teardown ---- */
    return () => {
      running = false;
      cancelAnimationFrame(frameId);
      clearTimeout(resizeTimer);

      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);

      particleGeo.dispose();
      particleMat.dispose();
      solids.forEach((m) => {
        m.geometry.dispose();
        m.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} aria-hidden="true" />;
}
