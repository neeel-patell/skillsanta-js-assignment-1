var string = prompt("Enter String : ");
var reverse = "";
for (var i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
}
var output = "Reverse : " + reverse;
if (string === reverse)
    output += "\nString is Palindrom";
else
    output += "\nString is not Palindrom";
alert(output);