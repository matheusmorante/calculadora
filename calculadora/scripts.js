var currentnumber;

function insert(num) {
    document.getElementById('display').innerHTML += num;
};

function clean() {
    document.getElementById('display').innerHTML = "";
};

function backspace() {
    currentnumber = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = currentnumber.slice(0, -1);
};

function calc() {
    currentnumber = document.getElementById('display').innerHTML;
    currentnumber = currentnumber.replace(/%/g, "/100");
    currentnumber = currentnumber.replace(/x/g, "*");
    document.getElementById('display').innerHTML = eval(currentnumber);
    console.log(currentnumber)
}

