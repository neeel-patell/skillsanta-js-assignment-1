function difference(arr1, arr2) {
    var arr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr.includes(arr1[i]) == false)
            arr.push(arr1[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
        if (arr.includes(arr2[i]) == false)
            arr.push(arr2[i]);
    }
    return arr;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));