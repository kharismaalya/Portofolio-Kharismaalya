const projects = {
  attendance: {
    title: "Capstone Presensi GPS & Kamera",
    subtitle: "Analisis Sistem",
    image: "assets/PRESENSI.png",
    alt: "Tampilan aplikasi Capstone Presensi GPS dan Kamera",
    overview: "Sistem presensi berbasis GPS dan kamera untuk proyek capstone.",
    context: "Perancangan alur presensi yang memanfaatkan lokasi GPS dan kamera.",
    role: "Kontributor analisis sistem",
    process: "Menganalisis kebutuhan dan merancang alur sistem presensi berbasis GPS dan kamera.",
    result: "Meraih Juara 3 Proyek Capstone Web Presensi.",
    tools: ["System Analysis", "GPS", "Camera"]
  },
  pipeline: {
    title: "Pipeline Scraping Twitter/X",
    subtitle: "Python ETL Pipeline",
    image: "assets/PIPELINE.png",
    alt: "Diagram alur pipeline ETL untuk data Twitter/X",
    overview: "Pipeline ETL otomatis berbasis Python untuk mengumpulkan dan mengolah data Twitter/X.",
    context: "Tugas akhir dengan studi kasus Program Makan Bergizi Gratis.",
    role: "Pengembangan pipeline ETL dan pengolahan data",
    process: "Mengembangkan alur pengumpulan, pembersihan, dan pengolahan data Twitter/X secara otomatis menggunakan Python.",
    result: "Pipeline ETL otomatis untuk data Twitter/X.",
    tools: ["Python", "ETL", "Data Scraping", "Data Engineering"]
  },
  clustering: {
    title: "Analisis Clustering Kelulusan Mahasiswa",
    subtitle: "Analisis Clustering K-Means",
    image: "assets/project-clustering.svg",
    alt: "Hasil Klustering K-means scatter plot",
    overview:
      "Proyek ini menggunakan metode K-Means untuk mengelompokkan data historis mahasiswa berdasarkan Tracer Study.",
    context:
      "Dikerjakan saat mengikuti program pertukaran mahasiswa, dengan fokus melihat pola tahun kelulusan mahasiswa Program Studi Sistem Informasi Universitas Brawijaya periode 2016-2020.",
    role: "Kontributor analisis data",
    process:
      "Mengolah data historis, menerapkan metode clustering, lalu menyajikan pola hasil analisis dalam visualisasi yang mudah dibaca.",
    result: "Angka hasil akhir belum dicantumkan.",
    tools: ["Data Analysis", "K-Means", "Clustering", "Data Visualization"]
  },
  medical: {
    title: "JogjaCare – Medical Tourism Website",
    subtitle: "Manajer Proyek & Analis Data",
    image: "assets/jogjacare.png",
    alt: "Tampilan halaman utama JogjaCare untuk proyek Medical Tourism Website",
    overview:
      "Situs Medical Tourism ini merupakan proyek gabungan beberapa mata kuliah.",
    context:
      "Situs ini dikembangkan secara kolaboratif dengan koordinasi kebutuhan, pengambilan keputusan, dan pemecahan masalah selama proses pengembangan.",
    role: "Manajer Proyek & Analis Data",
    process:
      "Mengoordinasikan komunikasi dan pekerjaan tim, mendukung pengambilan keputusan, serta berkontribusi sebagai analis selama pengembangan proyek.",
    result: "Hasil akhir proyek belum dicantumkan.",
    tools: ["Project Management", "Data Analysis", "Team Coordination", "Web Development", "Communication"]
  },
  asthma: {
    title: "Sistem Pakar Diagnosa Penyakit Asma",
    subtitle: "Sistem Berbasis Aturan",
    image: "assets/project-expert-system.svg",
    alt: "Rule-based expert system interface for asthma diagnosis",
    overview:
      "Sistem pakar berbasis website untuk membantu proses diagnosis awal penyakit asma.",
    context:
      "Sistem menggunakan aturan dan data gejala yang dikumpulkan sebagai dasar diagnosis awal.",
    role: "Kontributor pengembangan sistem",
    process:
      "Mengumpulkan data gejala, menyusun aturan, dan mengembangkan alur situs untuk konsultasi awal.",
    result: "Hasil akhir proyek belum dicantumkan.",
    tools: ["Expert System", "Rule-Based System", "Web Development", "Data Collection"]
  },
  screening: {
    title: "SIMBPA – Skrining Ibu & Anak",
    subtitle: "Proyek Desain Antarmuka",
    image: "assets/SKRINING%20IBU.jpeg",
    alt: "Tampilan SIMBPA untuk skrining kesehatan ibu dan anak",
    overview:
      "Proyek kolaborasi antara mahasiswa Kebidanan dan Teknologi Informasi.",
    context:
      "Tim Teknologi Informasi mengembangkan kebutuhan skrining kesehatan ibu dan anak menjadi rancangan UI untuk versi mobile dan desktop.",
    role: "Kontributor desain antarmuka",
    process:
      "Menerjemahkan kebutuhan skrining menjadi rancangan antarmuka untuk pengguna perangkat seluler dan desktop.",
    result: "Rancangan UI desktop dan mobile serta prototipe interaktif menggunakan Figma.",
    tools: ["Figma", "UI/UX", "Collaboration", "Requirement Analysis", "Mobile UI", "Desktop UI"]
  }
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const modal = document.querySelector("[data-modal]");
const modalPanel = document.querySelector(".modal-panel");
const modalContent = document.querySelector("[data-modal-content]");
let lastFocusedElement = null;

document.getElementById("year").textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", translateText(isOpen ? "Open navigation" : "Close navigation"));
  navMenu.classList.toggle("is-open", !isOpen);
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", translateText("Open navigation"));
    navMenu.classList.remove("is-open");
  });
});

