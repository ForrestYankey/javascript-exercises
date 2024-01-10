const findTheOldest = function([...people]) {
    
    const oldestPerson = people.reduce((oldest, person) => {
        const currentDate = new Date().getFullYear();
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentDate - person.yearOfBirth;
        if(!oldest.age || age > oldest.age ) {
            oldest.name = person.name;
            oldest.age = age;
        }
        return oldest;
    }, {})

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
