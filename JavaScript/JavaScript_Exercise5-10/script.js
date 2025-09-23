// Task 1

function getGrade() {
    let myscore = prompt("Enter your score: ");

    if (myscore === 100) {
        console.log("Score:", myscore, " -> Outstanding! Grade: A+")
    } else if (myscore >= 90) {
        console.log("Score:", myscore, " -> Grade: A - Excellent!");
    } else if (myscore >= 80) {
        console.log("Score:", myscore, " -> Grade: B - Good work!");
    } else if (myscore >= 70) {
        console.log("Score:", myscore, " -> Grade: C - Satisfactory");
    } else if (myscore >= 60) {
        console.log("Score:", myscore, " -> Grade: D - Needs improvement");
    } else {
        console.log("Score:", myscore, " -> Grade: F - Please see instructor");
    }
    console.log("")  //Empty line
}


// TASK 2

// function calculatePrice(price, customerType, isFirstTime) {
//     // let price = prompt("Enter price:");
//     // let customerType = prompt("Are you a student, senior or an employee?");
//     // let isFirstPurchase = confirm("Is this your first purchase at our store?");

//     // function calculatePrice(price, customerType, isFirstTime) {
//     let discount = 0;

//     if (customerType === "student") {
//         discount = 0.10; // 10% discount
//     } else if (customerType === "senior") {
//         discount = 0.15; // 15% discount
//     } else if (customerType === "employee") {
//         discount = 0.20; // 20% discount
//     }

//     // Additional discount for first-time customers
//     if (isFirstTime) {
//         discount += 0.05; // Extra 5%
//     }

//     let finalPrice = price * (1 - discount);
//     return {
//         originalPrice: price,
//         discountPercent: discount * 100,
//         finalPrice: finalPrice.toFixed(2)
//     };

//     let result = calculatePrice(100, "student", true);
//     console.log("Price calculation:");
//     console.log(`Original: $${result.originalPrice}`);
//     console.log(`Discount: ${result.discountPercent}%`);
//     console.log(`Final price: $${result.finalPrice}`);

//     console.log("")  //Empty line
// }



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


// TASK 4

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

    }  else if (action === "withdraw" && balance < amount) {
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