document.querySelectorAll("[data-project-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-project-track]");
  const previous = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");

  if (!track || !previous || !next) return;

  const updateControls = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll - 2;
  };

  const scrollByCard = (direction) => {
    const card = track.querySelector(".small-card");
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  previous.addEventListener("click", () => scrollByCard(-1));
  next.addEventListener("click", () => scrollByCard(1));

  let dragStartX = 0;
  let dragStartScroll = 0;
  let isDragging = false;

  track.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    isDragging = true;
    dragStartX = event.clientX;
    dragStartScroll = track.scrollLeft;
    track.classList.add("is-dragging");
    track.setPointerCapture(event.pointerId);
  });

  track.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    track.scrollLeft = dragStartScroll - (event.clientX - dragStartX);
  });

  const stopDragging = () => {
    isDragging = false;
    track.classList.remove("is-dragging");
  };

  track.addEventListener("pointerup", stopDragging);
  track.addEventListener("pointercancel", stopDragging);
  track.addEventListener("lostpointercapture", stopDragging);
  track.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls);
  updateControls();
});

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.querySelectorAll("[data-certificate]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    lastFocusedElement = document.activeElement;
    const title = link.closest(".achievement-card").querySelector("h3").textContent;
    const heading = document.createElement("h2");
    heading.id = "modal-title";
    heading.textContent = title;
    const image = document.createElement("img");
    image.src = link.getAttribute("href");
    image.alt = `Sertifikat ${title}`;
    modalContent.replaceChildren(heading, image);
    translateContent(modalContent);
    modalPanel.classList.add("certificate-modal");
    modal.hidden = false;
    modalPanel.scrollTop = 0;
    document.body.classList.add("modal-open");
    modalPanel.querySelector(".modal-close").focus();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
  if (event.key === "Tab" && !modal.hidden) {
    const controls = [...modalPanel.querySelectorAll('button, a[href], [tabindex="0"]')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === modalPanel)) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
});

function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  lastFocusedElement = document.activeElement;
  modalContent.innerHTML = `
    <img src="${project.image}" alt="${project.alt}">
    <p class="eyebrow">${project.subtitle}</p>
    <h2 id="modal-title">${project.title}</h2>
    <div class="detail-grid">
      <div>
        <h3>Overview</h3>
        <p>${project.overview}</p>
      </div>
      <div>
        <h3>Problem / Context</h3>
        <p>${project.context}</p>
      </div>
      <div>
        <h3>Role</h3>
        <p>${project.role}</p>
      </div>
      <div>
        <h3>Process</h3>
        <p>${project.process}</p>
      </div>
      <div>
        <h3>Result / Output</h3>
        <p>${project.result}</p>
      </div>
      <div>
        <h3>Tools / Technology</h3>
        <div class="tags">${project.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
      </div>
    </div>
  `;
  translateContent(modalContent);
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalPanel.focus();
}

function closeModal() {
  modal.hidden = true;
  modalPanel.classList.remove("certificate-modal");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
