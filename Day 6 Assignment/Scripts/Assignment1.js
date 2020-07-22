/* Write a program that will iterate over an array of colors and change the background of the page after 5 seconds.  */


var i = 0;
function change() {
    var doc = document.getElementById("background");
    var color = ["Dimgray", "blue", "brown", "green","pink","red","violet","indigo","orange","lime","mustard","coral","navy"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 5000);