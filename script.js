// Array of quotes
const quotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "If you want to achieve greatness stop asking for permission. - Anonymous",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I can and I will. Watch me. - Unknown",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "Dream big and dare to fail. - Norman Vaughan",
  "You are enough just as you are. - Meghan Markle"
];

// Select the quote and button elements
const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-btn");

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Add event listener to the button
generateButton.addEventListener("click", generateQuote);
