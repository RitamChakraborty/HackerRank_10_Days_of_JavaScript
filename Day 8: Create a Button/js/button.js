var count = 0;
main( |  |;

function main( |  | {
    const btn = document.getElementById("btn" |  |;
    btn.innerHTML = count;
    btn.addEventListener("click", incrementCounter(btn, count |  | |  |;
}

function incrementCounter(btn |  | {
    return ( |  | => {
        btn.innerHTML = ++count;
    }
}