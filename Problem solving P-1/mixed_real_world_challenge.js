/*
Problem 1 : Add Grade o Each Student (without Changing Original)

you have an array of student objects, each with name and marks. 
Create a NEW array where every student also has a "grade". field, based on their marks. The ORIGINAL array must stay exactly the same.

Grade rule:
marks >= 90 -> "A+"
marks >= 80 -> "A"
marks >= 60 -> "B"
below 60    -> "Fail"

Input:
    [
        {name: "Raif", marks: 85},
        {name: "Karim", marks: 45},
    ]

Output:
    [
        {name: "Raif", marks: 85, grade: "A"},
        {name: "Karim", marks: 45 , grade: "Fail"},
    ]

    Original array must remain untouched (no "grade" field added to it).

*/

const addGrade = (students) => {
  const getGrade = (marks) => {
    if (marks >= 90) {
      return "A+";
    } else if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else {
      return "Fail";
    }
  };
  const modifiedStudents = students.map((student) => {
    console.log(student, "Student");

    const { name, marks } = student;
    const newStudentWhiteGrade = { name, marks, grade: getGrade(marks) };

    return newStudentWhiteGrade;
  });

  return modifiedStudents;
};

let students = [
  { name: "Raif", marks: 85 },
  { name: "Karim", marks: 45 },
  { name: "Likhon", marks: 95 },
];

console.log(addGrade(students));
