/* =========================================
   TUTORLINK APP.JS
   Authentication + Tutors + Search + Saves
========================================= */

const USERS_KEY = "tutorlink_users";
const CURRENT_USER_KEY = "tutorlink_current_user";
const SAVED_TUTORS_KEY = "tutorlink_saved_tutors";


/* =========================================
   TUTOR DATABASE
========================================= */

const tutors = [

    {
        id: "tutor_001",
        name: "Ananya Sharma",
        subject: "Mathematics",
        level: "School",
        rating: 4.9,
        reviews: 128,
        experience: 4,
        sessions: 342,
        price: 300,
        languages: ["English", "Hindi"],
        teachingStyle: "Concept-based and visual",
        availability: "Mon–Fri • 4 PM–8 PM",
        qualifications: "B.Sc. Mathematics",
        students: 86,
        verified: true,
        bio: "Makes difficult mathematical concepts easier through examples, visuals and step-by-step explanations.",
        avatar: "AS"
    },

    {
        id: "tutor_002",
        name: "Aarav Mehta",
        subject: "Physics",
        level: "School",
        rating: 4.8,
        reviews: 94,
        experience: 3,
        sessions: 218,
        price: 280,
        languages: ["English", "Hindi"],
        teachingStyle: "Practical and problem-solving",
        availability: "Mon, Wed, Fri • 5 PM–9 PM",
        qualifications: "B.Tech. Mechanical Engineering",
        students: 61,
        verified: true,
        bio: "Focuses on understanding the logic behind physics instead of memorising formulas.",
        avatar: "AM"
    },

    {
        id: "tutor_003",
        name: "Riya Deshmukh",
        subject: "English",
        level: "School",
        rating: 4.9,
        reviews: 151,
        experience: 5,
        sessions: 410,
        price: 250,
        languages: ["English", "Hindi", "Marathi"],
        teachingStyle: "Interactive and conversational",
        availability: "Tue–Sat • 3 PM–7 PM",
        qualifications: "M.A. English",
        students: 104,
        verified: true,
        bio: "Helps students improve grammar, writing, communication and confidence through interactive lessons.",
        avatar: "RD"
    },

    {
        id: "tutor_004",
        name: "Kabir Shah",
        subject: "Computer Science",
        level: "College",
        rating: 4.8,
        reviews: 76,
        experience: 3,
        sessions: 196,
        price: 300,
        languages: ["English", "Hindi"],
        teachingStyle: "Project-based learning",
        availability: "Mon–Thu • 6 PM–10 PM",
        qualifications: "B.Sc. Computer Science",
        students: 48,
        verified: true,
        bio: "Teaches programming and computer science through practical projects and real-world examples.",
        avatar: "KS"
    },

    {
        id: "tutor_005",
        name: "Meera Iyer",
        subject: "Economics",
        level: "College",
        rating: 4.7,
        reviews: 63,
        experience: 6,
        sessions: 287,
        price: 300,
        languages: ["English", "Hindi", "Tamil"],
        teachingStyle: "Discussion and case studies",
        availability: "Mon, Tue, Thu • 5 PM–9 PM",
        qualifications: "M.A. Economics",
        students: 72,
        verified: true,
        bio: "Connects economic theory with everyday situations, business examples and case studies.",
        avatar: "MI"
    },

    {
        id: "tutor_006",
        name: "Vihaan Patel",
        subject: "Business Studies",
        level: "College",
        rating: 4.9,
        reviews: 87,
        experience: 4,
        sessions: 251,
        price: 275,
        languages: ["English", "Hindi", "Gujarati"],
        teachingStyle: "Case-based and practical",
        availability: "Wed–Sun • 4 PM–9 PM",
        qualifications: "BBA",
        students: 67,
        verified: true,
        bio: "Turns business concepts into practical case studies that students can relate to.",
        avatar: "VP"
    },

    {
        id: "tutor_007",
        name: "Sana Khan",
        subject: "Hindi",
        level: "School",
        rating: 4.8,
        reviews: 112,
        experience: 5,
        sessions: 329,
        price: 220,
        languages: ["Hindi", "English", "Urdu"],
        teachingStyle: "Storytelling and discussion",
        availability: "Mon–Fri • 3 PM–7 PM",
        qualifications: "M.A. Hindi",
        students: 91,
        verified: true,
        bio: "Uses stories, conversations and cultural context to make Hindi engaging and memorable.",
        avatar: "SK"
    },

    {
        id: "tutor_008",
        name: "Arjun Nair",
        subject: "Python",
        level: "College",
        rating: 4.9,
        reviews: 103,
        experience: 3,
        sessions: 275,
        price: 300,
        languages: ["English", "Hindi", "Malayalam"],
        teachingStyle: "Hands-on coding",
        availability: "Tue–Sun • 6 PM–10 PM",
        qualifications: "BCA",
        students: 59,
        verified: true,
        bio: "Teaches Python by building small applications and gradually moving towards larger projects.",
        avatar: "AN"
    },

    {
        id: "tutor_009",
        name: "Ishita Rao",
        subject: "Mathematics",
        level: "College",
        rating: 4.8,
        reviews: 71,
        experience: 3,
        sessions: 184,
        price: 260,
        languages: ["English", "Hindi"],
        teachingStyle: "Structured and analytical",
        availability: "Mon–Fri • 7 PM–10 PM",
        qualifications: "B.Sc. Mathematics",
        students: 52,
        verified: true,
        bio: "Breaks complex college mathematics into manageable steps with focused practice.",
        avatar: "IR"
    },

    {
        id: "tutor_010",
        name: "Dev Malhotra",
        subject: "Computer Science",
        level: "College",
        rating: 4.7,
        reviews: 58,
        experience: 4,
        sessions: 203,
        price: 250,
        languages: ["English", "Hindi"],
        teachingStyle: "Practical and project-focused",
        availability: "Sat–Sun • 10 AM–4 PM",
        qualifications: "B.Tech. Computer Engineering",
        students: 44,
        verified: true,
        bio: "Helps students understand programming fundamentals by building useful mini-projects.",
        avatar: "DM"
    }

];


