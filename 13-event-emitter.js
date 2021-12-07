const EventEmmiter = require("events");

const customEmmiter = new EventEmmiter();

customEmmiter.on("resp", (name) => {
  console.log(`data recieved ${name} !`);
});

customEmmiter.emit("resp", "vivek");
