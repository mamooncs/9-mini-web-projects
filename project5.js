function checkRace() {

    let raceNumber = Math.floor(Math.random() * 1000);

    let age = document.getElementById("age").value;
    let early = document.getElementById("early").checked;

    if (age > 18 && early) {
        raceNumber = raceNumber + 1000;
    }

    let message = "";

    if (age > 18 && early) {
        message = "Race Number: " + raceNumber +
                  "<br>Race Time: 9:30 AM";
    }
    else if (age > 18 && !early) {
        message = "Race Number: " + raceNumber +
                  "<br>Race Time: 11:00 AM";
    }
    else if (age < 18) {
        message = "Race Number: " + raceNumber +
                  "<br>Race Time: 12:30 PM";
    }
    else {
        message = "Please see the registration desk.";
    }

    document.getElementById("output").innerHTML = message;
}