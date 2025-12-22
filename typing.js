document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("typing");

  const texts = [
    `Je suis <span class="highlight">Ange-Yoshua Seignon ZINSOU</span>`,
    `Étudiant en BTS SIO SLAM, passionné par le développement, l’IA et la cybersécurité`,
    `Ambition : créer des projets innovants mêlant hacking éthique et intelligence artificielle`,
    `Bienvenue sur mon portfolio`
  ];

  const typingSpeed = 50;     // ms par lettre
  const fadeDuration = 800;   // ms pour fondu
  const displayDuration = 1500; // temps avant fade

  let textIndex = 0;

  function typeText(text, callback) {
    let charIndex = 0;
    target.style.opacity = 1; // s'assurer qu'il est visible

    function type() {
      if (charIndex <= text.length) {
        target.innerHTML = text.slice(0, charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(callback, displayDuration); // après pause, fade
      }
    }

    type();
  }

  function fadeOut(callback) {
    target.style.transition = `opacity ${fadeDuration}ms`;
    target.style.opacity = 0;

    setTimeout(callback, fadeDuration);
  }

  function nextText() {
    typeText(texts[textIndex], () => {
      fadeOut(() => {
        textIndex++;
        if (textIndex >= texts.length) textIndex = 0;
        nextText();
      });
    });
  }

  // Lancer la boucle
  nextText();
});