/* =========================================
   STORAGE FUNCTIONS
========================================= */

function getUsers() {

    try {

        return JSON.parse(
            localStorage.getItem(USERS_KEY)
        ) || [];

    } catch (error) {

        return [];

    }

}


function saveUsers(users) {

    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(users)
    );

}


function getCurrentUser() {

    try {

        return JSON.parse(
            localStorage.getItem(CURRENT_USER_KEY)
        );

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


/* =========================================
   SAVED TUTORS
========================================= */

function getSavedTutors() {

    try {

        return JSON.parse(
            localStorage.getItem(SAVED_TUTORS_KEY)
        ) || [];

    } catch (error) {

        return [];

    }

}


function toggleSavedTutor(tutorId) {

    let savedTutors = getSavedTutors();

    if (savedTutors.includes(tutorId)) {

        savedTutors =
            savedTutors.filter(function (id) {

                return id !== tutorId;

            });

    } else {

        savedTutors.push(tutorId);

    }

    localStorage.setItem(
        SAVED_TUTORS_KEY,
        JSON.stringify(savedTutors)
    );

    return savedTutors.includes(tutorId);
}


/* =========================================
   ROLE REDIRECT
========================================= */

function redirectByRole(role) {

    if (role === "student") {

        window.location.href =
            "student-dashboard.html?v=1017";

        return;

    }


    if (role === "tutor") {

        window.location.href =
            "tutor-dashboard.html?v=1017";

        return;

    }


    window.location.href =
        "choose-role.html?v=1017";

}


/* =========================================
   LOGOUT
========================================= */

function logout() {

    localStorage.removeItem(
        CURRENT_USER_KEY
    );

    window.location.href =
        "index.html?v=1017";

}


/* =========================================
   CREATE TUTOR CARD
========================================= */

function createTutorCard(tutor) {

    const saved =
        getSavedTutors().includes(tutor.id);


    return `

        <article class="tutor-card">

            <div class="tutor-card-top">

                <div class="tutor-avatar">
                    ${tutor.avatar}
                </div>

                <button
                    class="save-tutor ${saved ? "saved" : ""}"
                    data-save-tutor="${tutor.id}"
                    title="Save tutor"
                    type="button"
                >
                    ${saved ? "♥" : "♡"}
                </button>

            </div>


            <h3>
                ${tutor.name}
            </h3>


            <div class="tutor-subject">
                ${tutor.subject}
            </div>


            <p class="tutor-bio">
                ${tutor.bio}
            </p>


            <div class="tutor-meta">

                <span class="tutor-tag">
                    🎓 ${tutor.level}
                </span>

                <span class="tutor-tag">
                    ${tutor.experience} years
                </span>

                <span class="tutor-tag">
                    ${tutor.sessions} sessions
                </span>

            </div>


            <div class="tutor-rating">

                ⭐ ${tutor.rating}

                <span>
                    (${tutor.reviews} reviews)
                </span>

            </div>


            <div class="tutor-price-row">

                <div class="tutor-price">

                    ₹${tutor.price}

                    <small>
                        / hour
                    </small>

                </div>


                ${
                    tutor.verified
                    ?
                    `<span class="verified-badge">
                        ✓ VERIFIED
                    </span>`
                    :
                    ""
                }

            </div>


            <div class="tutor-card-actions">

                <a
                    href="tutor-profile.html?id=${tutor.id}"
                    class="view-profile"
                >
                    View Profile
                </a>

                <a
                    href="login.html?role=student"
                    class="book-tutor"
                >
                    Book Session
                </a>

            </div>

        </article>

    `;

}


/* =========================================
   RENDER TUTORS
========================================= */

function renderTutors(tutorList) {

    const grid =
        document.getElementById("tutorGrid");

    const empty =
        document.getElementById("emptyTutors");

    const count =
        document.getElementById("tutorResultCount");


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    if (tutorList.length === 0) {

        if (empty) {
            empty.style.display = "block";
        }

        if (count) {
            count.textContent =
                "No tutors match your search.";
        }

        return;

    }


    if (empty) {
        empty.style.display = "none";
    }


    if (count) {

        count.textContent =
            `Showing ${tutorList.length} tutor${tutorList.length === 1 ? "" : "s"}`;

    }


    tutorList.forEach(function (tutor) {

        grid.insertAdjacentHTML(
            "beforeend",
            createTutorCard(tutor)
        );

    });


    /* Attach Save buttons */

    document
        .querySelectorAll("[data-save-tutor]")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const tutorId =
                        button.dataset.saveTutor;


                    const nowSaved =
                        toggleSavedTutor(tutorId);


                    button.classList.toggle(
                        "saved",
                        nowSaved
                    );


                    button.textContent =
                        nowSaved ? "♥" : "♡";

                }
            );

        });

}


