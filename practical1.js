var a = Number(prompt("Enter no1 : "));
var b = Number(prompt("Enter no2 : "));
var c = Number(prompt("Enter no3 : "));

if (a > b && a > c)
    alert(`${a} is larger`);
else if (b > c)
    alert(`${b} is larger`);
else
    alert(`${c} is larger`);