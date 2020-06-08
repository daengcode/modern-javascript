// Template Literals
let name = "Zulkifli Jufri";
let age = 20;
let job = "Backend Developer";
let html;

html = `
<h2>Template Literals</h2>
<ul>
<li>Nama: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
</ul>
<h2>Object Literals</h2>
<p>See in inspect element</p>
`;
document.body.innerHTML = html;

// Object Literals
const person = {
  firstName: "Zulkifli",
  lastName: "Jufri",
  age: 20,
  email: "zul@gmail.com",
  hobbies: ["game", "pray"],
  address: {
    city: "Depok",
    state: "IDN",
  },
  getBirthYear: function () {
    return 1998 - age;
  },
};
let val;

val = person;
val = person.firstName;
val = person.hobbies[1];
val = person.address.city;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "Zulkifli", age: 20 },
  { name: "Fakhri", age: 21 },
  { name: "Kalsum", age: 22 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name + ": " + people[i].age);
}
