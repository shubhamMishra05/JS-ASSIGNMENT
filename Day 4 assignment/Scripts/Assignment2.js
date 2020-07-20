const student = { 
    name:"Helsinki",
    age: 24,
    projects: {
        dicegame: "Two player dice game using javaScript"
    },
}

const  {name,age,projects:{dicegame}} = student;
console.log(`Name of the Student is ->  ${name}   Age of the Student is ->  ${age}  and the projects is -> ${dicegame}.`);