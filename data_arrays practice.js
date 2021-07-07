console.log("Script is loaded")

let teachers = ["Shane", "Zack"];

// console.log(teachers); 
// console.log(teachers[0]);
// console.log(teachers[1]); 

// let x=1
// console.log(teachers[x]);
// console.log(teachers.length);
// console.log(teachers[teachers.length - 1]); 

console.log(teachers.push('Josh'));

let arrayLength = teachers.length;
let oldTeacher = teachers.pop();

teachers.unshift("New Guy");
let newGuy = teachers.shift();

teachers[5] = "Mister Fiveo";
teachers[1] = "Lady Onsie";
let fiveoSpot = teachers.indexOf("Mister Fiveo");

console.log("At index 20: " + teachers[20])

console.log("The array is now " + arrayLength);
console.log("The Old teacher was: " + oldTeacher);
console.log(teachers);
console.log("The new guy was: " + newGuy);

teachers.unshift("One NEw Person");
teachers.unshift("Two new person");
console.log(teachers);

console.log("Index of Shane: " + teachers.indexOf("Shane"));
console.log("The person in Fiveo's old spopt:" + teachers[fiveoSpot]);

let teacherSlice = teachers.slice(0, 3);
console.log("The teacher slice is: " + teacherSlice);
console.log(teachers);

let teacherSplice = teachers.splice(0, 3, "Josh");
console.log("Teacher SPlice is: " + teacherSplice);
console.log(teachers);

let numberOfShanes = 0;
let indexofShanes = [];
for(let i = 0; i < teachers.length; i++){
    if (teachers[i] != "undefined") {
        console.log(teachers[i] + " is at index " + i);
        if (teachers[i] === "Shane") {
        console.log
        numberOfShanes++;
        indexofShanes.push(i);
    }
}
}

teachers.forEach(function (item, index) {
    console.log(item + " is at index " + index);
});

console.log(teachers.join(""));

let numbers = [4, 7, 2, 3];
console.log(numbers);
numbers.sort();
console.log(numbers);

teachers.sort();
console.log(teachers);
numbers.reverse();
console.log(numbers);
teachers.reverse();
console.log(teachers);

let course2 = {
    name: "Javascript Fundamentals",
    awesome: true,
    teacherList: ["Assaf", "Shane"],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop',
            },
        },
    ],
};


let course3 = course2;
course2.name = "New Course Name";

console.log(course2.name);
console.log(course2.students[0].computer.OS);

course2.time = 2;
console.log(course2.time);

delete course2.time;
console.log(course2.time);

//console.log(course.name);
//console.log(course.teacherList);
//console.log("Course is awesome?" + course.awesome);
// console.log(course.awesome);

// let x = "courses";
// console.log(school.courses);
// console.log(school["courses"]);

// course2.name = "New Course Name";



