const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-plan]").forEach(btn => {
  btn.addEventListener("click", () => {
    const plan = btn.getAttribute("data-plan");
    const sel = document.getElementById("planSelect");
    if (sel && plan) sel.value = plan;
  });
});

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const subject = encodeURIComponent(`VoltEdge Media Consultation — ${data.get("business")}`);
    const body = encodeURIComponent(
`Hi VoltEdge Media,

Name: ${data.get("name")}
Business: ${data.get("business")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}

Need: ${data.get("need")}
Preferred plan: ${data.get("plan")}

Message:
${data.get("message")}

Thanks!`
    );

    window.location.href = `mailto:jhostins099@icloud.com?subject=${subject}&body=${body}`;
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
