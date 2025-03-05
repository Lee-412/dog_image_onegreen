// check valid normal

const isValidPassword = (password) => {
    if (password.length < 8) {
        console.log("Password must be at least 8 characters long");
        return;
    }
    if (password.match(/[0-9]/) == null) {
        console.log("Password must contain at least one number");
        return;
    }
    if (password.match(/[A-Z]/) == null) {
        console.log("Password must contain at least one uppercase letter");
        return;
    }
    if (password.match(/[!@#$%^&*(),.?":{}|<>]/) == null) {
        console.log("Password must contain at least one special character");
        return;
    }
    console.log("Password is valid");
    return;

}

// check valid using Regex Conditions

const isValidPasswordRegex = (password) => {
    const conditions = [
        { regex: /.{8,}/, message: "Password must be at least 8 characters long" },
        { regex: /[0-9]/, message: "Password must contain at least one number" },
        { regex: /[A-Z]/, message: "Password must contain at least one uppercase letter" },
        { regex: /[!@#$%^&*(),.?":{}|<>]/, message: "Password must contain at least one special character" }
    ];

    for (const condition of conditions) {
        if (!condition.regex.test(password)) {
            console.log(condition.message);
            return false;
        }
    }

    console.log("Password is valid");
    return true;
};
isValidPasswordRegex("Hello@123");
isValidPasswordRegex("hello123");
isValidPasswordRegex("HELLO@123");
isValidPasswordRegex("HELLO@123");
isValidPasswordRegex("HELLO@123");


isValidPassword("aaaaaaaAaa@aaa3aaaa");
isValidPassword("aaaaaa");
isValidPassword("abcdefgh");
isValidPassword("abcd1234");
isValidPassword("ABC12345");

