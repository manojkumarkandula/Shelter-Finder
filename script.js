// Sample data for demonstration
const shelters = [
    "Shelter 1: 123 Main St, City A",
    "Shelter 2: 456 Elm St, City B",
    "Shelter 3: 789 Oak St, City C",
    "Shelter 4: 321 Maple St, City D",
];

document.getElementById("search-button").addEventListener("click", function() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // Clear previous results
    resultsContainer.style.display = "none"; // Hide initially

    const filteredShelters = shelters.filter(shelter => shelter.toLowerCase().includes(input));

    if (filteredShelters.length > 0) {
        filteredShelters.forEach(shelter => {
            const div = document.createElement("div");
            div.classList.add("result-item");
            div.textContent = shelter;
            resultsContainer.appendChild(div);
        });
        resultsContainer.style.display = "block"; // Show results
    } else {
        const div = document.createElement("div");
        div.classList.add("result-item");
        div.textContent = "No shelters found.";
        resultsContainer.appendChild(div);
        resultsContainer.style.display = "block"; // Show results
    }
});
