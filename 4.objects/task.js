function Student(name, gender, age) {
	this.name = name,
		this.gender = gender,
		this.age = age,
		this.marks = []
}
new Student("Мария", "женский", 19)
new Student("Олег", "мужской", 22)

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {

	if (!this.marks) {
		return;
	}

	this.marks.push(...marks);
};


Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}

	let sum = this.marks.reduce((acc, item, index, arr) => {
		acc += item;
		if (index === arr.length - 1) {
			return acc / arr.length;
		}
		return acc;
	}, 0);

	return sum
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}