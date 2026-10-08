const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const puzzleBtn = document.getElementById("puzzleBtn");
const puzzleBox = document.getElementById("puzzleBox");
const answerBtn = document.getElementById("answerBtn");
const answer = document.getElementById("answer");

puzzleBtn?.addEventListener("click", () => {
  puzzleBox.hidden = !puzzleBox.hidden;
  puzzleBtn.innerHTML = puzzleBox.hidden ? "Give me a puzzle <span>↗</span>" : "Hide puzzle <span>↑</span>";
});

answerBtn?.addEventListener("click", () => {
  answer.hidden = !answer.hidden;
  answerBtn.textContent = answer.hidden ? "Reveal answer" : "Hide answer";
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav nav a")];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.opacity = link.getAttribute("href") === `#${entry.target.id}` ? "1" : ".55";
      });
    }
  });
}, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));
