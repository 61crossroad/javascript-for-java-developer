function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
function Student(name, gender, school) {
    Person.call(this, name, gender);
    this.school = school;
}
function Employee(name, gender, company) {
    Person.apply(this, [name, gender]);
    this.company = company;
}
var by = new Student('BY', 'female', 'ddd');
var jn = new Employee('JN', 'male', 'GG');
console.log(by, '\n', jn);