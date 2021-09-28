function sayHello(name) {
    alert('Hello ' + name + '!');
}

function getName() {
    const userName = prompt("What is your name?");
    sayHello(userName);
}