/* =========================================
   FILTER TUTORS
========================================= */

function filterTutors() {

    const searchInput =
        document.getElementById("tutorSearch");

    const subjectInput =
        document.getElementById("subjectFilter");

    const levelInput =
        document.getElementById("levelFilter");

    const ratingInput =
        document.getElementById("ratingFilter");

    const priceInput =
        document.getElementById("priceFilter");


    if (
        !searchInput ||
        !subjectInput ||
        !levelInput ||
        !ratingInput ||
        !priceInput
    ) {

        return;

    }


    const search =
        searchInput.value
            .trim()
            .toLowerCase();


    const subject =
        subjectInput.value;


    const level =
        levelInput.value;


    const rating =
        ratingInput.value;


    const price =
        priceInput.value;


    const filtered =
        tutors.filter(function (tutor) {


            const searchableText = [

                tutor.name,

                tutor.subject,

                tutor.level,

                tutor.teachingStyle,

                tutor.qualifications,

                tutor.languages.join(" ")

            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                !search ||
                searchableText.includes(search);


            const matchesSubject =
                subject === "all" ||
                tutor.subject === subject;


            const matchesLevel =
                level === "all" ||
                tutor.level === level;


            const matchesRating =
                rating === "all" ||
                tutor.rating >= Number(rating);


            const matchesPrice =
                price === "all" ||
                tutor.price <= Number(price);


            return (
                matchesSearch &&
                matchesSubject &&
                matchesLevel &&
                matchesRating &&
                matchesPrice
            );

        });


    renderTutors(filtered);

}


/* =========================================
   LOGIN
========================================= */

function initializeLogin() {

    const loginForm =
        document.getElementById("loginForm");


    if (!loginForm) {
        return;
    }


    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const emailInput =
                document.getElementById(
                    "loginEmail"
                );


            const passwordInput =
                document.getElementById(
                    "loginPassword"
                );


            const message =
                document.getElementById(
                    "loginMessage"
                );


            const email =
                emailInput.value
                    .trim()
                    .toLowerCase();


            const password =
                passwordInput.value;


            const users =
                getUsers();


            const user =
                users.find(
                    function (account) {

                        return (
                            account.email === email &&
                            account.password === password
                        );

                    }
                );


            if (!user) {

                message.textContent =
                    "Email or password is incorrect.";

                message.className =
                    "auth-message error";

                return;

            }


            setCurrentUser(user);


            message.textContent =
                "Login successful! Opening your dashboard...";

            message.className =
                "auth-message success";


            setTimeout(
                function () {

                    redirectByRole(
                        user.role
                    );

                },
                300
            );

        }
    );

}


