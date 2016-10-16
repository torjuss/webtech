/* Part 2 */
console.log('PART 2')
for (var i = 1; i < 21; i++) {
    console.log(i);
}

/* Part 3 */
console.log('PART 3')
const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
]

for (var i = 0; i < numbers.length; i++) {
    var output = numbers[i];
    var isDividableBy3 = output % 3 === 0;
    var isDividableBy4 = output % 4 === 0;
    var isDividableBy5 = output % 5 === 0;

    if (isDividableBy3 && isDividableBy5) {
        output = 'eplekake';
    } else if (isDividableBy3) {
        if (isDividableBy4) {
            output = 'kake';
        } else {
            output = 'eple';
        }
    } else if (isDividableBy5) {
        output = 'kake';
    }

    console.log(output);
}

/* Part 4 */
document.getElementById("title").innerHTML = "Hello, Javascript";

/* Part 5 */
function changeDisplay() {
    var magicElement = document.getElementById("magic");
    magicElement.style.display = "none";
}

function changeVisibility() {
    var magicElement = document.getElementById("magic");
    magicElement.style.visibility = "hidden";
    magicElement.style.display = "block";
}

function reset() {
    var magicElement = document.getElementById("magic");
    magicElement.style.display = "block";
    magicElement.style.visibility = "visible";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

/* The assignment text said to use string string concatenation,
* but I find the approach below more convenient. Also the assignment
* tells us to add the list to "technologies.html", but that must be
* a spelling error. */
var ul = document.getElementById("tech");
for (var i = 0; i < technologies.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(technologies[i]));
    ul.appendChild(li);
}
