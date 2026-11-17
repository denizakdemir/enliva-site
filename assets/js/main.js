/* Enliva Tecnologías — site behaviour
   - bilingual copy (EN/ES) driven by a single dictionary
   - mobile navigation, sticky-header state, scroll reveal
   No build step, no dependencies. */

(function () {
  "use strict";

  var EMAIL = "deniz.akdemir.work@gmail.com";

  var I18N = {
    en: {
      meta: {
        title: "Enliva Tecnologías — Applied statistics & machine learning · Málaga",
        description:
          "Enliva Tecnologías is a Málaga-based applied statistics and machine learning consultancy. Predictive modelling, causal inference and uncertainty-aware systems for clinical, agricultural and financial decisions."
      },
      "a11y.skip": "Skip to content",
      "brand.sub": "Tecnologías",
      "nav.services": "Services",
      "nav.approach": "Approach",
      "nav.work": "Work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.cta": "Start a conversation",

      "hero.eyebrow": "Enliva Tecnologías · Málaga, Spain",
      "hero.title1": "Statistics and machine learning",
      "hero.title2": "you can defend.",
      "hero.lede":
        "We build predictive models, causal analyses and uncertainty-aware systems for teams whose decisions carry real consequences — in clinics, breeding programmes and markets.",
      "hero.cta1": "Discuss a project",
      "hero.cta2": "What we do",

      "proof.a.k": "15+ years",
      "proof.a.v": "Applied statistics and ML",
      "proof.b.k": "3,400+",
      "proof.b.v": "Citations to published work",
      "proof.c.k": "PhD",
      "proof.c.v": "Statistics, Bowling Green State",
      "proof.d.k": "Málaga",
      "proof.d.v": "Based in Spain, working worldwide",

      "services.eyebrow": "01 — Services",
      "services.title": "Where we are useful",
      "services.lede":
        "Most analytics problems are decision problems in disguise. We work on the ones where a wrong answer is expensive — and where the method has to survive scrutiny from clinicians, reviewers or an investment committee.",
      "svc.1.t": "Predictive modelling & risk scoring",
      "svc.1.d":
        "Survival and competing-risks models, gradient boosting, penalised regression. Risk scores, time-to-event forecasts and rankings built to be deployed, not just reported.",
      "svc.2.t": "Causal inference & effect estimation",
      "svc.2.d":
        "Estimating what a policy, treatment or campaign actually changed. Target-trial style design, propensity and weighting methods, sensitivity analysis — and bounds where the data cannot support a point estimate.",
      "svc.3.t": "Uncertainty & validation",
      "svc.3.d":
        "Conformal prediction sets, calibration diagnostics, drift monitoring and validation protocols that hold up: temporal splits, external validation, pre-registered analysis plans.",
      "svc.4.t": "Clinical & biomedical data",
      "svc.4.d":
        "Registry and cohort data, survival endpoints, genomics and immune-genetics. Auditable pipelines, synthetic data for rare events, and reporting that is ready for peer review.",
      "svc.5.t": "Agricultural & breeding analytics",
      "svc.5.d":
        "Genomic prediction, selection indices, trial design and resource optimisation for plant and animal breeding programmes — the engineering behind our BreedIQ platform.",
      "svc.6.t": "Quantitative finance & forecasting",
      "svc.6.d":
        "Portfolio construction, risk decomposition, mixed-model and time-series approaches. Backtests with leakage controls and honest transaction-cost assumptions.",
      "services.note":
        "Also: NLP and document intelligence, R and Python package development, and reproducible research infrastructure.",

      "approach.eyebrow": "02 — Approach",
      "approach.title": "Four steps, no surprises",
      "approach.lede":
        "Engagements are scoped in two-week blocks. You get working code and a written record of every choice, so the analysis can be re-run and defended long after we are gone.",
      "step.1.t": "Frame the decision",
      "step.1.d":
        "What changes if the model says A rather than B? We start from the decision, not the dataset, and agree on what evidence would actually settle it.",
      "step.2.t": "Design the evidence",
      "step.2.d":
        "Data audit, leakage checks and a validation plan written before modelling begins. If the data cannot answer the question, you hear that early.",
      "step.3.t": "Model and test",
      "step.3.d":
        "A simple baseline first; complexity only where it measurably pays. Uncertainty is reported with every number, and every metric has a confidence interval.",
      "step.4.t": "Ship and monitor",
      "step.4.d":
        "Documented code, an API or dashboard, drift checks and a handover session so your team can own it — including the parts that are fragile.",

      "work.eyebrow": "03 — Work",
      "work.title": "What we have built",
      "work.lede":
        "A small portfolio by design. Each of these is a long-running line of work rather than a one-off deliverable.",
      "work.1.tag": "Platform",
      "work.1.d":
        "A precision-breeding platform for plant and animal programmes: genomic prediction, mate selection and trial optimisation, with the statistical assumptions made explicit to breeders rather than buried in a black box.",
      "work.1.meta": "Genomic prediction · optimal design · decision support",
      "work.2.tag": "Product",
      "work.2.d":
        "Document and record intelligence for organisations with heterogeneous archives. Language models do the first pass; every extracted fact is traceable to its source and review stays with a human.",
      "work.2.meta": "NLP · entity resolution · human-in-the-loop",
      "work.3.tag": "Toolkit",
      "work.3.t": "Financial modelling toolkit",
      "work.3.d":
        "Portfolio construction and risk analytics used in published quantitative-finance research: mixed linear models for weights, robust risk decomposition, scenario analysis.",
      "work.3.meta": "Portfolio optimisation · backtesting · risk",
      "work.4.tag": "Open source",
      "work.4.t": "Statistical software",
      "work.4.d":
        "Maintained R and Python packages for causal comparison of experiments, optimal experimental design and tabular survival modelling — the same tooling we use on client work.",

      "about.eyebrow": "04 — About",
      "about.title": "A statistics practice, not a body shop",
      "about.p1":
        "Enliva Tecnologías is a Spanish limited company registered in Málaga. We keep the team deliberately small: the person who designs your analysis is the person who writes the code and answers your questions about it.",
      "about.p2":
        "The practice grew out of fifteen years spent between academic statistics, a university consulting unit and large-scale clinical prediction work. That background shapes how we work — treat the method as a claim that must be justified, not a recipe that produces a number.",
      "about.role": "Founder & Principal",
      "about.p3":
        "PhD in Statistics (Bowling Green State University), postdoctoral research in statistical genomics at Cornell University and three years in the Cornell Statistical Consulting Unit. He currently leads clinical prediction modelling in haematopoietic cell transplantation and publishes on causal inference, experimental comparison and uncertainty quantification.",
      "about.f1": "PhD Statistics · Bowling Green State University",
      "about.f2": "3,400+ citations across statistics, machine learning and genomics",
      "about.f3": "Maintainer of R and Python packages on CRAN and GitHub",
      "about.f4": "Working in English, Spanish and Turkish",
      "about.side.t": "Typically engaged for",
      "about.side.1": "A model that must pass external or regulatory review",
      "about.side.2": "A causal question your team keeps arguing about",
      "about.side.3": "Prediction with honest error bars, not false confidence",
      "about.side.4": "A second opinion on an analysis before it ships",
      "about.side.5": "Statistical capacity your team does not have in-house",
      "about.side.note": "Short diagnostics, fixed-scope projects and ongoing advisory retainers.",

      "contact.eyebrow": "05 — Contact",
      "contact.title": "Tell us what decision you are trying to make",
      "contact.lede":
        "A short description of the problem and the data you have is enough to start. If we are not the right fit, we will say so and point you somewhere better.",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.address": "Office",

      "footer.tagline": "Applied statistics and machine learning · Málaga, Spain",
      "footer.addr":
        "Plaza Villa Castelldefels, Picasso Business Center, s/n, 29006 Málaga, España",
      "footer.legal": "Legal notice & privacy"
    },

    es: {
      meta: {
        title: "Enliva Tecnologías — Estadística aplicada y machine learning · Málaga",
        description:
          "Enliva Tecnologías es una consultoría de estadística aplicada y machine learning con sede en Málaga. Modelos predictivos, inferencia causal y sistemas que cuantifican la incertidumbre para decisiones clínicas, agrarias y financieras."
      },
      "a11y.skip": "Saltar al contenido",
      "brand.sub": "Tecnologías",
      "nav.services": "Servicios",
      "nav.approach": "Método",
      "nav.work": "Proyectos",
      "nav.about": "Empresa",
      "nav.contact": "Contacto",
      "nav.cta": "Hablemos de su proyecto",

      "hero.eyebrow": "Enliva Tecnologías · Málaga, España",
      "hero.title1": "Estadística y machine learning",
      "hero.title2": "que se pueden defender.",
      "hero.lede":
        "Construimos modelos predictivos, análisis causales y sistemas que cuantifican la incertidumbre para equipos cuyas decisiones tienen consecuencias reales: en clínica, en programas de mejora genética y en mercados.",
      "hero.cta1": "Cuéntenos su proyecto",
      "hero.cta2": "Qué hacemos",

      "proof.a.k": "Más de 15 años",
      "proof.a.v": "En estadística aplicada y ML",
      "proof.b.k": "3.400+",
      "proof.b.v": "Citas de trabajos publicados",
      "proof.c.k": "Doctorado",
      "proof.c.v": "Estadística, Bowling Green State",
      "proof.d.k": "Málaga",
      "proof.d.v": "Desde España, para todo el mundo",

      "services.eyebrow": "01 — Servicios",
      "services.title": "Dónde somos útiles",
      "services.lede":
        "La mayoría de los problemas analíticos son en realidad problemas de decisión. Trabajamos en aquellos donde una respuesta equivocada sale cara y donde el método debe resistir el escrutinio de clínicos, revisores o un comité de inversión.",
      "svc.1.t": "Modelos predictivos y scoring de riesgo",
      "svc.1.d":
        "Modelos de supervivencia y riesgos competitivos, gradient boosting y regresión penalizada. Scores de riesgo, pronósticos de tiempo hasta el evento y rankings pensados para desplegarse, no solo para presentarse.",
      "svc.2.t": "Inferencia causal y estimación de efectos",
      "svc.2.d":
        "Estimar qué cambió realmente una política, un tratamiento o una campaña. Diseño tipo ensayo objetivo, métodos de propensión y ponderación, análisis de sensibilidad y cotas cuando los datos no permiten una estimación puntual.",
      "svc.3.t": "Incertidumbre y validación",
      "svc.3.d":
        "Conjuntos de predicción conformes, diagnóstico de calibración, monitorización de deriva y protocolos de validación sólidos: particiones temporales, validación externa y planes de análisis preespecificados.",
      "svc.4.t": "Datos clínicos y biomédicos",
      "svc.4.d":
        "Registros y cohortes, variables de supervivencia, genómica e inmunogenética. Pipelines auditables, datos sintéticos para eventos raros y resultados listos para revisión por pares.",
      "svc.5.t": "Analítica agraria y de mejora genética",
      "svc.5.d":
        "Predicción genómica, índices de selección, diseño de ensayos y optimización de recursos para programas de mejora vegetal y animal: la ingeniería que hay detrás de nuestra plataforma BreedIQ.",
      "svc.6.t": "Finanzas cuantitativas y previsión",
      "svc.6.d":
        "Construcción de carteras, descomposición de riesgo, modelos mixtos y series temporales. Backtests con control de fugas de información y supuestos de costes de transacción realistas.",
      "services.note":
        "También: PLN y extracción de información de documentos, desarrollo de paquetes en R y Python e infraestructura de investigación reproducible.",

      "approach.eyebrow": "02 — Método",
      "approach.title": "Cuatro pasos, sin sorpresas",
      "approach.lede":
        "Los proyectos se planifican en bloques de dos semanas. Recibe código funcional y un registro escrito de cada decisión, para que el análisis pueda reproducirse y defenderse mucho después de que terminemos.",
      "step.1.t": "Acotar la decisión",
      "step.1.d":
        "¿Qué cambia si el modelo dice A en lugar de B? Partimos de la decisión, no del conjunto de datos, y acordamos qué evidencia resolvería de verdad la pregunta.",
      "step.2.t": "Diseñar la evidencia",
      "step.2.d":
        "Auditoría de datos, control de fugas de información y un plan de validación escrito antes de modelar. Si los datos no pueden responder a la pregunta, se lo decimos desde el principio.",
      "step.3.t": "Modelar y contrastar",
      "step.3.d":
        "Primero una referencia simple; la complejidad solo donde aporta de forma medible. Cada cifra va acompañada de su incertidumbre y cada métrica de su intervalo de confianza.",
      "step.4.t": "Desplegar y monitorizar",
      "step.4.d":
        "Código documentado, API o panel, controles de deriva y una sesión de traspaso para que su equipo pueda asumirlo, incluidas las partes frágiles.",

      "work.eyebrow": "03 — Proyectos",
      "work.title": "Lo que hemos construido",
      "work.lede":
        "Una cartera pequeña a propósito. Cada línea es un trabajo de largo recorrido, no un entregable puntual.",
      "work.1.tag": "Plataforma",
      "work.1.d":
        "Una plataforma de mejora de precisión para programas vegetales y animales: predicción genómica, selección de cruces y optimización de ensayos, con los supuestos estadísticos explícitos para el mejorador en lugar de escondidos en una caja negra.",
      "work.1.meta": "Predicción genómica · diseño óptimo · apoyo a la decisión",
      "work.2.tag": "Producto",
      "work.2.d":
        "Inteligencia documental para organizaciones con archivos heterogéneos. Los modelos de lenguaje hacen la primera pasada; cada dato extraído es trazable a su fuente y la revisión sigue siendo humana.",
      "work.2.meta": "PLN · resolución de entidades · revisión humana",
      "work.3.tag": "Herramientas",
      "work.3.t": "Kit de modelado financiero",
      "work.3.d":
        "Construcción de carteras y analítica de riesgo utilizadas en investigación publicada de finanzas cuantitativas: modelos lineales mixtos para pesos, descomposición robusta de riesgo y análisis de escenarios.",
      "work.3.meta": "Optimización de carteras · backtesting · riesgo",
      "work.4.tag": "Código abierto",
      "work.4.t": "Software estadístico",
      "work.4.d":
        "Paquetes en R y Python mantenidos para la comparación causal de experimentos, el diseño óptimo de experimentos y el modelado de supervivencia tabular: las mismas herramientas que usamos en proyectos de cliente.",

      "about.eyebrow": "04 — Empresa",
      "about.title": "Un despacho de estadística, no una fábrica de informes",
      "about.p1":
        "Enliva Tecnologías es una sociedad limitada española registrada en Málaga. Mantenemos el equipo deliberadamente pequeño: quien diseña su análisis es quien escribe el código y responde a sus preguntas sobre él.",
      "about.p2":
        "El despacho nace de quince años repartidos entre la estadística académica, una unidad universitaria de consultoría y el modelado clínico a gran escala. Esa trayectoria define nuestro modo de trabajar: tratar el método como una afirmación que hay que justificar, no como una receta que produce un número.",
      "about.role": "Fundador y responsable",
      "about.p3":
        "Doctor en Estadística (Bowling Green State University), investigación postdoctoral en genómica estadística en Cornell University y tres años en la unidad de consultoría estadística de Cornell. Actualmente dirige el modelado predictivo clínico en trasplante de progenitores hematopoyéticos y publica sobre inferencia causal, comparación de experimentos y cuantificación de la incertidumbre.",
      "about.f1": "Doctor en Estadística · Bowling Green State University",
      "about.f2": "Más de 3.400 citas en estadística, machine learning y genómica",
      "about.f3": "Mantenedor de paquetes R y Python en CRAN y GitHub",
      "about.f4": "Trabaja en inglés, español y turco",
      "about.side.t": "Nos suelen contratar para",
      "about.side.1": "Un modelo que debe superar revisión externa o regulatoria",
      "about.side.2": "Una pregunta causal sobre la que su equipo sigue discutiendo",
      "about.side.3": "Predicciones con intervalos honestos, no falsa confianza",
      "about.side.4": "Una segunda opinión antes de publicar un análisis",
      "about.side.5": "Capacidad estadística que su equipo no tiene internamente",
      "about.side.note":
        "Diagnósticos breves, proyectos de alcance fijo y asesoramiento continuado.",

      "contact.eyebrow": "05 — Contacto",
      "contact.title": "Cuéntenos qué decisión intenta tomar",
      "contact.lede":
        "Basta con una descripción breve del problema y de los datos de que dispone. Si no somos la opción adecuada, se lo diremos y le orientaremos hacia quien lo sea.",
      "contact.email": "Correo",
      "contact.phone": "Teléfono",
      "contact.address": "Oficina",

      "footer.tagline": "Estadística aplicada y machine learning · Málaga, España",
      "footer.addr":
        "Plaza Villa Castelldefels, Picasso Business Center, s/n, 29006 Málaga, España",
      "footer.legal": "Aviso legal y privacidad"
    }
  };

  var STORAGE_KEY = "enliva.lang";

  function applyLanguage(lang) {
    var dict = I18N[lang] || I18N.en;

    document.documentElement.lang = lang;
    if (dict.meta) {
      document.title = dict.meta.title;
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", dict.meta.description);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = dict[el.getAttribute("data-i18n")];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll(".lang button").forEach(function (btn) {
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function initialLanguage() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) {
      /* storage can be unavailable in private modes — fall through */
    }
    var nav = (navigator.language || "en").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  function wireLanguage() {
    document.querySelectorAll(".lang button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        applyLanguage(lang);
        try {
          window.localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
          /* ignore */
        }
      });
    });
    applyLanguage(initialLanguage());
  }

  function wireNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("nav");
    if (!toggle || !nav) return;

    function close() {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close();
    });
  }

  function wireHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function wireReveal() {
    var pending = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pending.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    pending.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i % 3, 2) * 70 + "ms";
    });

    var pollId = 0;
    var ticks = 0;

    function stop() {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (pollId) {
        window.clearInterval(pollId);
        pollId = 0;
      }
    }

    function sweep() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      pending = pending.filter(function (el) {
        if (el.getBoundingClientRect().top < vh * 0.92) {
          el.classList.add("is-visible");
          return false;
        }
        return true;
      });
      if (!pending.length) stop();
    }

    var lastRun = 0;
    function onScroll() {
      var now = Date.now();
      if (now - lastRun < 90) return;
      lastRun = now;
      sweep();
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    sweep();

    // Safety net: a few environments deliver neither scroll events nor
    // animation frames reliably (embedded webviews, background tabs).
    pollId = window.setInterval(function () {
      ticks += 1;
      if (ticks > 40) {
        stop();
        return;
      }
      sweep();
    }, 250);
  }

  function wireMisc() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    // Keep the mailto link in sync if the address is ever changed here.
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
      a.setAttribute("href", "mailto:" + EMAIL);
    });
  }

  function init() {
    wireLanguage();
    wireNav();
    wireHeader();
    wireReveal();
    wireMisc();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
