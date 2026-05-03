document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("nameForm");
  const nameInput = document.getElementById("nameInput");
  const welcomeMessage = document.getElementById("welcomeMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();

    if (name) {
      welcomeMessage.textContent = \`Welcome back, \${name}! Great to see you again.\`;
      welcomeMessage.style.display = "block";
      nameInput.value = "";
    }
  });
});