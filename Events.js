const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js events.`);
});

myEmitter.emit("greet", "Student");
