// script.js

// Function to handle form submission and display the threat assessment results
document.getElementById("threat-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get input values from the form
    const threatDescription = document.getElementById("threat-description").value;
    const threatLevel = document.getElementById("threat-level").value;
    const threatCategory = document.getElementById("threat-category").value;

    // Validate inputs
    if (!threatDescription || !threatLevel || !threatCategory) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Create a list item to display the results
    const resultItem = document.createElement("li");
    resultItem.classList.add("result-item");

    // Set the content of the result item
    resultItem.innerHTML = `
        <strong>Threat Description:</strong> ${threatDescription}<br>
        <strong>Risk Level:</strong> ${threatLevel}<br>
        <strong>Category:</strong> ${threatCategory}
    `;

    // Get the results container and append the new item
    const resultsContainer = document.getElementById("threat-results");
    resultsContainer.appendChild(resultItem);

    // Optionally, clear the form after submission
    document.getElementById("threat-form").reset();
});
