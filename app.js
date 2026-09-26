/* =========================================
   TUTORLINK APP.JS
========================================= */

const USERS_KEY = "tutorlink_users";
const CURRENT_USER_KEY = "tutorlink_current_user";


/* ---------- Storage ---------- */

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    } catch (error) {
        return null;
    }
}

function setCurrentUser(user) {
    localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(user)
    );
}


/* ---------- Redirect ---------- */

function redirectByRole(role) {

    if (role === "student") {
        window.location.href = "student-dashboard.html?v=1016";
        return;
    }

    if (role === "tutor") {
        window.location.href = "tutor-dashboard.html?v=1016";
        return;
    }

    window.location.href = "choose-role.html?v=1016";
}


/* ---------- Logout ---------- */

function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = "index.html?v=1016";
}


/* =========================================
   PAGE INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       LOGIN
    ===================================== */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const emailInput =
                document.getElementById("loginEmail");

            const passwordInput =
                document.getElementById("loginPassword");

            const message =
                document.getElementById("loginMessage");


            const email =
                emailInput.value.trim().toLowerCase();

            const password =
                passwordInput.value;


            /* Get saved accounts */

            const users = getUsers();


            /* Find matching account */

            const user = users.find(function (account) {

                return (
                    account.email === email &&
                    account.password === password
                );

            });


            /* No matching account */

            if (!user) {

                message.textContent =
                    "Email or password is incorrect.";

                message.className =
                    "auth-message error";

                return;
            }


            /* Save current user */

            setCurrentUser(user);


            /* Show success */

            message.textContent =
                "Login successful! Opening your dashboard...";

            message.className =
                "auth-message success";


            /* Redirect */

            setTimeout(function () {

                redirectByRole(user.role);

            }, 300);

        });

    }


    /* =====================================
       SIGN UP
    ===================================== */

    const signupForm =
        document.getElementById("signupForm");


    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name =
                document.getElementById("signupName")
                    .value.trim();

            const email =
                document.getElementById("signupEmail")
                    .value.trim()
                    .toLowerCase();

            const password =
                document.getElementById("signupPassword")
                    .value;

            const role =
                document.getElementById("signupRole")
                    .value;

            const message =
                document.getElementById("signupMessage");


            if (!name || !email || !password || !role) {

                message.textContent =
                    "Please fill in all fields.";

                message.className =
                    "auth-message error";

                return;
            }


            if (password.length < 6) {

                message.textContent =
                    "Password must contain at least 6 characters.";

                message.className =
                    "auth-message error";

                return;
            }


            const users = getUsers();


            const existingUser =
                users.find(function (account) {

                    return account.email === email;

                });


            if (existingUser) {

                message.textContent =
                    "An account with this email already exists.";

                message.className =
                    "auth-message error";

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

                createdAt:
                    new Date().toISOString()

            };


            users.push(newUser);

            saveUsers(users);

            setCurrentUser(newUser);


            message.textContent =
                "Account created! Opening your dashboard...";

            message.className =
                "auth-message success";


            setTimeout(function () {

                redirectByRole(role);

            }, 300);

        });

    }


    /* =====================================
       ROLE SELECTION
===================================== */

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

            window.location.href =
                "signup.html?v=1016";

        });

    }


    if (tutorRoleButton) {

        tutorRoleButton.addEventListener("click", function () {

            localStorage.setItem(
                "tutorlink_selected_role",
                "tutor"
            );

            window.location.href =
                "signup.html?v=1016";

        });

    }


    /* =====================================
       USER NAME
===================================== */

    const currentUser = getCurrentUser();

    const userNameElements =
        document.querySelectorAll("[data-user-name]");


    userNameElements.forEach(function (element) {

        if (currentUser) {
            element.textContent = currentUser.name;
        }

    });


    /* =====================================
       LOGOUT
===================================== */

    const logoutButtons =
        document.querySelectorAll("[data-logout]");


    logoutButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            logout();

        });

    });

});
