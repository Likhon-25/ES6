function bolbases() {
  // console.log('kaj ses');
}

function kajKori(callback) {
  // console.log('Kas start hoilo');
  callback();
}

// kajKori(bolbases);

function registerStudent(cb) {
  console.log("User is registering. Need more data");
    // console.log(cb);
  cb();
}

function userBasicInfo(){
    let student = {
        name: "John Doe",
        age: 20,
        roll: 101
    }
    // return student;
    console.log(student);
}

function pastAcademicInfo(){
    let restult = {
        PSC: '4.83',
        SSC: '4.28'
    }
    console.log(restult); 
}

// console.log(registerStudent(userBasicInfo));
// console.log(registerStudent(pastAcademicInfo));


function calculator (a,b, cb){
    let sum = a+ b;
    cb(sum);
}

function displayResult(result){
    console.log(result);
}

calculator(5,5, displayResult);
calculator(20,5, displayResult);