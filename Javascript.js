function showFact() {

  // Put the fun fact text into the paragraph
  const funFactText = document.getElementById("fun-fact");

  funFactText.textContent =
      "Fun fact: I joined Naruto Run in UPLB.";

  // Get the Naruto image element
  const narutoImage = document.getElementById("fun-fact-image");

  // Add the animation class so the image slides in
  narutoImage.classList.add("show");
}