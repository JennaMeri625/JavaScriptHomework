const submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},            
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true},
]

function addSubmission (array, newName, newScore, newDate) {

};

function deleteSubmissionByIndex (array, index) {

};

function deleteSubmissionByName (array, name) {

};

function editSubmission (array, index, score) {

};

function findSubmissionByName(array, name) {
    return array.find(item => item.name === name);   
    // for (let item of array) {
    //     if(item.name === name) {
    //         return item;
    //     }
    // }
    // return "Item not found."
}

console.log(findSubmissionByName(submissions, "Jill"));

function findLowestScore (array) {

};

function findAverageScore (array) {

};

function filterPassing (array) {

};

function filter90AndAbove (array) {

};

//Extended Challenges:

function createRange (start, end) {

};

function countElements (array) { //<== this is an array of strings

};