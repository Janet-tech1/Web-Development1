// Task 1

function getGrade() {
    let score = prompt("Enter your score: ");

    if (score === 100) {
        console.log("Score:", score, " -> Outstanding! Grade: A+")
    } else if (score >= 90) {
        console.log("Score:", score, " -> Grade: A - Excellent!");
    } else if (score >= 80) {
        console.log("Score:", score, " -> Grade: B - Good work!");
    } else if (score >= 70) {
        console.log("Score:", score, " -> Grade: C - Satisfactory");
    } else if (score >= 60) {
        console.log("Score:", score, " -> Grade: D - Needs improvement");
    } else {
        console.log("Score:", score, " -> Grade: F - Please see instructor");
    }
    console.log("")  //Empty line
}


// TASK 2

function calculatePrice() {
    let discount = 0;
    let price = Number(prompt("Enter price:"));
    let customerType = prompt("Are you a student, senior or an employee?");
    let isFirstPurchase = confirm("Is this your first purchase at our store?");

    if (customerType === "student") {
        console.log(`${discount = 0.10}`);
    } else if (customerType === "senior") {
        console.log(`${discount = 0.15}`);
    } else if (customerType === "employee"){
        console.log(`${discount = 0.20}`);
    }

    // Additional discount for first-time customers
    if (isFirstPurchase) {
        console.log(`${discount += 0.05}`);
    }

    let finalPrice = price * (1 - discount);
    console.log ({
        originalPrice: price,
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    });

    console.log(calculatePrice());
    console.log("Price calculation:");
    console.log(`Original: #${price}`);
    console.log(`Discount: ${discountPercent}%`);
    console.log(`Final price: #${finalPrice}`);

    console.log("")  //Empty line
}



// TASK 3

function weatherAdvice() {
    let temperature = prompt("What is the temperature:")
    let isRaining = confirm("Is it raining:")

    console.log("Temperature:", temperature)
    console.log("Is it raining?", isRaining)

    if (temperature < 32 && isRaining) {
        console.log("Freezing rain! Stay inside!")
    } else if (temperature < 32) {
        console.log("Very cold, wear a heavy coat.")
    } else if (temperature <= 60) {
        console.log("Chilly, bring a jacket.")
    } else if (temperature <= 80) {
        console.log("Nice weather!")
    } else {
        console.log("It's hot, stay hydrated!")
    }

    let advice = isRaining ? "Bring an umbrella, if its raining." : "No umbrella needed if its not raining.";
    console.log(advice);

    console.log("")  //Empty line
}


// // TASK 4

function atmSimulation() {
    let balance = prompt("Enter your account balance:")
    let action = prompt("Enter the action you want to perform (withdraw, deposit, transfer):")
    let amount = prompt("Enter the amount:")
    let remainingBalance = Number(balance) - Number(amount)
    let depositBalance = Number(balance) + Number(amount)


    if (action === "withdraw" && balance >= amount) {
        console.log(`Your account balance is #${balance}`)
        console.log(`You have successfully withdrawn #${amount}`)
        console.log(`The remaining balance is #${remainingBalance}`)

    } else if (action === "withdraw" && balance < amount) {
        console.log("Insufficient funds.")

    }
    // else if (action === "withdraw" && amount < 500) {
    //     console.log("You cannot withdraw less than 1000")
    // }

    if (action === "deposit") {
        console.log(`Your account balance is #${balance}`)
        console.log(`You have successfully deposited #${amount}`)
        console.log(`Your new account balance is #${depositBalance}`)

    }

    console.log("")  //Empty line
}


//Task 5
function personalAssistant() {
    let time = prompt("Enter time in hour (1-24):");
    let weather = prompt("Is it sunny, rainy, or cloudy:");
    let daytype = prompt("Is it weekend, workday or holiday:");


    console.log(`Time: ${time}hour`);

    let hour = time <= 24? "It's time to sleep. Goodnight!" : "Enter a time between 1 and 24";
    console.log(hour)

    if (isNaN(time)) {
        console.log("Invalid time. Please enter a valid time.")
    } else if (time < 5) {
        console.log("It's too early, get some more rest.");
    } else if (time < 12) {
        console.log("Good morning. It's time to start the day.");
    } else if (time < 16) {
        console.log("Good Afternoon. Stay focused.");
    } else if (time < 19) {
        console.log("Good evening. Time to relax.");
    }


    console.log(`Weather: ${weather}`);
    if (weather === "rainy" && daytype === "workday") {
        console.log("Don't forget to take your umbrella.");
    } else if (weather === "sunny") {
        console.log("Enjoy the sunshine. Stay hydated.");
    } else if (weather === "cloudy") {
        console.log("It's cloudy. Stay cozy");
    }


    console.log(`Daytype: ${daytype}`);

    if (daytype === "workday") {
        console.log("It's workday. Stay productive.");
    } else if (daytype === "holiday") {
    console.log("Holiday is here. Have fun!" );
    } else if (daytype === "weekend"){
        console.log("It's weekend. Enjoy yourself.")
    }
}