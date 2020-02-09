var x = 1;

while (x <= 20) {
    if ((x % 3 === 0) && (x % 5 !== 0)) {
        console.log("Julia");
        x = x + 1;
        continue;
    } else if ((x % 3 !== 0) && (x % 5 === 0)) {
        console.log("James");
        x = x + 1;
        continue;
    } else if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log("JuliaJames");
        x = x + 1;
        continue;
    } else {
        console.log(x);
        x = x + 1;
        continue;
    }  
    x = x + 1
}
