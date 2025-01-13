function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    this.hasOwnProperty("marks") ? this.marks.push(...marks) : console.log("Пользователь отчислен");
}

Student.prototype.getAverage = function () {
    if(!this.marks || this.marks.length === 0) {
        return 0;
    };
    const total = this.marks.reduce((acc, mark) => acc + mark);
    return total / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
