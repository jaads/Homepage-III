function noParams() {
    console.log(arguments);
};

console.log(noParams(1, 2, 3));



function restParamFun(...Args) {
    console.log(Args);
};

console.log(restParamFun(1, 2, 3));

