
let students = ["Ahmed", "Sara", "Omar", "Laila", "Mohammed"];

let courses = [
    { name: "AI&DataScience", duration: "250H", startDate: "2025-04-01" },
    { name: "Software Engineer", duration: "300H", startDate: "2025-05-15" },
    { name: "Computer Science", duration: "300H", startDate: "2025-03-10" },
    { name: "BIT", duration: "200H", startDate: "2025-06-01" },
    { name: "English", duration: "50H", startDate: "2025-04-20" }
];

function getCourse(courseName) {
    let course = courses.find(c => c.name === courseName);
    if (course) {
        console.log(course)
    } else {
        console.log("Course not found");
    }
}

function addCourse(CourseName, Duration, StartDate) {
    if (!CourseName || !Duration || !StartDate) {
        console.log("Please fill all fields");
    } else {
        let newCourse = { name: CourseName, duration: Duration, startDate: StartDate };
        if (courses.some(c => c.name === newCourse.name && c.startDate === newCourse.startDate)) {
            console.log("Course already exists");
        } else {
            courses.push(newCourse);
            console.log(courses);
        }
    }
}

function getInfo(studentName, courseName) {
    if (students.some(s => s === studentName)) {
        let course = courses.find(c => c.name === courseName);
        if (course) {
            console.log(`hello ${studentName} the course u ask is : ${course.name} and its duration is : ${course.duration} and start in : ${course.startDate}`);
        } else {
            console.log("Course not found");
        }

    } else {
        console.log("you do not have access to see the information");
    }
}

addCourse("BIT" , "200H"  ,"2025-06-10")
getCourse("BIT");