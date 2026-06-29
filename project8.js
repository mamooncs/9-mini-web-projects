// Random event
const getRandEvent = () => {

    const random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return "Marathon";
    } 
    else if (random === 1) {
        return "Triathlon";
    } 
    else {
        return "Pentathlon";
    }
};

// Training days
const getTrainingDays = (event) => {

    let days;

    if (event === "Marathon") {
        days = 50;
    } 
    else if (event === "Triathlon") {
        days = 100;
    } 
    else {
        days = 200;
    }

    return days;
};

// Display information
const logEvent = (name, event) => {
    return `${name}'s event is: ${event}`;
};

const logTime = (name, days) => {
    return `${name}'s training time is: ${days} days`;
};

// Main function
function generateTraining() {

    const name = "Nala";

    const event = getRandEvent();
    const days = getTrainingDays(event);

    const name2 = "Warren";
    const event2 = getRandEvent();
    const days2 = getTrainingDays(event2);

    document.getElementById("output").innerHTML =
        `
        <h3>Athlete 1</h3>
        <p>${logEvent(name, event)}</p>
        <p>${logTime(name, days)}</p>

        <br>

        <h3>Athlete 2</h3>
        <p>${logEvent(name2, event2)}</p>
        <p>${logTime(name2, days2)}</p>
        `;
}