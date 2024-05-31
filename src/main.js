import indoors_centered_vertical from './assets/indoors_centered_vertical.jpg';	
import slight_off_center_vertical from './assets/slight_off_center_vertical.jpg';
import landscape_off_center_tuscany from './assets/landscape_off_center_tuscany.jpg';
import landscape_off_center_eiffel from './assets/landscape_off_center_eiffel.jpg';
import landscape_center_eiffel from './assets/landscape_center_eiffel.jpg';	
import square_eiffel from './assets/square_eiffel.jpg';
import landscape_slight_off_center_eiffel from './assets/landscape_slight_off_center_eiffel.jpg';

const playerGrid = document.getElementById("hexGrid");

const playerURIs = [indoors_centered_vertical, slight_off_center_vertical, landscape_off_center_tuscany, landscape_off_center_eiffel, landscape_center_eiffel, square_eiffel, landscape_slight_off_center_eiffel]

// Track eliminated players
const eliminatedPlayers = [];

for (let i = 0; i < 31; i++) { 
    const playerDiv = document.createElement("li");
    playerDiv.classList.add("hex");
    playerDiv.innerHTML = `
        <div class="hexIn">
          <a class="hexLink" href="#">
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