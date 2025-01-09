// Array of quotes
const quotes = [
  "The best way to predict the future is to create it. - Peter Drucker",
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "If you want to achieve greatness stop asking for permission. - Anonymous",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "I can and I will. Watch me. - Unknown",
  "Success is not in what you have, but who you are. - Bo Bennett",
  "Dream big and dare to fail. - Norman Vaughan",
  "You are enough just as you are. - Meghan Markle",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "It always seems impossible until it's done. - Nelson Mandela",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "Don’t count the days, make the days count. - Muhammad Ali",
  "You miss 100% of the shots you don’t take. - Wayne Gretzky",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "Act as if what you do makes a difference. It does. - William James",
  "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
  "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis"
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
