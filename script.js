document.addEventListener("DOMContentLoaded", function () {
    // Get the container element
    var container = document.getElementById("card-cont");
  
    // Function to fetch and display cards based on the provided category
    function displayCards(category) {
      fetch("data.json")
        .then(response => response.json())
        .then(data => {
          // Clear the container before appending new cards
          container.innerHTML = '';
  
          // Iterate over the selected category of data and create Bootstrap cards
          data[category].forEach(card => {
            var cardHtml = `
              <div class="card">
                <img src="${card.src}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${card.title}</h5>
                  <p class="card-text">${card.content}</p>
                  <a href="#" class="btn btn-primary px-4">Buy</a>
                </div>
              </div>
            `;
  
            // Append the card HTML to the container
            container.innerHTML += cardHtml;
          });
        })
        .catch(error => console.error("Error fetching data:", error));
    }
  
    // Attach click event listeners to buttons
    document.getElementById("drinks-btn").addEventListener("click", function () {
      displayCards("coolDrinks");
    });
  
    document.getElementById("pizza-btn").addEventListener("click", function () {
      displayCards("pizza");
    });
  
    document.getElementById("snacks-btn").addEventListener("click", function () {
      displayCards("snacks");
    });
  });
