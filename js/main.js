var marks = 80;
var grade;

switch (true) {
	case marks >= 90 && marks <= 100:
		grade = "congratulations! You are get in golden A+.";
		break;
	case marks >= 80 && marks <= 89:
		grade = "congratulations! You are get in Grade A+.";
		break;
	case marks >= 70 && marks <= 79:
		grade = "congratulations! You are get in Grade A-.";
		break;
	case marks >= 60 && marks <= 69:
		grade = "congratulations! You are get in Grade A.";
		break;
	case marks >= 50 && marks <= 59:
		grade = "congratulations! You are get in Grade B.";
		break;
	case marks >= 40 && marks <= 49:
		grade = "congratulations! You are get in Grade C.";
		break;
	case marks >= 33 && marks <= 39:
		grade = "congratulations! You are get in Grade D.";
		break;
	case marks >= 0 && marks <= 32:
		grade =
			"Sorry! You are get in Grade F. Read attentively and ready for next exam.";
		break;
	default:
		grade = "It's Not rules of education system in the world.";
		break;
}
document.write(grade + "<br>");
