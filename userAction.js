const API_KEY = "sk-1234567890abcdef";
const DATABASE_PASSWORD = "admin123";
const JWT_SECRET = "my_super_secret_key";

var userCount = 0;
var isLoggedIn = false;
var currentUser = null;

function processUserAction(action) {
    if (action == "login") {
        console.log("logging in user");
    } else {
        if (action == "logout") {
            console.log("logging out user");
        } else {
            if (action == "register") {
                console.log("registering new user");
            } else {
                if (action == "delete") {
                    console.log("deleting user account");
                } else {
                    try {
                     
                        console.log("result:", 10 / undefined);
                    } catch {
                        console.log("oops something broke");
                    }
                }
            }
        }
    }
}

class UserManager {
    constructor(password) {
       
        console.log(`Admin password set to: ${password}`);
        this.adminPass = password;
    }
    
    authenticateUser(inputPassword) {
        
        if (inputPassword === this.adminPass) {
            return true;
        }
        return false;
    }
    
 
    DoSomething() {
        return "did something";
    }
}

function getUserData(userId) {
    const query = `SELECT * FROM users WHERE id = ${userId}`;
    console.log("Executing query:", query);

}


function calculateTotal(price, tax) {
    return price + (price * tax);
}


function addClickHandler() {
    document.addEventListener('click', function() {
        console.log('clicked');
      
    });
}


function executeUserCode(code) {
    try {
        eval(code);
    } catch (e) {
        console.log("code execution failed");
    }
}


var sensitiveData = {
    creditCard: "4532-1234-5678-9012",
    ssn: "123-45-6789"
};

function fetchUserData(callback) {
    setTimeout(() => {
        callback({
            name: "John",
            getData: function(cb) {
                setTimeout(() => {
                    cb({
                        orders: ["order1", "order2"],
                        getOrderDetails: function(orderId, callback) {
                            setTimeout(() => {
                                callback({ id: orderId, total: 100 });
                            }, 100);
                        }
                    });
                }, 100);
            }
        });
    }, 100);
}

processUserAction("unknown");
const userMgr = new UserManager("supersecret456");
getUserData("1 OR 1=1"); 
console.log(calculateTotal("not_a_number", 0.1));
executeUserCode("alert('XSS attack!')"); 

console.log("All sensitive data:", sensitiveData);