const requestURL =
  "https://kinmono.github.io/wdd230/final_project/data/vehicles.json";

function mainServices() {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      //console.table(jsonObject);

      const vehicles = jsonObject["vehicles"];

      let spacer = 0;
      for (let i in vehicles) {
        if (vehicles[i].model.length > spacer) {
          spacer = vehicles[i].model.length;
        }
      }

      for (let i in vehicles) {
        let cardItem = document.createElement("div");
        let h4 = document.createElement("h4");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let divImg = document.createElement("div");
        let divOverlayP = document.createElement("div");
        let divOverlay = document.createElement("div");
        let divTxt = document.createElement("div");
        let divBtn = document.createElement("div");
        let a = document.createElement("a");

        cardItem.classList.add("card-rental");
        divImg.classList.add("center");
        divOverlayP.classList.add("overlay-parent");
        divOverlay.classList.add("overlay");
        divTxt.classList.add("text");
        divBtn.classList.add("button");

        h4.textContent = vehicles[i].type + "s";
        img.src = "images/" + vehicles[i].defaultImg;
        img.alt = vehicles[i].type;

        divOverlay.innerHTML =
          "$" + vehicles[i].model[0].booking[0].full + "<sup>*</sup>";

        divTxt.innerHTML = "<h5>Models:</h5>";
        for (let ii in vehicles[i].model) {
          divTxt.innerHTML += vehicles[i].model[ii].type + "<br>";
        }

        for (let iii = vehicles[i].model.length; iii < spacer; iii++) {
          divTxt.innerHTML += "<br>";
        }

        divTxt.innerHTML +=
          "<sub>*Price based on " +
          vehicles[i].model[0].type +
          "<br>" +
          "&nbsp;".repeat(2) +
          "Full Day Rental w/Reservation</sub>";

        a.href = "rentals.html#" + vehicles[i].type;
        a.textContent = "Explore our " + vehicles[i].type + "s";

        divBtn.append(a);

        divImg.append(divOverlayP);

        divOverlayP.append(img);
        divOverlayP.append(divOverlay);

        div.append(divImg);
        div.append(divTxt);
        div.append(divBtn);

        cardItem.append(h4);
        cardItem.append(div);

        document.getElementById("services").append(cardItem);
      }
    });
}

function rentalServices() {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      //console.table(jsonObject);

      const vehicles = jsonObject["vehicles"];

      let table = document.createElement("table");
      let caption = document.createElement("caption");
      let thr1 = document.createElement("tr");
      let thr2 = document.createElement("tr");

      caption.textContent = "Max Persons and Price Chart (Includes Tax)";
      thr1.innerHTML =
        "<td colspan='2'></td><td colspan='2'>Reservation</td><td colspan='2'>Walk-In</td>";
      thr2.innerHTML =
        "<td>Rental Type</td><td>Max. Persons</td><td>Half-Day<br>(3 Hrs)</td><td>Full Day</td><td>Half-Day<br>(3 Hrs)</td><td>Full Day</td>";

      table.append(caption);
      table.append(thr1);
      table.append(thr2);

      for (let i in vehicles) {
        for (let ii in vehicles[i].model) {
          let cardItem = document.createElement("div");
          let h4 = document.createElement("h4");
          let div = document.createElement("div");
          let img = document.createElement("img");
          let divImg = document.createElement("div");
          let divOverlayP = document.createElement("div");
          let divOverlay = document.createElement("div");
          let divTxt = document.createElement("div");
          let divBtn = document.createElement("div");
          let aBtn = document.createElement("a");
          let tr = document.createElement("tr");

          cardItem.classList.add("card-rental");
          divImg.classList.add("center");
          divOverlayP.classList.add("overlay-parent");
          divOverlay.classList.add("overlay");
          divTxt.classList.add("text");
          divBtn.classList.add("button");

          if (ii == 0) {
            h4.id = vehicles[i].type;
          }

          h4.innerHTML = vehicles[i].model[ii].type;

          let maxCap = vehicles[i].model[ii].maxPersons;

          tr.innerHTML =
            "<td>" +
            vehicles[i].model[ii].type +
            "</td><td>" +
            maxCap +
            "</td><td>" +
            "$" +
            vehicles[i].model[ii].booking[0].half +
            "</td><td>" +
            "$" +
            vehicles[i].model[ii].booking[0].full +
            "</td><td>" +
            "$" +
            vehicles[i].model[ii].booking[1].half +
            "</td><td>" +
            "$" +
            vehicles[i].model[ii].booking[1].full +
            "</td>";

          img.src = "images/" + vehicles[i].model[ii].defaultImg;
          img.alt = vehicles[i].model[ii].type;

          divOverlay.innerHTML =
            "$" + vehicles[i].model[ii].booking[0].full + "<sup>*</sup>";

          divTxt.innerHTML = "<h5>Reservation Pricing:</h5>";
          divTxt.innerHTML +=
            "$" +
            vehicles[i].model[ii].booking[0].half +
            " - Half Day(3 hour) Rental<br>";
          divTxt.innerHTML +=
            "$" +
            vehicles[i].model[ii].booking[0].full +
            " - Full Day Rental*<br>";

          divTxt.innerHTML += "<h5>Walk-in Pricing:</h5>";
          divTxt.innerHTML +=
            "$" +
            vehicles[i].model[ii].booking[1].half +
            " - Half Day(3 hour) Rental<br>";
          divTxt.innerHTML +=
            "$" +
            vehicles[i].model[ii].booking[1].full +
            " - Full Day Rental<br>";

          divTxt.innerHTML += "<h5>Details:</h5>";
          divTxt.innerHTML += vehicles[i].model[ii].type + "<br>";

          if (vehicles[i].model[ii].power != null) {
            divTxt.innerHTML +=
              "Power: " + vehicles[i].model[ii].power + "<br>";
          }
          if (maxCap > 1) {
            divTxt.innerHTML += "Max. Capacity: " + maxCap + " People<br>";
          } else {
            divTxt.innerHTML += "Max. Capacity: " + maxCap + " Person<br>";
          }
          if (vehicles[i].model[ii].details != null) {
            divTxt.innerHTML += "Additional Features:<br>";
            for (let iii in vehicles[i].model[ii].details) {
              if (iii == 0) {
                divTxt.innerHTML +=
                  "&nbsp;".repeat(9) +
                  vehicles[i].model[ii].details[iii] +
                  "<br>";
              } else {
                divTxt.innerHTML +=
                  "&nbsp;".repeat(9) +
                  vehicles[i].model[ii].details[iii] +
                  "<br>";
              }
            }
          }

          divTxt.innerHTML +=
            "<sub>*Price based on " +
            vehicles[i].model[ii].type +
            "<br>" +
            "&nbsp;".repeat(2) +
            "Full Day Rental w/Reservation</sub>";

          aBtn.href = "reservation.html?type=" + vehicles[i].model[ii].type;
          aBtn.textContent = "Reserve " + vehicles[i].model[ii].type;

          divBtn.append(aBtn);

          divImg.append(divOverlayP);

          divOverlayP.append(img);
          divOverlayP.append(divOverlay);

          div.append(divImg);
          div.append(divTxt);
          div.append(divBtn);

          cardItem.append(h4);
          cardItem.append(div);

          table.append(tr);

          document.getElementById("rentals").append(cardItem);
        }
      }

      document.getElementById("rentalTable").append(table);

      if (window.location.hash) {
        var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        var hashEl = document.getElementById(hash);
        hashEl.scrollIntoView(true);
        window.scrollBy(0, -250);
      }
    });
}

