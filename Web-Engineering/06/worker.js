self.onmessage = function (ev) {
    randomNumbersW = ev.data;   
    console.log('Worker received the  random numbers.');
    let t0 = performance.now();
    randomNumbersW.sort((a, b) => a -b);
    let t1 = performance.now();
    let milliseconds = t1 - t0;
    console.log('Sorted in ' + milliseconds + 'milliseconds. Result:');
    console.log(randomNumbersW);
    self.postMessage(milliseconds);
    self.close();
};

