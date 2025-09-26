//  Task 1:** Array Basics - Shopping List  

function shoppingList() {
    let shoppingList = ["Milk", "Goldenmorn", "Sardine"];
    console.log("The shopping list consist of:", shoppingList);

    shoppingList.push("Corn Flakes");   //add to the end of the list
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

    console.log("")     // Empty line

    function formatList(list) {
        console.log("Formatted list:");
        for (let i = 0; i < list.length; i++) {
            console.log(`Format List: ${i + 1}: ${list[i]}`);
        }
    }
    formatList(shoppingList);
}
console.log(formatList)



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
            console.log(`Grades of 50 and above: ${grade}`);
        }
    }

    console.log("Grades of 50 and above:", pass);

    let passRate = pass / grades.length;
    console.log("Student's that passed:", passRate.toFixed(2))

    let passPercentage = pass / grades.length * 100;
    console.log("Student's that passed:", passPercentage.toFixed(2));
}
getPassRate(grades);






//Task 3
function movieRating() {
    let movies = ['Resident playbook', 'Beyond the bar', 'The nice guy', 'Head over heels'];
    let ratings = [7, 8, 6, 7];


    function addMovie(movie, rating) {

        movies.push(movie);
        ratings.push(rating);

        return {
            movies: movie,
            ratings: rating

        }
    }
    console.log("Updated Movies:", addMovie("The Nice Guy", 8))
    console.log("")

    function getAverageRating() {
        let total = 0;
        console.log("Calculating average ratings:");
        for (let rating of ratings) {
            total += rating;
        }

        return (total / ratings.length);

    }
    console.log("Average:", getAverageRating());

    console.log("")

    function getTopMovie() {
        let index = 0;
        let highest = 0;
        for (let i = 0; i < ratings.length; i++) {
            if (ratings[i] > highest) {
                highest = ratings[i];
                index = i;
            }
        }
        return `${movies[index]} (${highest})`;
    }
    console.log("The top rated:", getTopMovie());

    //Summary
    console.log("")

    console.log("Movie Ratings Summary:");
    for (let i = 0; i < movies.length; i++) {
        console.log(`${movies[i]} - ${ratings[i]}`);
    }
    console.log("The top rated:", getTopMovie());

    // Sort
    let combined = movies.map((movie, index) => ({
        name: movie,
        rating: ratings[index]
    }));
    combined.sort((a, b) => b.rating - a.rating);
    console.log("Sorted Movies by Rating:");
    combined.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.name} - Rating: ${movie.rating}`);
    });

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
}
