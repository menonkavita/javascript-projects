//TODO: Add Your Code Below

function printAstronauts(astronautsArr) {
    let container = document.getElementById("container");
    console.log("printAstronauts called...");

    container.innerHTML = "";

    for (let i = 0; i < astronautsArr.length; i++) {
        container.innerHTML = container.innerHTML +
            // HTML Template
            `<div class="astronaut">                      
        <div class="bio">
            <h3>${astronautsArr[i].firstName} ${astronautsArr[i].lastName}</h3>
            <ul>
                <li>Hours in space: ${astronautsArr[i].hoursInSpace} </li>
                <li>Active: ${astronautsArr[i].active} </li>
                <li>Skills: ${astronautsArr[i].skills} </li>
            </ul>
        </div>
        <img class="avatar" src="${astronautsArr[i].picture}"> </img>
    </div>`;
    } // end of for
};


function init() {
    console.log("window loaded...");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {

        response.json().then(function (json) {
            console.log(json);
            printAstronauts(json);


            // BONUS MISSIONS
            // 1. Display the astronauts sorted from most to least time in space.

            const buttonSortDesc = document.getElementById("astronautsSortDesc");
            buttonSortDesc.addEventListener("click", event => {
                console.log("Button clicked - Descending");
                json.sort((b, a) => (a.hoursInSpace > b.hoursInSpace ? 1 : -1));
                console.log(json);
                printAstronauts(json);
            });

            const buttonSortAsc = document.getElementById("astronautsSortAsc");
            buttonSortAsc.addEventListener("click", event => {
                console.log("Button clicked - Ascending");
                json.sort((a, b) => (a.hoursInSpace > b.hoursInSpace ? 1 : -1));
                console.log(json);
                printAstronauts(json);
            });


            // 2. Make the “Active: true” text green, for astronauts that are still active (active is true).
            // ???



            // 3. Add a count of astronauts to the page.
            let astronautsCount = document.getElementById("astronautsCount");
            astronautsCount.innerHTML = astronautsCount.innerHTML + json.length;



        });
    });
};


window.addEventListener("load", init());

