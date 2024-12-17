// Funktion som aktiverar och stänger toggle vid musklick.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");

  const description = element.nextElementSibling; 
  if (description) {
    description.classList.toggle("active");
  }
}

// Hämta data från API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts);

    const accordion = document.querySelector(".content");

    // Begränsa till de första tre posterna
    posts.slice(0, 3).forEach((post, index) => {
      // Skapa och lägg till varje sektion
      const titleDiv = document.createElement("div");
      titleDiv.className = "title";
      titleDiv.textContent = `Sektion ${index + 1}`; // Ändrat till "Sektion 1", "Sektion 2", etc.

      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "description";
      descriptionDiv.innerHTML = `<p>${post.body}</p>`;

      // Lägg till en event listener för att toggla sektionen
      titleDiv.addEventListener("click", toggle);

      // Lägg till både titel och beskrivning till accordion
      accordion.appendChild(titleDiv);
      accordion.appendChild(descriptionDiv);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
