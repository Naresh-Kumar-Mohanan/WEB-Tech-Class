

let student = {
    id: 101,
    name: "Naresh",
    contact: 1234567890,
    isStudent: true,
    skills: ["html", "css", "javascript"],
    work: () => {
        console.log("I am Worker");
    },
    address: {
        city: "Chennai",
        pincode: 631003
    }
}
console.log(student);


// ! How to access
console.log(student.name)
console.log(student.isStudent);
console.log(student.skills[2]);
student.work()
console.log(student.address.city);



let emp = {
    ename: "Naresh",
    eid: 101,
    salary: 120000
}
console.log(emp);


// ! How to Modify
emp.eid = 110
emp.ename = "Naresh Kumar"
console.log(emp);

// ! How to add
emp.phno = 123456789
console.log(emp);

// ! how to delete
delete emp.phno
console.log(emp);



// ! Methods

// ! 1. Object.keys()
//  it will return the keys in the form of array ( What are the data need to enter like variable name )
let player = {
    playerName: "Naresh",
    age: 23,
    team: "India"
}

// let keys = Object.keys(player)
console.log(Object.keys(player));


// ! 2. Object.values()
// It will return all the values in the form of Array
let value = Object.values(player)
console.log(value);


// ! 3. Object.entries()
// it will return one nested array where all the key and values pair will be stored  
let entry = Object.entries(player)
console.log(entry);


// ! 4. Object.freeze()
let freeze = Object.freeze(player)
console.log(freeze);
// This freeze method will cannot reEdite or add anything.
player.playerName = "Naresh Kumar"
console.log(player);


// ! 5. Object.isFrozen()
console.log(Object.isFrozen(player)); //  True - Buz The Object was Freeze
let ob1 = {
    product: "Pencil",
    color: "red"
}
console.log(Object.isFrozen(ob1));  //  false - Buz The Object was not Freeze