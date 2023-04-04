const emailLabels = document.querySelectorAll(".email-label");
const emails = document.querySelectorAll(".email-input");
const toggleBtns = document.querySelectorAll(".js-toggle-faq");

// CTA EMAIL INPUT ANIMATION
for (let i = 0; i < emails.length; i++) {
  emails[i].addEventListener("focus", function () {
    emailLabels[i].classList.add("slide-up");
  });
}

for (let i = 0; i < emails.length; i++) {
  emails[i].addEventListener("blur", function () {
    if (emails[i].value) return;

    emailLabels[i].classList.remove("slide-up");
  });
}

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
