// Task 1 & 2
function getSleepHours(day) {

    switch(day) {

        case "monday":
            return 8;

        case "tuesday":
            return 7;

        case "wednesday":
            return 6;

        case "thursday":
            return 8;

        case "friday":
            return 7;

        case "saturday":
            return 9;

        case "sunday":
            return 8;

        default:
            return 0;
    }
}

// Task 4 & 5
function getActualSleepHours() {

    return getSleepHours("monday") +
           getSleepHours("tuesday") +
           getSleepHours("wednesday") +
           getSleepHours("thursday") +
           getSleepHours("friday") +
           getSleepHours("saturday") +
           getSleepHours("sunday");
}

// Task 6
function getIdealSleepHours(hours) {

    return hours * 7;
}

// Task 8, 9, 10
function calculateSleepDebt() {

    let idealPerNight =
        Number(document.getElementById("idealHours").value);

    let actualSleepHours =
        getActualSleepHours();

    let idealSleepHours =
        getIdealSleepHours(idealPerNight);

    let result =
        document.getElementById("result");

    if (actualSleepHours === idealSleepHours) {

        result.innerHTML =
            "Perfect! You got exactly the right amount of sleep.";

    }
    else if (actualSleepHours > idealSleepHours) {

        let extra =
            actualSleepHours - idealSleepHours;

        result.innerHTML =
            "You slept " + extra +
            " hour(s) more than needed.";

    }
    else {

        let debt =
            idealSleepHours - actualSleepHours;

        result.innerHTML =
            "You need " + debt +
            " more hour(s) of sleep this week.";
    }
}

// Task 11
calculateSleepDebt();