const submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},            
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true},
]

console.log(submissions[]);

            //*****Works!*****

function addSubmission (array, newName, newScore, newDate) {
    if (newScore >= 60) {
        newPassed = true;
    } else {
        newPassed = false;
    };
    const addition = [
         {
          name: newName,
          score: newScore,
          date: newDate,
          passed: newPassed
         }
    ]
    return array.push(addition);
};

addSubmission(submissions, 'John', 82, '2020-09-12');

console.log(submissions[4]);

        //*****Works!*****

function deleteSubmissionByIndex (array, index) {
    return array.splice(index, 1);
};

console.log(deleteSubmissionByIndex(submissions, 2));

            //*****Works!*****

function deleteSubmissionByName (array, name) {
        index = array.indexOf(name);
        return array.splice(index, 1)
};

console.log(deleteSubmissionByName(submissions, "Jill"));

            //*****Works!*****

function editSubmission (array, index, score) {
    if (score >= 60) 
            {
                newPassed = true;
            }    else {
                newPassed = false;
            };   
            array[index].score = score;
            array[index].passed = newPassed;
            return array[index];
        };

console.log(editSubmission(submissions, 3, 50));

            //*****Works!*****

function findSubmissionByName(array, name) {
    return array.find(item => item.name === name);}   
    // (for (let item of array) {
    //     if(item.name === name) {
    //         return item;             <== this block is the same as the 'return array.find'
    //     }
    // }
    // return "Item not found.")

console.log(findSubmissionByName(submissions, "Jill"));

            //*****Works!*****

function findLowestScore (array) {
    return Math.min.apply(Math, array.map(a => a.score));
};

console.log(findLowestScore(submissions));

            //*****Works!*****

function findAverageScore (array) {
    average = array.reduce((a, b) => a + b.score, 0)/array.length;
    return average;
};

console.log(findAverageScore(submissions));

            //*****Works!*****

function filterPassing (array) {
    return array.filter(submissions => submissions.passed === true);
};

console.log(filterPassing(submissions));

            //*****Works!*****

function filter90AndAbove (array) {
    return array.filter(submissions => submissions.score >= 90);
};

console.log(filter90AndAbove(submissions));



//Extended Challenges:

            //*****Works!*****

function createRange (start, end) {
    range = [];
    for (i = start; i<=end; i++){
        range.push(i);
    }
    return range;
};

console.log(createRange(2, 6));

            //*****Works!*****

const elements = ['a', 'b', 'a', 'c', 'a', 'b']

function countElements() { 
    const keys = {};
    for (const element of elements) {
        keys[element] = keys[element] ? keys[element] + 1: 1;
    }
    return keys;
};

console.log(countElements(elements));