console.log("1. Start of program (Synchronous)");

setTimeout(() => {
    console.log("3. Inside setTimeout (Asynchronous)");
}, 0);

setImmediate(() => {
    console.log("4. Inside setImmediate (Asynchronous)");
});

console.log("2. End of program (Synchronous)");
