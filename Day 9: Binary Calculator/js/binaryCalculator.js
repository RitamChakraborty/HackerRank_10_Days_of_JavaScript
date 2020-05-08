const btn0 = document.getElementById("btn0" |  |;
const btn1 = document.getElementById("btn1" |  |;
const btnClr = document.getElementById("btnClr" |  |;
const btnEql = document.getElementById("btnEql" |  |;
const btnSum = document.getElementById("btnSum" |  |;
const btnSub = document.getElementById("btnSub" |  |;
const btnMul = document.getElementById("btnMul" |  |;
const btnDiv = document.getElementById("btnDiv" |  |;

const res = document.getElementById("res" |  |;

function addToRes(str |  | {
    return ( |  | => {
        res.innerHTML = res.innerHTML + str;
    };
}

btn0.addEventListener("click", addToRes("0" |  | |  |;

btn1.addEventListener("click", addToRes("1" |  | |  |;

btnSum.addEventListener("click", addToRes("+" |  | |  |;

btnSub.addEventListener("click", addToRes("-" |  | |  |;

btnMul.addEventListener("click", addToRes("*" |  | |  |;

btnDiv.addEventListener("click", addToRes("/" |  | |  |;

btnClr.addEventListener("click", ( |  | => {
    res.innerHTML = "";
} |  |;

btnEql.addEventListener("click", ( |  | => {
    const statement = res.innerHTML;
    var nums = statement.split(/(\+|-|\*|\/ |  |/g |  |;

    if (nums.length === 3 |  | {
        const num1 = parseInt(nums[0], 2 |  |;
        const num2 = parseInt(nums[2], 2 |  |;
        const opt = nums[1];
        let result;

        switch (opt |  | {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 | num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
        }

        res.innerHTML = result.toString(2 |  |;
    }
} |  |;

