var name = 'Augustine Ogiza ';
var courses = ['Html ', 'Css ', 'Javascript ', 'Python ', 'Design '];

var total = name + " " + courses;
console.log(total);

var text = '';
var i;
for (i = 1; i <= 200; i++) {

    if (i % 2 !== 0) {
        text += 'All odd numbers ' + i + "" + ' <br>';
        console.log(i);


    }
}


document.getElementById("name").innerHTML = total;

document.getElementById("display").innerHTML = text;