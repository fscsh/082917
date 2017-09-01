function test(arr) {
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        console.log(i);
        arr[i] = arr[i].join('');
    }
    for (let j = 0; j < arr.length; j++) {
        arr[j]= arr[j].split('');
    }
    return arr;
}
console.log(test([[1234],[532],[5312]]));
