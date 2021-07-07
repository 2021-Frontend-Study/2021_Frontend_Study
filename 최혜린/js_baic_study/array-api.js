// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const a = fruits.join(', and ');
    console.log(a);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const a = fruits.split(',');
    // const a = fruits.split(',', 2);
    console.log(a);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const a = array.reverse();
    console.log(a);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const a =array.splice (0,2); //배열 자체를 수정
    // console.log(a);
    // console.log(array);
    const a = array.slice(2, 5); //배열에서 원하는 부분만 리턴
    console.log(a);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // const a = students.find(function(student,index){
    const a = students.find((student) => student.score === 90);
    console.log(a);
}

// Q6. make an array of enrolled students
{
    const a = students.filter((student) => student.enrolled);
    console.log(a);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const a = students.map((student) => student.score); //배열안엥 있는 모든 함수를 리턴된값으로 대체
    console.log(a);
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const a = students.some((student) => student.score < 50);
    console.log(a);
    const a2 = !students.every((student) => student.score >= 50);
    console.log(a2);
}

console.clear();
// Q9. compute students' average score
{
    const a = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(a / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
console.clear();
{
    const a = students
        .map((student) => student.score)
        .filter(score => score >= 50)
        .join();
    console.log(a);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'


{
    const a = students
        .map(student => student.score)
        .sort((a, b) => a - b)
        .join();
    console.log(a);
}