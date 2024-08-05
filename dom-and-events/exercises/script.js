function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });

     missionAbort.addEventListener('mouseover', event =>{
            //document.getElementById("abortMission").style.backgroundColor="red";
            missionAbort.style.backgroundColor="red";
     });

     missionAbort.addEventListener("mouseout", event =>{
        missionAbort.style.backgroundColor="";
     });

     missionAbort.addEventListener('click', event =>{
        if(window.confirm("Are you sure you want to abort the mission?"))
        {
            window.alert("Misison aborted! Space Shuttle returning home.");
            paragraph.innerHTML = "Misison aborted! Space Shuttle is on the way home.";
        }
        
     });
    
}

window.addEventListener("load", init);
