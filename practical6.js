function welcome(func) {
    func();
    console.log("Welcome to Skillsanta Training")
}

function hello() {
    console.log("Hello, students");
}

welcome(hello);