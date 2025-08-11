// Typing animation (if you still want it in future)
const text = "Aspiring IT & Game Developer | Hobbyist | Passionate";
let index = 0;
const typingSpeed = 80;
const typingTarget = document.getElementById("typing-text");

function toggleTheme() {
  document.body.classList.toggle('light');
}


function typeText() {
  if (index < text.length) {
    typingTarget.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

window.addEventListener("load", typeText);

// Reveal animation on scroll (optional enhancement)
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
