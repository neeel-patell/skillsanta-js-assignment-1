var value = prompt("Enter tempurature [value[c/f]] : ");

alert(convert_temparature(value));

function convert_temparature(value) {
    if (value.endsWith("C") || value.endsWith("c"))
        return ("Ferenheit : " + (Number(value.slice(0, -1)) * 9 / 5 + 32) + " F");
    else if (value.endsWith("f") || value.endsWith("F"))
        return ("Celsuis : " + ((Number(value.slice(0, -1)) - 32) * 5 / 9) + " C");
    else
        return ("Please use either [ f or F ] for ferenheit or [ c or C ] for Celsius to identify unit");
}