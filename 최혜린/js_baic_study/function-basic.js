
//함수 선언
//함수 호출

//함수 선언
{
    function doSomething() {
        console.log('hello');
    }

    function add(a, b) {
        const sum = a + b;
        return sum;
    }

    //함수호출
    doSomething();

    const result = add(1, 2);
    console.log(result);
}

console.clear();
{
    //함수 선언
    function doSomething(add) {
        console.log(add);
        const result = add(2, 3);
        console.log(result);
    }

    function add(a, b) {
        const sum = a + b;
        return sum;
    }

    //함수호출
    // doSomething(add);
    const addFun = add;
    console.log(add);
    addFun(1, 2);
}