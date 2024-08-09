//Code Your Solution Below


  window.addEventListener("load", function () {
    let form = document.querySelector("form");
    console.log("Form loaded");

    form.addEventListener("submit", function (event) {
      let name = document.querySelector("input[name=testName]");
      let date = document.querySelector("input[name=testDate]");

      let type = document.querySelector("#rocketType");
      //let type = document.querySelector("input[name=rocketType]");
        
      
      let number = document.querySelector("input[name=boosterCount]");
      let rating = document.querySelector("input[name=windRating]");
      let servers = document.querySelector("input[name=productionServers]");

      if (name.value === "" || date.value === "" || type.value === "" ||
        number.value === "" || rating.value === "" || servers.value === "") {
        alert("Some fields are empty. Please fill all fields.");
        event.preventDefault();
      }
      else {
        alert("submit clicked: Username is: " + userNameInput.value);
      }
    });
  });
