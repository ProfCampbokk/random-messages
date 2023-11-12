function generateCharacter() {
    // generate a character
    // return a string like "You are Bill the Carpet Dodger from Maplewood"
    // which we do by fetching random
    let charName = ""
    let profession = ""
    let location = ""
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            charName = "Mark";
            break;
        case 1:
            charName = "John";
            break;
        case 2:
            charName = "Timbo";
    }
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            profession = "carpet cleaner";
            break;
        case 1:
            profession = "geriatric nurse";
            break;
        case 2:
            profession = "police detective";
    }
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            location = "Maplewood";
            break;
        case 1:
            location = "Tombtown";
            break;
        case 2:
            location = "Coppaland";
    }
    return "You are " + charName + " the " + profession +" from " + location
}

function generateNeed() {
    let need = ""

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            need = "Your landlord is threatening to evict you unless you can scrape together £150 by tomorrow noon, but ";
            break;
        case 1:
            need = "You last heard from your wife three days ago, and you need to get in contact with her, but ";
            break;
        case 2:
            need = "There's a Lego set that's out of stock in most places except the store 59 miles away and set to be discontinued, but "
    }

    return need
}

function generateProblem() {
    let problem = ""

    switch (Math.floor(Math.random() * 3)) {
        case 0:
            problem = "Your grandmother is down to her last tooth";
            break;
        case 1:
            problem = "You forgot to send a birthday card to your daughter";
            break;
        case 2:
            problem = "Your leg is starting to swell";
    }
    return problem
}

console.log(generateCharacter())
console.log(generateNeed())
console.log(generateProblem())