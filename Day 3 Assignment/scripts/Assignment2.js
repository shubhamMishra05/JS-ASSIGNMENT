var x = prompt("Enter the OS name and version seperated by space")
 var y =x.indexOf(" ")
//console.log(y);
var nameOfOs = x.slice(0,y);
//console.log(nameOfOs);
var version = x.slice(y+1)
//console.log(version);
console.log(`The Operating System(OS) name is ${nameOfOs} and version is ${version}`);