
function getPrediction() {
  const predictions = [
    "🚀 Your meme coin will moon... or maybe just orbit a potato.",
    "💫 The stars say: Buy high, sell higher. Or was it the opposite?",
    "🌌 Saturn just slid into your DMs. Better check your wallet.",
    "✨ Your crypto fate is strong... like your WiFi signal at 3am.",
    "🌠 Quorby sees a pump... but also a dump. The eternal cycle."
  ];

  const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
  document.getElementById("prediction").innerText = randomPrediction;
}
