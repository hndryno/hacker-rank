function isMultipleOfFive(grade) {
    if (grade % 5 == 0) {
        return true;
    }
    
    return false;
}

function roundToMultipleFive(grade) {
  return (Math.ceil(grade / 5) * 5)
}

function doProcessGrades(grade, roundingGrade) {
  switch(true) {
    case (grade < 40):
      grade = grade;
      break;

    case (grade >= 40 && grade <= 100):
      if (roundingGrade - grade < 3) {
        grade = roundingGrade;
      } else {
        grade = grade;
      }
      break;
    
    default:
      grade = grade;
  }

  return grade;
}

function gradingStudents(grades) {
    // Write your code here
    const dataResult = [];
    for (let i = 0; i < grades.length; i++){
      const roundingGrade = roundToMultipleFive(grades[i])
      const processedData = doProcessGrades(grades[i], roundingGrade);
      dataResult.push(processedData);
      console.log(dataResult);
    }

    return dataResult;
}

gradingStudents([82, 77, 44, 32, 100]);
