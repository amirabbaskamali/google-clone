document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const googleSearchBtn = document.getElementById("google-search");
  const luckyBtn = document.getElementById("lucky");

  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
  }

  googleSearchBtn.addEventListener("click", performSearch);

  luckyBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`;
    } else {
      window.location.href = "https://www.google.com/doodles";
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
  });
});