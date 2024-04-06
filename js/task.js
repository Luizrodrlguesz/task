document.getElementById("search-link").addEventListener("click", function(event) {
    event.preventDefault(); // Para evitar que o link redirecione
    var searchBar = document.querySelector(".search-bar");
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
});

document.getElementById("search-icon").addEventListener("click", function(event) {
    var searchBar = document.getElementById("search-bar");
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block"; // Exibe a barra de pesquisa
    } else {
        searchBar.style.display = "none"; // Oculta a barra de pesquisa se já estiver visível
    }
});