/* =========================================
   SIGN UP
========================================= */

function initializeSignup() {

    const signupForm =
        document.getElementById(
            "signupForm"
        );


    if (!signupForm) {
        return;
    }


    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "signupName"
                    )
                    .value
                    .trim();


            const email =
                document
                    .getElementById(
                        "signupEmail"
                    )
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById(
                        "signupPassword"
                    )
                    .value;


            const role =
                document
                    .getElementById(
                        "signupRole"
                    )
                    .value;


            const message =
                document.getElementById(
                    "signupMessage"
                );


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


            const users =
                getUsers();


            const existingUser =
                users.find(
                    function (account) {

                        return (
                            account.email === email
                        );

                    }
                );


            if (existingUser) {

                message.textContent =
                    "An account with this email already exists.";

                message.className =
                    "auth-message error";

                return;

            }


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


            setTimeout(
                function () {

                    redirectByRole(role);

                },
                300
            );

        }
    );

}


/* =========================================
   ROLE SELECTION
========================================= */

function initializeRoleSelection() {

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
                    "signup.html?v=1017";

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
                    "signup.html?v=1017";

            }
        );

    }

}


/* =========================================
   USER NAME
========================================= */

function initializeUserNames() {

    const currentUser =
        getCurrentUser();


    document
        .querySelectorAll(
            "[data-user-name]"
        )
        .forEach(function (element) {

            if (currentUser) {

                element.textContent =
                    currentUser.name;

            }

        });

}


/* =========================================
   LOGOUT BUTTONS
========================================= */

function initializeLogoutButtons() {

    document
        .querySelectorAll(
            "[data-logout]"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                logout
            );

        });

}


/* =========================================
   TUTOR PAGE
========================================= */

function initializeTutorPage() {

    const tutorGrid =
        document.getElementById(
            "tutorGrid"
        );


    if (!tutorGrid) {
        return;
    }


    /* Show all tutors initially */

    renderTutors(tutors);


    /* Search button */

    const searchButton =
        document.getElementById(
            "searchTutorsButton"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            filterTutors
        );

    }


    /* Live search */

    const searchInput =
        document.getElementById(
            "tutorSearch"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterTutors
        );

    }


    /* Filters */

    const filterIds = [

        "subjectFilter",
        "levelFilter",
        "ratingFilter",
        "priceFilter"

    ];


    filterIds.forEach(
        function (id) {

            const filter =
                document.getElementById(id);


            if (filter) {

                filter.addEventListener(
                    "change",
                    filterTutors
                );

            }

        }
    );

}


/* =========================================
   PAGE START
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeLogin();

        initializeSignup();

        initializeRoleSelection();

        initializeUserNames();

        initializeLogoutButtons();

        initializeTutorPage();

    }
);
