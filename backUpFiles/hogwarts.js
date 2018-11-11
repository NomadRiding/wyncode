//Define a factory function called student that creates an object
//by using to arguments name and age.
function student(values) {
	let newStudent = {name: values[0], age: values[1]};
	newStudent = assignSchoolOfMagic(newStudent);
	newStudent = assignPower(newStudent);
	return newStudent;
}

//Define a function that expects a student object as its argument and assigns
//a faculty property to said argument.
function assignSchoolOfMagic(student) {
	//Declare an array that contains four string elements
	let schoolsOfMagic = ["Griffindor", "Slitherine", "Huff or puff", "Ravenclaw"];

	//Assign a random number from 0 to 3 to the indexOfRandomSchool variable
	let indexOfRandomSchool = Math.floor(Math.random() * 4);

	//Access a random element from the schoolsOfMagic array based on indexOfRandomSchool
	let schoolOfMagic = schoolsOfMagic[indexOfRandomSchool];

	//Create a faculty property on the student object and assign "schoolOfMagic" to it.
	student.faculty = schoolOfMagic;

	return student;
}

//Declare a function that expects a student object and
//based on the student object's faculty property assigns a
//power to said student object
function assignPower(student) {
	switch(student.faculty) {
		case "Griffindor": {
			student.power = "Lion magic";
			break;
		}
		case "Slitherine": {
			student.power = "Necromancy";
			break;
		}
		case "Huff or puff": {
			student.power = "Blow magic";
			break;
		}
		case "Ravenclaw": {
			student.power = "Has feathers";
			break;
		}
		default: {
			console.log("You are a filthy regular human");
		}
	}
	return student;
}


let candidates = [['Harry Potter', 23], ['Ron Howard', 22], ['Hermione Ranger', 19], ['Dragon McFoil', 19], ['Guy', 'Friedmann']];

//Create a new array of students objects by mapping through the candidates array.
let students = candidates.map(student);

console.log(students);
