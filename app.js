/* =========================================
   TUTORLINK - AUTHENTICATION & BASIC APP
   Prototype only - uses localStorage
========================================= */

/* ---------- Storage Keys ---------- */

const USERS_KEY = "tutorlink_users";
const CURRENT_USER_KEY = "tutorlink_current_user";


/* ---------- Helper Functions ---------- */

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = "index.html";
}


/* ---------- Redirect Helpers ---------- */

function goToLogin(role = "") {
    if (role) {
        localStorage.setItem("tutorlink_selected_role", role);
    }

    window.location.href = "login.html";
}

function goToSignup(role = "") {
    if (role) {
        localStorage.setItem("tutorlink_selected_role", role);
    }

    window.location.href = "signup.html";
}

function redirectByRole(role) {
    if (role === "student") {
        window.location.href = "student-dashboard.html";
    } else if (role === "tutor") {
        window.location.href = "tutor-dashboard.html";
    } else {
        window.location.href = "choose-role.html";
    }
}


/* ---------- Homepage Buttons ---------- */

document.addEventListener("DOMContentLoaded", function () {

    const findTutorButton = document.getElementById("findTutorButton");
    const becomeTutorButton = document.getElementById("becomeTutorButton");

    if (findTutorButton) {
        findTutorButton.addEventListener("click", function () {
            goToLogin("student");
        });
    }

    if (becomeTutorButton) {
        becomeTutorButton.addEventListener("click", function () {
            goToLogin("tutor");
        });
    }


    /* ---------- Login Form ---------- */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document
                .getElementById("loginEmail")
                .value
                .trim()
                .toLowerCase();

            const password = document
                .getElementById("loginPassword")
                .value;

            const message = document.getElementById("loginMessage");

            const users = getUsers();

            const user = users.find(function (account) {
                return account.email === email &&
                       account.password === password;
            });

            if (!user) {
                message.textContent =
                    "We couldn't find an account with those details.";
                message.className = "auth-message error";
                return;
            }

            setCurrentUser(user);

            message.textContent = "Login successful! Redirecting...";
            message.className = "auth-message success";

            setTimeout(function () {
                redirectByRole(user.role);
            }, 600);
        });
    }


    /* ---------- Sign Up Form ---------- */

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document
                .getElementById("signupName")
                .value
                .trim();

            const email = document
                .getElementById("signupEmail")
                .value
                .trim()
                .toLowerCase();

            const password = document
                .getElementById("signupPassword")
                .value;

            const role = document
                .getElementById("signupRole")
                .value;

            const message = document.getElementById("signupMessage");

            if (!name || !email || !password || !role) {
                message.textContent = "Please fill in all fields.";
                message.className = "auth-message error";
                return;
            }

            if (password.length < 6) {
                message.textContent =
                    "Password must contain at least 6 characters.";
                message.className = "auth-message error";
                return;
            }

            const users = getUsers();

            const existingUser = users.find(function (account) {
                return account.email === email;
            });

            if (existingUser) {
                message.textContent =
                    "An account with this email already exists.";
                message.className = "auth-message error";
                return;
            }

            const newUser = {
                id: "user_" + Date.now(),
                name: name,
                email: email,
                password: password,
                role: role,
                tute: 0,
                classesRemaining: 0,
                savedTutors: [],
                bookings: [],
                quizResults: [],
                reviews: [],
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            saveUsers(users);
            setCurrentUser(newUser);

            message.textContent =
                "Account created! Taking you to your dashboard...";
            message.className = "auth-message success";

            setTimeout(function () {
                redirectByRole(role);
            }, 700);
        });
    }


    /* ---------- Role Selection ---------- */

    const studentRoleButton =
        document.getElementById("studentRoleButton");

    const tutorRoleButton =
        document.getElementById("tutorRoleButton");

    if (studentRoleButton) {
        studentRoleButton.addEventListener("click", function () {
            localStorage.setItem(
                "tutorlink_selected_role",
                "student"
            );

            window.location.href = "signup.html";
        });
    }

    if (tutorRoleButton) {
        tutorRoleButton.addEventListener("click", function () {
            localStorage.setItem(
                "tutorlink_selected_role",
                "tutor"
            );

            window.location.href = "signup.html";
        });
    }


    /* ---------- Show Logged-In User ---------- */

    const currentUser = getCurrentUser();

    const userNameElements =
        document.querySelectorAll("[data-user-name]");

    userNameElements.forEach(function (element) {

        if (currentUser) {
            element.textContent = currentUser.name;
        }

    });


    /* ---------- Logout Buttons ---------- */

    const logoutButtons =
        document.querySelectorAll("[data-logout]");

    logoutButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            logout();
        });

    });

});
