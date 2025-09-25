//  Task 1:** Array Basics - Shopping List  

function shoppingList() {
    let shoppingList = ["Milk", "Goldenmorn", "Sardine"];
    console.log("The shopping list consist of:", shoppingList);

    let itemAdded = shoppingList.push("Corn Flakes");   //add to the end of the list
    console.log("Item added:", "Corn Flakes");
    console.log("The final list after adding another item to the end of the list:", shoppingList);

    let firstItem = shoppingList.shift();               //Remove the first item
    console.log("Removed item:", firstItem);
    console.log("The final list after removing the first item from the list:", shoppingList);

    let total = shoppingList.length;
    console.log("Total number of items in the shopping list:", total);


    console.log("")     // Empty line

    // using for loop to loop through an array using index
    console.log("Looping through the list to print each item with its position:");
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`Position: ${i + 1}: ${shoppingList[i]}`);
    }
}

function formatList(list) {
    console.log("list:");
    for (let i = 0; i < list.length; i++) {
        console.log(`List: ${i + 1}: ${list[i]}`);
    }
}


// **Task:** Student Grades Analyzer  


function getAverage(grades) {
    let total = 0;

    console.log("Calculating average grade:");
    for (let grade of grades) {
        total += grade;
    }

    let average = total / grades.length;
    console.log(`The student grades: ${grades}`);
    console.log(`Total: ${total}, Average: ${average.toFixed(2)}`);

}

function getHighest(grades) {
    let highest = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }
    console.log("The highest grade:", highest);
}

function getLowest(grades) {
    let lowest = grades[0];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }
    console.log("The lowest grade:", lowest);
}

function getPassRate(grades) {
    let pass = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 50) {
            pass++;
        }
    }
    console.log("Grades of 50 and above:", pass);
}


//Task 3
function addMovie(movies, ratings) {

    // let movies = []
    // let ratings = []

    movies.push(movies)
    ratings.push(ratings)

    console.log("Movie names:", movies)
    console.log("Movie ratings:", ratings)
}

function getAverageRating(ratings) {
    let total = 0;

    console.log("Calculating average ratings:");
    for (let rating of ratings) {
        total += rating;
    }

    let average = total / ratings.length;
    console.log(`The ratings: ${ratings}`);
    console.log(`Total: ${total}, Average: ${average.toFixed(2)}`);

}

function getTopMovie(ratings) {
    let top = 0;
    for (let i = 0; i < ratings.length; i++) {
        if (ratings[i] > top) {
            highest = ratings[i];
        }
    }
    console.log("The top rated:", top);
}

function getSummary(movies, ratings) {
    console.log("Movie Ratings Summary:");
    for (let i = 0; i < movies.length; i++) {
        console.log(`${movies[i]} - ${ratings[i]}`);
    }
    console.log(`The Average Rating: ${average.toFixed(2)}`);
    console.log(`The Top Movie: ${top}`);
}
function sortMovie(movies, ratings) {

}



//Task 4
function addStudent(names, grades) {
    console.log("Student names:", names)
    console.log("Student grades:", grades)
}
function calculateAverage(grades) {
    let total = 0;
    console.log("Calculating average grade:");
    for (let grade of grades) {
        total += grade;
    }

    let average = total / grades.length;
    console.log(`The student grades: ${grades}`);
    console.log(`Total: ${total}, Average: ${average.toFixed(2)}`);

}
function getHighest(names, grades) {
    let highestGrade = Math.max(...grades);
    let i = grades.indexOf(highestGrade);
    console.log(`The student with the highest grade: ${names[i]} with a grade of (${highestGrade})`);
}

function getLowest(names, grades) {
    let lowestGrade = Math.min(...grades);
    let i = grades.indexOf(lowestGrade);
    console.log(`The student with the lowest grade: ${names[i]} with a grade of ${lowestGrade})`);
}

function gradeCategorizer(grade) {

    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80) {
        console.log("B");
    } else if (grade >= 70) {
        console.log("C");
    } else if (grade >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}
function generateReport(names, grades) {

    for (let i = 0; i < names.length; i++) {
        console.log({
            name: names[i],
            grade: grades[i],
           letterGrade: gradeCategorizer(grades[i])
        });
    }
    for (let i = 0; i = names[0]; i++) {
        console.log({
            name: names[0],
            grade: grades[0],
           letterGrade: gradeCategorizer(grades[0])
        });
    }
}
