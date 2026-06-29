function checkGrammar() {

    let story =
        document.getElementById("story").value;

    let storyWords = story.split(" ");

    let unnecessaryWord = "literally";
    let misspelledWord = "beautifull";
    let badWord = "really";

    // Task 3 & 4
    let count = 0;

    storyWords.forEach((word) => {
        count++;
    });

    // Task 5 & 6
    storyWords = storyWords.filter((word) => {
        return word !== unnecessaryWord;
    });

    // Task 7
    storyWords = storyWords.map((word) => {
        return word === misspelledWord
            ? "beautiful"
            : word;
    });

    // Task 8
    let badWordIndex =
        storyWords.findIndex((word) => {
            return word === badWord;
        });

    // Task 9
    if (badWordIndex !== -1) {
        storyWords[badWordIndex] = "really";
    }

    // Task 10
    let lengthCheck =
        storyWords.every((word) => {
            return word.length <= 10;
        });

    // Task 11
    let longWords =
        storyWords.filter((word) => {
            return word.length > 10;
        });

    let finalStory =
        storyWords.join(" ");

    document.getElementById("result").innerHTML =
        `
        <p><strong>Word Count:</strong> ${count}</p>

        <p><strong>All Words Under 10 Characters:</strong>
        ${lengthCheck}</p>

        <p><strong>Long Word Found:</strong>
        ${longWords.join(", ")}</p>

        <hr>

        <p><strong>Edited Story:</strong></p>

        <p>${finalStory}</p>
        `;
}