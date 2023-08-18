var calculatorForm = document.getElementById("calculator-form");
calculatorForm.addEventListener("submit", calculate);

function calculate(event) {
	event.preventDefault();

	var heightInput = document.getElementById("height");
	var weightInput = document.getElementById("weight");
	var ageInput = document.getElementById("age");
	var sexInput = document.getElementById("sex");
	var activityLevelInput = document.getElementById("activity-level");

	var height = parseFloat(heightInput.value);
	var weight = parseFloat(weightInput.value);
	var age = parseInt(ageInput.value);
	var sex = sexInput.value;
	var activityLevel = activityLevelInput.value;

	var bmi = calculateBMI(weight, height);
	var caloriesNeeded = calculateCaloriesNeeded(weight, height, age, sex, activityLevel);
	var proteinNeeded = calculateProteinNeeded(weight);
	var waterNeeded = calculateWaterNeeded(weight);

	var bmiOutput = document.getElementById("bmi");
	var caloriesOutput = document.getElementById("calories");
	var proteinOutput = document.getElementById("protein");
	var waterOutput = document.getElementById("water");

	bmiOutput.textContent = bmi.toFixed(1);

	caloriesOutput.textContent = (caloriesNeeded / 1000).toFixed(1) + " kcal";
	proteinOutput.textContent = proteinNeeded.toFixed(0) + " grams";
	waterOutput.textContent = (waterNeeded / 1000).toFixed(1) + " liters";
}

function calculateBMI(weight, height) {
	var bmi = weight / Math.pow(height / 100, 2);
	
	var bmiOutput = document.getElementById("bmi");
	
	if (bmi < 18.5) {
		bmiOutput.style.color = "yellow";
	} else if (bmi >= 18.5 && bmi < 25) {
		bmiOutput.style.color = "green";
	} else {
		bmiOutput.style.color = "red";
	}
	
	return bmi;
}

function calculateCaloriesNeeded(weight, height, age, sex, activityLevel) {
	var bmr = 0;

	if (sex === "male") {
		bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
	} else if (sex === "female") {
		bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
	}

	var caloriesNeeded = 0;

	switch (activityLevel) {
		case "sedentary":
			caloriesNeeded = bmr * 1.2;
			break;
		case "lightly-active":
			caloriesNeeded = bmr * 1.375;
			break;
		case "moderately-active":
			caloriesNeeded = bmr * 1.55;
			break;
		case "very-active":
			caloriesNeeded = bmr * 1.725;
			break;
		case "extra-active":
			caloriesNeeded = bmr * 1.9;
			break;
	}

	return caloriesNeeded;
}

function calculateProteinNeeded(weight) {
	var proteinNeeded = weight * 1.2;
	return proteinNeeded;
}

function calculateWaterNeeded(weight) {
	var waterNeeded = weight * 30;
	return waterNeeded;
}