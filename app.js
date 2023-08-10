// Array of different sentences
const sentences = [
  "Firechain is a novel smart platform designed to power the next generation and now the line ends with decentralized finance.",
  "Firechain's innovative approach empowers decentralized social media, personal finance, and more.",
  "Join Firechain and experience the future of decentralized technology.",
  // Add more sentences here
];

// Function to update the text
function updateText() {
  const textElement = document.getElementById("text");
  let index = 0;

  setInterval(function() {
      textElement.textContent = sentences[index];
      index = (index + 1) % sentences.length;
  }, 5000); // Change sentence every 5 seconds
}

// Call the function when the page loads
window.onload = function() {
  updateText();
};



// Function to toggle the dark and light themes
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");
}

// Get the toggle theme checkbox element
const toggleThemeCheckbox = document.getElementById("toggle-theme");

// Add an event listener to the toggle theme checkbox
toggleThemeCheckbox.addEventListener("change", toggleTheme);

