class Human {
    constructor(name, surname, age = 0, gender, nationality) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    getFullName() {
        return `Name:${this.name} Surname:${this.surname}`;
    }
    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}
const human = new Human("Nurane", "Ismayilzade", 21, "Girl", "Azerbaycan");
console.log("Full Name:", human.getFullName());
console.log("Birth Year:", human.getBirthYear());
//-------------------------------------------------------------------------------------------------------
console.log("Task");
class User extends Human {
    constructor(name, surname, age, gender, nationality, username, email, isAdmin, password, bio) {
        super(name, surname, age, gender, nationality);
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
        this.password = password;
        this.bio = bio;
        this.isLogged = false;
    }
    changePassword(currentPassword, newPassword) {
        if (currentPassword === this.password) {
            if (currentPassword === newPassword)
            {
                return 'new password and current password is the same';
            } 
            else if (newPassword.length < 5)
            {
                return 'new password should be at least 5 characters long';
            } 
            else 
            {
                this.password = newPassword;
                return 'password updated successfully';
            }
        } 
        else 
        {
            return ('incorrect current password');
        }
    }
    changeEmail(users, newEmail) {
        const emailExists = users.some(user => user.email === newEmail);
        if (!emailExists)
        {
            this.email = newEmail;
            return 'email updated successfully';
        } 
        else
        {
            return 'email already exists';
        }
    }
}
const user = new User("Nurane", "Ismayilzada", 21, "Girl", "Azerbaijan", "nunu21", "nunu@egmail.com", false, "nunu123", "azerbaijanian");
console.log("Before changing password:");
console.log(user);
console.log(user.changePassword("nunu123", "nurane2002"));
console.log("After changing password:");
console.log(user);

//---------------------------------------------------------------------------------
console.log("Task1");
const user1 = new User("Alisa", "Ismayilova", 18, "Girl", "Azerbaycan", "alisha", "alisha@gmail.com", false, "alisa123", "nothing");
const user2 = new User("Nunu", "Ismayilzada", 21, "Girl", "British", "nunuu", "nunu@gmail.com", true, "nunu123", "everything");
const user3 = new User("Ismayil", "Ismayilov", 17, "Boy", "Canadian", "isi2006", "isi@gmail.com", false, "isii123", "none");
const users = [user1, user2, user3];
console.log(user.changeEmail(users,"nunnu@gmail.com"));
console.log(user.changeEmail(users,"nunu@gmail.com"));

//---------------------------------------------------------------------------------------------------------------------
console.log("Task2");
function sortUsersByUsername(usersArray) {
    const sortedUsers = usersArray.slice();
    sortedUsers.sort(function (a, b) {
        if (a.username < b.username) {
            return -1;
        } else if (a.username > b.username) {
            return 1;
        } else {
            return 0;
        }
    });
    return sortedUsers;
}
const users1 = [
    { username: "nunu_isi" },
    { username: "alisha_ismayilzadaaa" },
    { username: "ismail_ismailzada" }
];

const sortedUsers = sortUsersByUsername(users1);

console.log(sortedUsers);
//------------------------------------------------------------------------------------------------------------
console.log("Task3");
function filterByBirthYear(usersArray, year) {
    return usersArray.filter(user => new Date().getFullYear() - user.age > year);
}
const users2 = [
    { name: "salam", surname: "hello", age: 20 },
    { name: "necesen", surname: "howareyou", age: 25 },
    { name: "neynirsen", surname: "whatdoyoudo", age: 55 }
];
const filteredUsers = filterByBirthYear(users2, 1990);
console.log(filteredUsers);
//-------------------------------------------------------------------------------------------------------
console.log("Task4");
function login(usersArray, username, password) {
    const user = usersArray.find(user => user.username === username);
    if (!user) {
        return 'user not found!';
    }
    else if (user.password !== password) {
        return 'incorrect username or password';
    } 
    else if (user.isLogged) {
        return 'another user currently logged in';
    }
    else {
        user.isLogged = true;
        return 'successfully logged in';
    }
}
const users4 = [
    { username: "salam", password: "salam123", isLogged: false },
    { username: "necesen", password: "necesen123", isLogged: false },
    { username: "hiii33", password: "hii12", isLogged: true }
];

console.log(login(users4, "salam", "salam123")); 
console.log(login(users4, "necesen", "necesenn123"));
console.log(login(users4, "assssl", "hiiss12"));
console.log(login(users4, "hiii33", "hii12")); 

//--------------------------------------------------------------------------------------------
console.log("Task5");
function LogOut(usersArray, username) {
    const user = usersArray.find(user => user.username === username);
    if (!user)
    {
        return 'user not found';
    } 
    else if (!user.isLogged) 
    {
        return 'user did not log in to log out';
    } 
    else {
        user.isLogged = false;
        return 'successfully logged out';
    }
}
const users5 = [
    { username: "salam", isLogged: false },
    { username: "necesen", isLogged: false },
    { username: "hiii33", isLogged: true }
];

console.log(LogOut(users5, "salam")); 
console.log(LogOut(users5, "necesen"));
console.log(LogOut(users5, "hii"));
console.log(LogOut(users5, "alis")); 

//--------------------------------------------------------------------------------------------
console.log("Task6");
function CreateUser(usersArray, newUser) {
    usersArray.push(newUser);
}
let users6 = [
    { username: "konul", isLogged: true },
    { username: "aqsin", isLogged: false }
];
const newUser = { username: "konul1977", isLogged: false };
CreateUser(users6, newUser);
console.log(users6);

//--------------------------------------------------------------------------------------------
console.log("Task7");
function DeleteUser(usersArray, username) {
    const index = usersArray.findIndex(user => user.username === username);
    if (index !== -1) {
        usersArray.splice(index, 1);
        console.log("User deleted");
    } else {
        return 'user not found';
    }
}
let users7 = [
    { username: "nurane", isLogged: true },
    { username: "nunuu", isLogged: false },
    { username: "nuranaaaa", isLogged: true },
];

console.log(DeleteUser(users7, "nurane"));
console.log(DeleteUser(users7, "nunu")); 
console.log(users7);

