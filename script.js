let input = prompt("Please enter your birth year!");
let parsedInput = parseInt(input);

console.log(parsedInput);

if (!Number.isNaN(parsedInput) && parsedInput >= 1920 && parsedInput <= 2020) {
    alert("The year is valid.");    
    let ChineseZodiac = ((input - 4) % 12);
    let result = ChineseZodiac;
        if (result === 0) {
            alert("You are a Rat");
        } else if (result === 1) {
            alert("You are a Ox");
        } else if (result === 2) {
            alert("You are a Tiger");
        } else if (result === 3) {
            alert("You are a Rabbit");
        } else if (result === 4) {
            alert("You are a Dragon");
        } else if (result === 5) {
            alert("You are a Snake");
        } else if (result === 6) {
            alert("You are a Horse");
        } else if (result === 7) {
            alert("You are a Goat");
        } else if (result === 8) {
            alert("You are a Monkey");
        } else if (result === 9) {
            alert("You are a Rooster");
        } else if (result === 10) {
            alert("You are a Dog");
        } else if (result === 11) {
            alert("You are a Pig");
        }
} else {
    alert("The year is not valid. Please enter a valid year.")
}
