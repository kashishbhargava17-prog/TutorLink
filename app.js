/* =========================================
   TUTORLINK APP.JS
========================================= */

const USERS_KEY = "tutorlink_users";
const CURRENT_USER_KEY = "tutorlink_current_user";


/* ---------- Storage ---------- */

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(
        localStorage.getItem(CURRENT_USER_KEY)
    );
}

function setCurrentUser(user) {
    localStorage.setItem(
        CURRENT_USER_KEY,
        JSON.stringify(user)
    );
}


/* ---------- Role Redirect ---------- */

function redirectByRole(role) {

    if (role === "student") {
        window.location.href = "student-dashboard.html";
        return;
    }

    if (role === "tutor") {
        window.location.href = "tutor-dashboard.html";
        return;
    }

    window.location.href = "choose-role.html";
}


/* ---------- Logout ---------- */

function logout() {

    localStorage.removeItem(CURRENT_USER_KEY);

    window.location.href = "index.html";
}


/* =========================================
   PAGE INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       LOGIN
    ===================================== */

    const loginForm =
        document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    document
                        .getElementById("loginEmail")
                        .value
                        .trim()
                        .toLowerCase();

                const password =
                    document
                        .getElementById("loginPassword")
                        .value;

                const message =
                    document.getElementById(
                        "loginMessage"
                    );

                const users = getUsers();

                const user = users.find(function (account) {

                    return (
                        account.email === email &&
                        account.password === password
                    );

                });


                if (!user) {

                    message.textContent =
                        "Email or password is incorrect.";

                    message.className =
                        "auth-message error";

                    return;
                }


                /* Save logged-in user */

                setCurrentUser(user);


                message.textContent =
                    "Login successful! Opening your dashboard...";

                message.className =
                    "auth-message success";


                /* Go to correct dashboard */

                setTimeout(function () {

                    redirectByRole(user.role);

                }, 500);

            }
        );

    }


    /* =====================================
       SIGN UP
    ===================================== */

    const signupForm =
        document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                        .getElementById("signupName")
                        .value
                        .trim();

                const email =
                    document
                        .getElementById("signupEmail")
                        .value
                        .trim()
                        .toLowerCase();

                const password =
                    document
                        .getElementById("signupPassword")
                        .value;

                const role =
                    document
                        .getElementById("signupRole")
                        .value;

                const message =
                    document.getElementById(
                        "signupMessage"
                    );


                /* Validation */

                if (
                    !name ||
                    !email ||
                    !password ||
                    !role
                ) {

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


                /* Check existing account */

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


                /* Create account */

                const newUser = {

                    id:
                        "user_" +
                        Date.now(),

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

                }, 500);

            }
        );

    }


    /* =====================================
       ROLE SELECTION
    ===================================== */

    const studentRoleButton =
        document.getElementById(
            "studentRoleButton"
        );

    const tutorRoleButton =
        document.getElementById(
            "tutorRoleButton"
        );


    if (studentRoleButton) {

        studentRoleButton.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "tutorlink_selected_role",
                    "student"
                );

                window.location.href =
                    "signup.html";

            }
        );

    }


    if (tutorRoleButton) {

        tutorRoleButton.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "tutorlink_selected_role",
                    "tutor"
                );

                window.location.href =
                    "signup.html";

            }
        );

    }


    /* =====================================
       DISPLAY USER NAME
    ===================================== */

    const currentUser =
        getCurrentUser();


    const userNameElements =
        document.querySelectorAll(
            "[data-user-name]"
        );


    userNameElements.forEach(
        function (element) {

            if (currentUser) {

                element.textContent =
                    currentUser.name;

            }

        }
    );


    /* =====================================
       LOGOUT BUTTONS
    ===================================== */

    const logoutButtons =
        document.querySelectorAll(
            "[data-logout]"
        );


    logoutButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    logout();

                }
            );

        }
    );

});
