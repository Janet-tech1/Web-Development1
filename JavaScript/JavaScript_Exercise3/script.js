function script() {
    let firstName = "Janet";
    let lastName = "Bamgbose";
    let age = 19;
    let schoolName = "Olabisi Onabanjo University";
    let isGrade = "A";
    let isGraduated = true;
    let nextYearAge = age + 1;
    let fullName = firstName + " " + lastName
    let eligibility;
    if (age >= 18) {
        eligibility = "YES — Student is old enough to graduate.";
    } else {
        eligibility = "NO — Student is too young to graduate.";
    }

    console.log("======Student Profile======")
    console.log(`Full Name: ${fullName}`)
    console.log(`Age: ${age}`)
    console.log(`School Name: ${schoolName}`)
    console.log(`Grade: ${isGrade}`)
    console.log(`Graduated: ${isGraduated}`)
    console.log(`My name has ${firstName.length + lastName.length} letters`)
    console.log(`My name is ${fullName.toUpperCase()}`)
    console.log(`I graduated from ${schoolName.toLowerCase()}.`)
    console.log(`I'll be ${nextYearAge} years old next year.`)
    console.log(`Eligibility: ${eligibility}`)
}






