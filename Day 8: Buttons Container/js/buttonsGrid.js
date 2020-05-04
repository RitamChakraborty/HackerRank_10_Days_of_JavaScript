let count = 7;
const arr = [1, 2, 3, 6, 9, 8, 7, 4];

document.getElementById("btn5").addEventListener("click", () => {
    count = ++count % arr.length;

    for (let i = 0; i <= arr.length; ++i) {
        if (i < 4) {
            document.getElementById("btn" + arr[i]).innerHTML = ""
                + (arr[((arr.length - ((arr.length + count) % arr.length + 1)) + i) % arr.length]);
        } else if (i > 4) {
            document.getElementById("btn" + arr[i - 1]).innerHTML = ""
                + (arr[((arr.length - ((arr.length + count) % arr.length + 1)) + (i - 1)) % arr.length]);
        }
    }
});