function reservation(rentalID) {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      //console.table(jsonObject);

      const vehicles = jsonObject["vehicles"];

      let vehicleList = document.getElementById(rentalID);

      let optionDefault = document.createElement("option");

      optionDefault.value = "none";
      optionDefault.textContent = "Please Select a Rental";
      optionDefault.selected = true;
      optionDefault.disabled = true;

      vehicleList.append(optionDefault);

      for (let i in vehicles) {
        for (let ii in vehicles[i].model) {
          let optionItem = document.createElement("option");

          optionItem.value = i + "." + ii;
          optionItem.textContent = vehicles[i].model[ii].type;

          vehicleList.append(optionItem);
        }
      }
    });
}

function addRental(addBtn) {
  //referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  let rental = addBtn.parentNode.parentNode.previousElementSibling;
  //console.log(rental);

  let select = document.createElement("select");

  let iteration = parseInt(rental.id.replace("rental_", ""));
  let id = "rental_" + (iteration + 1);

  select.id = id;
  select.name = id;
  select.setAttribute("onchange", "calculateCost();");
  //console.log(select)

  rental.parentNode.insertBefore(select, rental.nextSibling);

  reservation(id);
}

function removeRental(remBtn) {
  let rental = remBtn.parentNode.parentNode.previousElementSibling;

  if (rental.id == "rental_0") {
    // change the selection on the item
  } else {
    rental.remove();
    calculateCost();
  }
}

function calculateCost() {
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const vehicles = jsonObject["vehicles"];

      let formElements = document.getElementById("application").elements;
      let total = document.getElementById("total");
      let costDiv = document.getElementById("costDiv");

      let cost = 50;

      costDiv.innerHTML = "$50.00 - Security Deposit";

      for (let i = 0; i < formElements.length; i++) {
        if (
          formElements[i].id != null &&
          formElements[i].id.substring(0, 7) == "rental_"
        ) {
          let rental = formElements[i].value.split(".");
          let price = vehicles[rental[0]].model[rental[1]].booking[1].full;
          let vehicle = vehicles[rental[0]].model[rental[1]].type;
          costDiv.innerHTML += "<br>$" + price + ".00 - " + vehicle;
          cost += price;
        }
      }

      costDiv.innerHTML += "<br>TOTAL: $" + cost + ".00";
      total.value = cost;
    });
}

function confirm() {
  let params = new URLSearchParams(document.location.search.substring(1));
  let name = params.get("name");

  let confirmationDiv = document.getElementById("confirmation");

  confirmationDiv.textContent =
    "Thank you " +
    name +
    ". Your reservation has been made. We look forward to seeing you in Cozumel.";
}
rentalServices();
