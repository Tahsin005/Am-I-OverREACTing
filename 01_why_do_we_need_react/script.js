function ltr() {
    const value1 = document.getElementById("count-1").innerText;
    const value2 = document.getElementById("count-2").innerText;

    let str1 = value1;
    let num1 = Number(str1);

    let str2 = value2;
    let num2 = Number(str2);

    // logic

    if (num2 > 0) {
        let new_num1 = num1 + 1;
        let new_num2 = num2 - 1;

        document.getElementById("count-1").innerText = new_num1;
        document.getElementById("count-2").innerText = new_num2;
    }
}
function rtl() {
    const value1 = document.getElementById("count-1").innerText;
    const value2 = document.getElementById("count-2").innerText;

    let str1 = value1;
    let num1 = Number(str1);

    let str2 = value2;
    let num2 = Number(str2);

    // logic

    if (num1 > 0) {
        let new_num1 = num1 - 1;
        let new_num2 = num2 + 1;

        document.getElementById("count-1").innerText = new_num1;
        document.getElementById("count-2").innerText = new_num2;
    }
}