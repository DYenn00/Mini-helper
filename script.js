//logic for random messages and activity
const popup = document.getElementById("popup");
const minihelper = document.getElementById("minihelper");

const messages = [
  "Hey there! Need help?",
  "Uhh..did you remember to save your work 💾",
  "Just a reminder..You’re doing great today!",
  "Remember to take short breaks ☕",
  "Push your code to GitHub regularly 🚀",
  "Keep your code clean and commented 🧹"
];

minihelper.addEventListener("click", () => {
  popup.textContent = messages[Math.floor(Math.random() * messages.length)];
  popup.classList.add("show");

  // go idle after a short delay
  setTimeout(() => {
    popup.classList.remove("show");
  }, 4000);
});
