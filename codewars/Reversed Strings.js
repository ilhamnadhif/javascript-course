/* function solution(str) {
    let huruf = "";
    for (let i = str.length -1; i >= 0; i--) {
        huruf += str[i]
    }
    return huruf
} */
function solution(str) {
    return str.split("").reverse().join("")
}
console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
console.log(solution("h"), "h");
