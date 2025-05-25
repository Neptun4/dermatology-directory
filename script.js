window.onload = function () {
  const container = document.getElementById("directory");
  const searchInput = document.getElementById("searchInput");

  function displayDermatologists(data) {
    container.innerHTML = ""; // Clear previous results

    data.forEach(doc => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="card shadow-sm mb-4">
          <div class="card-body">
            <h5 class="card-title">${doc.name}</h5>
            <p class="card-text">${doc.clinic}, ${doc.city}</p>
            <a href="${doc.website}" target="_blank" class="btn btn-outline-primary">Visit Website</a>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  }

  // Initial display
  displayDermatologists(dermatologists);

  // 🔎 Search functionality
  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();
    const filtered = dermatologists.filter(doc =>
      doc.name.toLowerCase().includes(keyword) ||
      doc.city.toLowerCase().includes(keyword) ||
      doc.clinic.toLowerCase().includes(keyword)
    );
    displayDermatologists(filtered);
  });
};
