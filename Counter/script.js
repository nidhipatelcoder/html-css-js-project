let h1 = document.getElementById("counter")
console.log(h1);

let count = 0



function increase() {
    count++;
    h1.innerHTML = count;
    console.log("working");

}
function reset() {
    count = 0;
    h1.innerHTML = count;
    console.log("working");

}
function decrease() {
    count--;
    h1.innerHTML = count;
    console.log("working");
}

