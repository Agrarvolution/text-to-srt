


let text = "This is a test.\nAnothertest.\n???\n";

const ESTIMATED_TIME_PER_CHAR = 0.7;
const TIME_PADDING = 2;


let lines = text.split(/\r?\n/)
    .filter(value => {
        return value != '';
    });
let output = '';
let secondStart = 0;

for (let i = 0; i < lines.length; i++) {
    let secondEnd = secondStart + TIME_PADDING + ESTIMATED_TIME_PER_CHAR * lines[i].length;
    output += i+1 + '\n';
    output += createTime(secondStart, secondEnd) + '\n';
    output += lines[i] + '\n\n';
}

console.log(output);

function createTime(secondStart, secondEnd) {
    return `${timeFromSeconds(secondStart)} --> ${timeFromSeconds(secondEnd)}`;
}

function timeFromSeconds(seconds) {
    let minutes = Math.floor(seconds / 60);
    let hour = padTimeWithZero(minutes/60,2,24);
    let minute = padTimeWithZero(seconds%60,2,60);
    let second = padTimeWithZero(seconds,2,60);
    let millisecond = padTimeWithZero((seconds - second)*1000, 3, 1000);
    return `${hour}:${minute}:${second},${millisecond}`;
}

function padTimeWithZero (int, leadingZeros, maxNumber) {
    if (int > maxNumber) {
        return int;
    }
    return ("000" + Math.floor(int)).slice(-leadingZeros).toString();
}