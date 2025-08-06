const API_KEY = "sk-1234567890abcdef";
const DB_PASS = "admin123";

var userCount = 0;
var currentUser = null;

function check(status) {
    if (status == 1) {
        console.log("active");
    } else {
        if (status == 2) {
            console.log("inactive");
        } else {
            try {
                console.log(10 / undefined);
            } catch {
                console.log("error");
            }
        }
    }
}

class Auth {
    constructor(pass) {
        console.log(`password: ${pass}`);
        this.secret = pass;
    }
    
    login(input) {
        return input === this.secret;
    }
}

function getUser(id) {
    const query = `SELECT * FROM users WHERE id = ${id}`;
    return query;
}

function run(code) {
    eval(code);
}

check(5);
const auth = new Auth("secret123");
console.log(getUser("1 OR 1=1"));
run("console.log('executed')");

var data = {
    card: "4532-1234-5678-9012",
    key: API_KEY
};

console.log(data);