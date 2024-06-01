
import black_square from './assets/black_square.jpeg'
import ben_001 from './assets/ben_001.jpg'
import tom_002 from './assets/tom_002.jpg'
import ananya_003 from './assets/ananya_003.jpg'

const playerGrid = document.getElementById("hexGrid");

const row1 = [ben_001, tom_002, ananya_003, black_square, black_square, black_square]
const row2 = [black_square, black_square, black_square, black_square, black_square]

const playerURIs = Array(3).fill([...row1, ...row2]).flat();

// Track eliminated players
const eliminatedPlayers = [];

for (let i = 0; i < 33; i++) { 
    const playerDiv = document.createElement("li");
    playerDiv.classList.add("hex");
    playerDiv.innerHTML = `
        <div class="hexIn">
          <div class="hexLink">
            <img src="${playerURIs[(i%playerURIs.length)]}" alt="" />
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