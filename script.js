let timeline_element = document.getElementById("timeline")
console.log(timeline_element);
class Element {
    constructor(date, title, description, color) {
        this.date = date;
        this.title = title;
        this.description = description;
        this.color = color;
    }
}
let elements = []

function create_new_element(date, title, description, color) {
    elements.push(new Element(date, title, description, color));
}
create_new_element(
    "March 20, 1957",
    "The legend was born",
    "Born Shelton Jackson \"Spike\" Lee in Atlanta Georgia",
    "#41516C"
)
create_new_element(
    "May 16, 1982",
    "Graduation",
    "Spike Lee graduated from the New York University Film School, and started his career as an actor.",
    "#FBCA3E"
)
create_new_element(
    "June 23, 1986",
    "First film, activism career starts",
    "Spike Lee releases \"She's gotta have it\" challenging stereotypes about Black Women",
    "#E24A68"
)
for (let i = 0; i < elements.length; i++) {
    let newElement = document.createElement("li");
    newElement.style.setProperty("--accent-color", elements[i].color);
    let date = document.createElement("div")
    date.classList.add("date");
    date.innerText = elements[i].date
    newElement.appendChild(date)
    let title = document.createElement("div")
    title.classList.add("title");
    title.innerText = elements[i].title
    newElement.appendChild(title)
    let description = document.createElement("div")
    description.classList.add("descr");
    description.innerText = elements[i].description
    newElement.appendChild(description)
    console.log(newElement)
    timeline_element.appendChild(newElement);
}

