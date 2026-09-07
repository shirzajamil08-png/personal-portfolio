/* =========================================================
   main.js — UI behaviour
   loader · nav · scroll spy · reveal · counters · typing
   3D tilt · draggable cube · skill bars · filters · form
   ========================================================= */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- loader ---------- */
  window.addEventListener("load", function () {
    var loader = $("#loader");
    if (!loader) return;
    setTimeout(function () { loader.classList.add("is-done"); }, 500);
  });

  /* ---------- year ---------- */
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  var nav = $("#nav");
  var toggle = $("#navToggle");
  var links = $("#navLinks");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    $$(".nav__link", links).forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- sticky nav + scroll progress ---------- */
  var bar = $("#scrollBar");

  function onScroll() {
    var y = window.scrollY;
    if (nav) nav.classList.toggle("is-stuck", y > 40);

    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- scroll spy ---------- */
  var sections = $$("section[id]");
  var navLinks = $$(".nav__link");

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- reveal on scroll ---------- */
  var revealItems = $$(".reveal");

  if ("IntersectionObserver" in window && !reduced) {
    // threshold 0: tall blocks (the hero copy on a phone) only ever peek a few
    // percent into the viewport, so any visible pixel has to count.
    var revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        setTimeout(function () { entry.target.classList.add("is-visible"); }, i * 90);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });

    revealItems.forEach(function (el) { revealer.observe(el); });
  } else {
    revealItems.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- typing effect ---------- */
  var typedEl = $("#typed");
  var phrases = [
    "MERN Stack Developer",
    "React.js Enthusiast",
    "Node & Express Backend Dev",
    "UI/UX Focused Coder"
  ];

  if (typedEl) {
    if (reduced) {
      typedEl.textContent = phrases[0];
    } else {
      var pi = 0, ci = 0, deleting = false;

      (function type() {
        var word = phrases[pi];
        ci = deleting ? ci - 1 : ci + 1;
        typedEl.textContent = word.slice(0, ci);

        var delay = deleting ? 45 : 85;
        if (!deleting && ci === word.length) { deleting = true; delay = 1600; }
        else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 350; }

        setTimeout(type, delay);
      })();
    }
  }

  /* ---------- animated counters ---------- */
  var counters = $$(".count");

  function runCounter(el) {
    var goal = parseInt(el.dataset.count, 10) || 0;
    if (reduced) { el.textContent = goal + "+"; return; }

    var start = performance.now();
    var duration = 1400;

    (function step(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(goal * eased) + (p === 1 ? "+" : "");
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  if ("IntersectionObserver" in window && counters.length) {
    var countObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { countObs.observe(c); });
  } else {
    counters.forEach(runCounter);
  }

  /* ---------- skill bars ---------- */
  var skills = $$(".skill");

  function fillSkill(skill) {
    var fill = $("i", skill);
    if (fill) fill.style.width = (skill.dataset.level || 0) + "%";
  }

  if ("IntersectionObserver" in window && skills.length) {
    var skillObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        setTimeout(function () { fillSkill(entry.target); }, i * 120);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.4 });
    skills.forEach(function (s) { skillObs.observe(s); });
  } else {
    skills.forEach(fillSkill);
  }

  /* ---------- 3D tilt cards ---------- */
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (fine && !reduced) {
    $$("[data-tilt]").forEach(function (card) {
      var max = parseFloat(card.dataset.tiltMax) || 10;
      var frame = null;

      card.addEventListener("mousemove", function (e) {
        if (frame) return;
        frame = requestAnimationFrame(function () {
          frame = null;
          var r = card.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width - 0.5;
          var py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform =
            "perspective(900px) rotateY(" + (px * max * 2) + "deg) rotateX(" +
            (-py * max * 2) + "deg) translateY(-6px) scale(1.015)";
        });
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* ---------- draggable MERN cube ---------- */
  var cube = $("#cube");

  if (cube && !reduced) {
    var dragging = false, sx = 0, sy = 0, rx = -22, ry = 0;

    function point(e) {
      return e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
                       : { x: e.clientX, y: e.clientY };
    }

    function start(e) {
      dragging = true;
      cube.classList.add("is-dragging");
      var p = point(e);
      sx = p.x; sy = p.y;
    }

    function move(e) {
      if (!dragging) return;
      var p = point(e);
      ry += (p.x - sx) * 0.6;
      rx -= (p.y - sy) * 0.6;
      rx = Math.max(-90, Math.min(90, rx));
      sx = p.x; sy = p.y;
      cube.style.transform = "rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
    }

    function end() { dragging = false; }

    cube.addEventListener("mousedown", start);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    cube.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", end);
  }

  /* ---------- project filters ---------- */
  var filters = $$(".filter");
  var projects = $$(".project");

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");

      var tag = btn.dataset.filter;
      projects.forEach(function (p) {
        var tags = (p.dataset.tags || "").split(" ");
        var show = tag === "all" || tags.indexOf(tag) !== -1;
        p.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ---------- contact form validation ---------- */
  var form = $("#contactForm");
  var status = $("#formStatus");

  var rules = {
    name:    function (v) { return v.length >= 2 || "Please enter at least 2 characters."; },
    email:   function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || "Enter a valid email address."; },
    subject: function (v) { return v.length >= 3 || "Subject must be at least 3 characters."; },
    message: function (v) { return v.length >= 10 || "Message should be at least 10 characters."; }
  };

  function validateField(input) {
    var rule = rules[input.name];
    if (!rule) return true;

    var result = rule(input.value.trim());
    var field = input.closest(".field");
    var error = $('.error[data-for="' + input.name + '"]', field);

    if (result === true) {
      field.classList.remove("has-error");
      if (error) error.textContent = "";
      return true;
    }

    field.classList.add("has-error");
    if (error) error.textContent = result;
    return false;
  }

  if (form) {
    $$("input, textarea", form).forEach(function (input) {
      input.addEventListener("blur", function () { validateField(input); });
      input.addEventListener("input", function () {
        if (input.closest(".field").classList.contains("has-error")) validateField(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var inputs = $$("input, textarea", form);
      var valid = inputs.map(validateField).every(Boolean);

      if (!valid) {
        status.textContent = "Please fix the highlighted fields.";
        status.className = "form-status bad";
        var firstBad = $(".field.has-error input, .field.has-error textarea", form);
        if (firstBad) firstBad.focus();
        return;
      }

      // Front-end only: no backend is wired up yet.
      // Swap this block for a fetch() to your Express route or a service
      // like Formspree / EmailJS when you deploy.
      status.textContent = "Thanks! Your message has been validated and is ready to send.";
      status.className = "form-status ok";
      form.reset();

      setTimeout(function () {
        status.textContent = "";
        status.className = "form-status";
      }, 6000);
    });
  }
})();
