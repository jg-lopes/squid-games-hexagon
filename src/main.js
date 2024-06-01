
import black_square from './assets/black_square.jpeg'
import ben_001 from './assets/ben_001.jpg'
import tom_002 from './assets/tom_002.jpg'
import ananya_003 from './assets/ananya_003.jpg'
import lauren_004 from './assets/lauren_004.jpg'
import julia_005 from './assets/julia_005.jpg'
import luke_006 from './assets/luke_006.jpg'
import aivis_007 from './assets/aivis_007.jpg'
import john_008 from './assets/john_008.jpg'
import stan_009 from './assets/009_stan.jpeg'
import axelle_010 from './assets/010_axelle.jpg'
import natalia_011 from './assets/011_natalia.jpg'
import charlie_015 from './assets/015_charlie.jpg'
import dan_016 from './assets/016_dan.jpg'
import maria_017 from './assets/017_maria.jpg'
import sienna_018 from './assets/018_sienna.jpg'
import wagstaff_019 from './assets/019_wagstaff.jpg'


const playerGrid = document.getElementById("hexGrid");

const row1 = [ben_001, tom_002, ananya_003, lauren_004, julia_005, luke_006]
const row2 = [aivis_007, john_008, stan_009, axelle_010, natalia_011]  // 7-11
const row3 = [black_square, black_square, black_square, charlie_015, dan_016, maria_017] // 12-17
const row4 = [sienna_018, wagstaff_019, black_square, black_square, black_square] // 18-22
const row5 = [black_square, black_square, black_square, black_square, black_square, black_square]
const row6 = [black_square, black_square, black_square, black_square, black_square]

const playerURIs = Array(6).fill([...row1, ...row2, ...row3, ...row4, ...row5, ...row6]).flat();

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