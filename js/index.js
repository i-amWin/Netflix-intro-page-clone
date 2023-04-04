const emailLabel = document.getElementById("email-label");
const email = document.getElementById("email");
const toggleBtns = document.querySelectorAll(".js-toggle-faq");

// CTA EMAIL INPUT ANIMATION
email.addEventListener("focus", function () {
  emailLabel.classList.add("slide-up");
});

email.addEventListener("blur", function () {
  if (email.value) return;

  emailLabel.classList.remove("slide-up");
});

// SETTING HEIGHT OF EACH FAQ ANSWER

toggleBtns.forEach(function (toggleBtn) {
  const panel = toggleBtn.nextElementSibling;

  panel.style.setProperty("--answer-height", `${panel.scrollHeight}px`);
});

// FAQS ACCORDIAN
function hideFaqs(currentBtn) {
  for (let i = 0; i < toggleBtns.length; i++) {
    if (toggleBtns[i] == currentBtn) continue;

    toggleBtns[i].classList.remove("active");
    toggleBtns[i].nextElementSibling.setAttribute("aria-hidden", "true");
  }
}

toggleBtns.forEach(function (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    hideFaqs(toggleBtn);

    this.classList.toggle("active");

    // console.log(toggleBtn.nextElementSibling);
    this.nextElementSibling.setAttribute("aria-hidden", "false");
  });
});
