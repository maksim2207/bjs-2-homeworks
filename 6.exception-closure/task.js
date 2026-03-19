function parseCount(pars) {
	let parseng = Number.parseFloat(pars);

	if (isNaN(parseng)) {
		throw new Error("Невалидное значение");
	}

	return parseng;
}

function validateCount(pars) {
	try {
		return parseCount(pars);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		this.a = a,
			this.b = b,
			this.c = c

		if (a + b < c || a + c < b || b + c < a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let per = this.perimeter / 2;
		let resultArea = Math.sqrt(per * (per - this.a) * (per - this.b) * (per - this.c));
		return Number(resultArea.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get area() {
				return 'Ошибка! Треугольник не существует';
			},
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}