const playerGrid = document.getElementById("hexGrid");

const poshNames = [
    "James", "Edmond", "Charles", "Vincent",
    "Oliver", "Henry", "George", "William",
    "Edward", "Arthur", "Harry Lancaster", "Frederick",
    "Charles", "Hugh", "Alexander", "Sebastian",
    "Rupert", "Miles", "Peregrine", "Quentin",
    "Hugo", "Guy", "Humphrey", "Julian", "Archiebald"
]; 

console.log('Test')
// Track eliminated players
const eliminatedPlayers = [];

for (let i = 0; i < poshNames.length; i++) { 
    const playerDiv = document.createElement("li");
    playerDiv.classList.add("hex");
    playerDiv.innerHTML = `
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="https://picsum.photos/id/${i + 1}/500/500" alt="" />
          </a>
        </div>
    `;

    // Add click event listener
    playerDiv.addEventListener("click", () => {
        const playerName = poshNames[i];

        if (eliminatedPlayers.includes(playerName)) {
            // If already eliminated, un-eliminate them
            eliminatedPlayers.splice(eliminatedPlayers.indexOf(playerName), 1);
            playerDiv.classList.remove("eliminated");
        } else {
            // If not eliminated, eliminate them
            eliminatedPlayers.push(playerName);
            playerDiv.classList.add("eliminated");
        }

        // (Optional) Update the game state or display a message here
        console.log("Eliminated players:", eliminatedPlayers);
    });

    playerGrid?.appendChild(playerDiv); 
}