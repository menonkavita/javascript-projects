// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {


    // 1. Checking window loaded correctly
    window.addEventListener('load', event => {
        console.log("Window loaded");
    });

    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "270px";


    // 2. Takeoff button clicked -> 'yes' on confirmation window; 
    // The flight status should change to “Shuttle in flight.”
    // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
    // The shuttle height should increase by 10,000 miles.


    const takeOffButton = document.getElementById("takeoff");
    let status = document.getElementById("flightStatus");
    let heightOfShuttle = document.getElementById("spaceShuttleHeight");

    takeOffButton.addEventListener('click', event => {
        if (status.innerHTML !== "Shuttle in flight") {
            if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
                status.innerHTML = "Shuttle in flight";
                console.log(status.innerHTML);

                document.getElementById("shuttleBackground").style.backgroundColor = "blue";
                heightOfShuttle.innerHTML = parseInt(heightOfShuttle.innerHTML) + 10000;
                console.log(heightOfShuttle.innerHTML);

                rocket = document.getElementById("rocket");
                rocket.style.position = "absolute";
                rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
            }
        }
    });

    // 3. Land button clicked -> window alert lets user know “The shuttle is landing. Landing gear engaged.”
    // The flight status should change to “The shuttle has landed.”
    // The background color of the shuttle flight screen should change from blue to green.
    // The shuttle height should go down to 0.

    const landButton = document.getElementById("landing");

    landButton.addEventListener('click', event => {
        if (status.innerHTML === "Shuttle in flight") {
            window.alert("The shuttle is landing. Landing gear engaged.");

            status.textContent = "The shuttle has landed.";
            console.log(status.innerHTML);

            document.getElementById("shuttleBackground").style.backgroundColor = "green";


            heightOfShuttle.textContent = "0";
            console.log(heightOfShuttle.innerHTML);

            rocket.style.bottom = "0px";
            rocket.style.left = "270px";
        }
    });


    // 4. Abort Mission button click -> 'yes' window confirm “Confirm that you want to abort the mission.”;
    // The flight status should change to “Mission aborted.”
    // The background color of the shuttle flight screen should change from blue to green.
    // The shuttle height should go to 0.

    const missionAbortButton = document.getElementById("missionAbort");

    missionAbortButton.addEventListener('click', event => {
        if (status.innerHTML === "Shuttle in flight") {
            if (window.confirm("Confirm that you want to abort the mission.")) {
                document.getElementById("flightStatus").textContent = "Mission aborted.";
                console.log(document.getElementById("flightStatus").innerHTML);

                document.getElementById("shuttleBackground").style.backgroundColor = "green";
                document.getElementById("shuttleBackground").style.backgroundColor = "red";

                document.getElementById("spaceShuttleHeight").textContent = "0";
                console.log(document.getElementById("spaceShuttleHeight").innerHTML);

                rocket.style.bottom = "0px";
                rocket.style.left = "270px";

            }
        }
    });

    //5. “Up”, “Down”, “Right”, and “Left” buttons click ->
    // The rocket image should move 10 px in the direction of the button that was clicked.
    // If the “Up” or “Down” buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    //document.getElementById("rocket").style.position = "absolute";

    //let currentPos= document.getElementById("rocket").offsetTop;

    const upButton = document.getElementById("up");

    upButton.addEventListener('click', event => {
        //check if shuttle is in flight
        if (status.innerHTML === "Shuttle in flight" && parseInt(rocket.style.bottom) < 250) {
            console.log("Space shuttle going Up");
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
            console.log(rocket.style.bottom);

            heightOfShuttle.innerHTML = parseInt(heightOfShuttle.innerHTML) + 10000;
            console.log(heightOfShuttle.innerHTML);
        }
    });


    const downButton = document.getElementById("down");

    downButton.addEventListener('click', event => {
        if (status.innerHTML === "Shuttle in flight" && parseInt(rocket.style.bottom) > 0) {
            console.log("Space shuttle going Down");
            rocket.style.bottom = (parseInt(rocket.style.bottom) - 10) + "px";
            console.log(rocket.style.bottom);

            heightOfShuttle.innerHTML = parseInt(heightOfShuttle.innerHTML) - 10000;
            console.log(heightOfShuttle.innerHTML);
        }
    });


    const rightButton = document.getElementById("right");

    rightButton.addEventListener('click', event => {
        if (status.innerHTML === "Shuttle in flight" && parseInt(rocket.style.left) < 620) {
            console.log("Space shuttle going Right");

            rocket.style.left = (parseInt(rocket.style.left) + 10) + "px";
            console.log(rocket.style.left);
            console.log(heightOfShuttle.innerHTML); //height stays same.
        }
    });


    const leftButton = document.getElementById("left");

    leftButton.addEventListener('click', event => {
        if (status.innerHTML === "Shuttle in flight" && parseInt(rocket.style.left) > -20) {
            console.log("Space shuttle going Left");

            rocket.style.left = (parseInt(rocket.style.left) - 10) + "px";
            console.log(rocket.style.left);
            console.log(heightOfShuttle.innerHTML); //height stays same.
        }
    });

    // BONUS MISSIONS:
    // Keep rocket from flying off the background
    // rocket.style.bottom = "0px";
    // rocket.style.left = "270px";
}

window.addEventListener("load", init);
