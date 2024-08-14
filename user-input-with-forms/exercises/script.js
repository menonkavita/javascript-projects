//Code Your Solution Below


  window.addEventListener("load", function () {
    let form = document.querySelector("form");
    console.log("Form loaded");

    form.addEventListener("submit", function (event) {
      let name = document.querySelector("input[name='testName']");
      let date = document.querySelector("input[name='testDate']");

      //let type = document.querySelector("#rocketType");
      let type = document.querySelector("select[name='rocketType']");  
      let number = document.querySelector("input[name='boosterCount']");

      let rating = document.querySelector("input[name='windRating']");
      console.log("windRating before if", rating.value);

      let servers = document.querySelector("input[name='productionServers']");         // checks if checkbutton.checked is true or false;
      console.log("productionServers checked?", servers.checked);                      // since its checkbutton.value is always 'on'.

      if (name.value === "" || date.value === "" || type.value === "" ||
        number.value === "" ) {
        alert("Some fields are empty. Please fill all fields.");
        console.log("windRating in if", rating.value);
        console.log("productionServers in if", servers.value);
        event.preventDefault();
      }

      console.log("windRating after if", rating.value);
      console.log("productionServers after if - checked", servers.checked, "Value is", servers.value);
    });
  });
