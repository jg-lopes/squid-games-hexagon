const playerGrid = document.getElementById("hexGrid");

const playerURIs = ["src/assets/sg_hexagon.jpeg",  "src/assets/sg_hexagon2.jpeg"]

// Track eliminated players
const eliminatedPlayers = [];

for (let i = 0; i < 31; i++) { 
    const playerDiv = document.createElement("li");
    playerDiv.classList.add("hex");
    playerDiv.innerHTML = `
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="${playerURIs[(i%2)]}" alt="" />
          </a>
        </div>
    `;

    // Add click event listener
    playerDiv.addEventListener("click", () => {
        if (eliminatedPlayers.includes(i)) {
            // If already eliminated, un-eliminate them
            eliminatedPlayers.splice(eliminatedPlayers.indexOf(i), 1);
            playerDiv.classList.remove("eliminated");
        } else {
            // If not eliminated, eliminate them
            eliminatedPlayers.push(i);
            playerDiv.classList.add("eliminated");
        }

        // (Optional) Update the game state or display a message here
        console.log("Eliminated players:", eliminatedPlayers);
    });

    playerGrid?.appendChild(playerDiv); 
}