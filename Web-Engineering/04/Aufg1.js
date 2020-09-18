let identity_function = param => () => param;

function exec_identity_function() {
    let param = document.getElementById("param").value;
    let retfunc = identity_function(param);
    document.getElementById("ret").innerHTML = retfunc();
};

// Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zurück gibt.
// (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, die auf y angewandt wird.)
let addf = x => y => x + y;

function exec_2() {
    let x = parseInt(document.querySelector("#xforaddf").value);
    let y = parseInt(document.querySelector("#yforaddf").value);
    document.getElementById("retAddf").innerHTML = addf(x)(y);
};

// Schreiben Sie eine Funktion applyf(), die aus einer binären Funktion wie add(x,y) eine Funktion addfberechnet,
// die mit zwei Aufrufen das gleiche Ergebnis liefert, z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern.
// Entsprechend applyf(mul)(5)(6) soll 30 liefern, wenn mul die binäre Multiplikation ist.
function applyf_wrapper() {
    function add(x, y) {
        return x + y;
    }

    function applyf(f) {

    }

    let x = document.getElementById("xforapplyf").value;
    let y = document.getElementById("yforapplyf").value;

    let addf = applyf(add);
    let isEqual = addf(x)(y) === add(x, y);

    document.getElementById("retApplyF").innerHTML = isEqual;
}

// Schreiben Sie eine Funktion curry() (von Currying), die eine binäre Funktion und ein Argument nimmt,
// um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt,
// z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.
function curry_wrapper() {
    function curry(binaryF, arg) {

    }
}

// Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben,
// ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und lässt sich natürlich auch direkt implementieren.
// Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten der inc()-Implementierung zu schreiben?


// Schreiben Sie eine Funktion methodize(), die eine binäre Funktion (z.B. add, mul) in eine unäre Methode verwandelt.
// Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.

function methodize(f) {
    return function (y) {
        return f(this, y)
    }
}

// Schreiben Sie eine Funktion demethodize(), die eine unäre Methode (z.B. add, mul) in eine binäre Funktion umwandelt.
// demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.

// Schreiben Sie eine Funktion twice(), die eine binäre Funktion in eine unäre Funktion umwandelt,
// die den einen Parameter zweimal weiter reicht.
// Z.B. var double = twice(add); double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.

// Schreiben Sie eine Funktion composeu(), die zwei unäre Funktionen in eine einzelne unäre Funktion transformiert,
// die beide nacheinander aufruft, z.B. soll composeu(double, square)(3) genau 36 ergeben.

// Schreiben Sie eine Funktion composeb(), die zwei binäre Funktionen in eine einzelne Funktion transformiert,
// die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.

// Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, aufgerufen zu werden,
// z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.

// Schreiben Sie eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, die einen Zähler
// hoch- und herunterzählen. Z.B. counter = counterf(10); Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.

const counterf = (initValue) => {
    let count = initValue;
    return {
        inc: () => setCounterResult(count++),
        dec: () => setCounterResult(count--)
    }
};

let counter;

function initCounter() {
    let initValue = document.getElementById("xforcounter").value;
    counter = counterf(initValue);
    document.getElementById("retcounterf").innerText = initValue;
}

function inc_wrapper() {
    counter.inc();
}

function dec_wrapper() {
    counter.dec();
}

function setCounterResult(count) {
    document.getElementById("retcounterf").innerHTML = count;
}


// Make a function that makes a publish/subscribe object. It will reliably deliver all publications to all subscribers in the right order.
function pusub() {
    var subcribers = [];
    return {
        subscribe: function (func) {
            subcribers.push();
        }, publish: function (x) {
            subcribers.forEach(element => {

            })
        }
    }
}

// Make a factory that makes functions that generate unique symbols.

function gensymf(prefix) {
    let count = 0;
    let countArr = [];
    return function () {
        let result = prefix + count++;
        countArr.push(result);
        console.log(countArr);
        return countArr;
    }
}

const gensym = gensymf('G');

function generateSymbol() {
    document.getElementById("genret").innerHTML = gensym();
}

// Make a function that returns a function that will return the next fibonacci number.

// Write a function m that takes a value and an optional source string and returns them in an object.

// Write a function that adds from many invocations, until it sees an empty invocation.

// Write a function that will take a binary function and apply it to many invocations.

// Write a function m that takes a value and an optional source string and returns them in an object.
function m(value, source = 0) {
    return { value, source }
}

function m_trigger() {
    let value = document.getElementById("valueform").value;
    let source = document.getElementById("sourceform").value;
    let obj = m(value, source);
    console.log(obj);
    document.getElementById("mret").innerHTML = '<code>' + JSON.stringify(obj) + '</code>';
}

console.log();

