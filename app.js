/* =========================================================
   TUTORLINK APP.JS
   Main website logic
   ========================================================= */


/* =========================================================
   STORAGE KEYS
   ========================================================= */

const USERS_KEY = "tutorlink_users";
const CURRENT_USER_KEY = "tutorlink_current_user";
const SAVED_TUTORS_KEY = "tutorlink_saved_tutors";
const PENDING_BOOKING_KEY = "tutorlink_pending_booking";


/* =========================================================
   DEMO TUTORS
   Fictional prototype data
   ========================================================= */

const TUTORS = [

    {
        id: "ananya-sharma",
        name: "Ananya Sharma",
        subject: "Mathematics",
        level: "School",
        rating: 4.9,
        reviews: 124,
        experience: 4,
        sessions: 386,
        price: 300,
        languages: ["English", "Hindi"],
        teachingStyle: "Concept-focused and interactive",
        availability: ["Monday", "Wednesday", "Friday"],
        qualifications: "B.Sc. Mathematics",
        students: 86,
        verified: true,
        badge: "Top Rated",
        avatar: "AS",
        bio: "Helps students build strong mathematical foundations through simple explanations, examples and guided practice."
    },

    {
        id: "aarav-mehta",
        name: "Aarav Mehta",
        subject: "Physics",
        level: "School",
        rating: 4.8,
        reviews: 98,
        experience: 3,
        sessions: 274,
        price: 280,
        languages: ["English", "Hindi"],
        teachingStyle: "Visual and problem-solving based",
        availability: ["Tuesday", "Thursday", "Saturday"],
        qualifications: "B.Sc. Physics",
        students: 61,
        verified: true,
        badge: "Verified Tutor",
        avatar: "AM",
        bio: "Makes difficult physics concepts easier using visual explanations, real-world examples and practice questions."
    },

    {
        id: "riya-deshmukh",
        name: "Riya Deshmukh",
        subject: "English",
        level: "School",
        rating: 4.9,
        reviews: 143,
        experience: 5,
        sessions: 421,
        price: 250,
        languages: ["English", "Hindi", "Marathi"],
        teachingStyle: "Conversational and activity-based",
        availability: ["Monday", "Tuesday", "Thursday"],
        qualifications: "B.A. English Literature",
        students: 104,
        verified: true,
        badge: "Top Rated",
        avatar: "RD",
        bio: "Focuses on communication, grammar, writing and confidence-building through practical activities."
    },

    {
        id: "kabir-shah",
        name: "Kabir Shah",
        subject: "Computer Science",
        level: "College",
        rating: 4.8,
        reviews: 117,
        experience: 3,
        sessions: 312,
        price: 300,
        languages: ["English", "Hindi"],
        teachingStyle: "Hands-on and project-based",
        availability: ["Monday", "Wednesday", "Saturday"],
        qualifications: "B.Tech. Computer Science",
        students: 73,
        verified: true,
        badge: "Experienced Tutor",
        avatar: "KS",
        bio: "Teaches programming and computer science through practical examples, coding exercises and mini projects."
    },

    {
        id: "meera-iyer",
        name: "Meera Iyer",
        subject: "Economics",
        level: "College",
        rating: 4.7,
        reviews: 89,
        experience: 6,
        sessions: 348,
        price: 300,
        languages: ["English", "Hindi"],
        teachingStyle: "Discussion and case-study based",
        availability: ["Tuesday", "Thursday", "Friday"],
        qualifications: "M.A. Economics",
        students: 68,
        verified: true,
        badge: "Experienced Tutor",
        avatar: "MI",
        bio: "Connects economics theory with current examples, business cases and easy-to-understand explanations."
    },

    {
        id: "vihaan-patel",
        name: "Vihaan Patel",
        subject: "Business Studies",
        level: "College",
        rating: 4.9,
        reviews: 102,
        experience: 4,
        sessions: 295,
        price: 275,
        languages: ["English", "Hindi", "Gujarati"],
        teachingStyle: "Practical and example-driven",
        availability: ["Monday", "Thursday", "Saturday"],
        qualifications: "BBA",
        students: 79,
        verified: true,
        badge: "Top Rated",
        avatar: "VP",
        bio: "Uses real business examples and practical activities to make management and business concepts easier."
    },

    {
        id: "sana-khan",
        name: "Sana Khan",
        subject: "Hindi",
        level: "School",
        rating: 4.8,
        reviews: 76,
        experience: 5,
        sessions: 251,
        price: 220,
        languages: ["Hindi", "English"],
        teachingStyle: "Storytelling and practice-based",
        availability: ["Monday", "Wednesday", "Friday"],
        qualifications: "B.A. Hindi",
        students: 57,
        verified: true,
        badge: "Verified Tutor",
        avatar: "SK",
        bio: "Uses stories, conversations and writing practice to make Hindi engaging and easy to remember."
    },

    {
        id: "arjun-nair",
        name: "Arjun Nair",
        subject: "Python",
        level: "College",
        rating: 4.9,
        reviews: 135,
        experience: 3,
        sessions: 364,
        price: 300,
        languages: ["English", "Hindi", "Malayalam"],
        teachingStyle: "Hands-on coding",
        availability: ["Tuesday", "Wednesday", "Saturday"],
        qualifications: "B.Sc. Computer Science",
        students: 91,
        verified: true,
        badge: "Top Rated",
        avatar: "AN",
        bio: "Helps college learners understand Python through coding exercises, debugging and small projects."
    },

    {
        id: "ishita-rao",
        name: "Ishita Rao",
        subject: "Mathematics",
        level: "College",
        rating: 4.8,
        reviews: 91,
        experience: 3,
        sessions: 267,
        price: 260,
        languages: ["English", "Hindi"],
        teachingStyle: "Step-by-step and practice-focused",
        availability: ["Monday", "Tuesday", "Friday"],
        qualifications: "M.Sc. Mathematics",
        students: 63,
        verified: true,
        badge: "Verified Tutor",
        avatar: "IR",
        bio: "Supports college students with clear step-by-step explanations and targeted problem solving."
    },

    {
        id: "dev-malhotra",
        name: "Dev Malhotra",
        subject: "Computer Science",
        level: "College",
        rating: 4.7,
        reviews: 84,
        experience: 4,
        sessions: 289,
        price: 250,
        languages: ["English", "Hindi"],
        teachingStyle: "Project and practice based",
        availability: ["Monday", "Thursday", "Saturday"],
        qualifications: "BCA",
        students: 70,
        verified: true,
        badge: "Verified Tutor",
        avatar: "DM",
        bio: "Focuses on programming fundamentals, web development and practical college projects."
    },

    {
        id: "neha-joshi",
        name: "Neha Joshi",
        subject: "Accounting",
        level: "College",
        rating: 4.8,
        reviews: 72,
        experience: 4,
        sessions: 230,
        price: 270,
        languages: ["English", "Hindi", "Marathi"],
        teachingStyle: "Practice and problem-solving",
        availability: ["Tuesday", "Thursday", "Sunday"],
        qualifications: "B.Com.",
        students: 54,
        verified: true,
        badge: "Experienced Tutor",
        avatar: "NJ",
        bio: "Helps commerce students understand accounting concepts through worked examples and practice."
    },

    {
        id: "rohan-kapoor",
        name: "Rohan Kapoor",
        subject: "Marketing",
        level: "College",
        rating: 4.7,
        reviews: 65,
        experience: 3,
        sessions: 198,
        price: 280,
        languages: ["English", "Hindi"],
        teachingStyle: "Case-study and discussion based",
        availability: ["Wednesday", "Friday", "Sunday"],
        qualifications: "MBA Marketing",
        students: 48,
        verified: true,
        badge: "Verified Tutor",
        avatar: "RK",
        bio: "Uses brand examples, campaigns and real business cases to teach marketing concepts."
    }

];


/* =========================================================
   BASIC STORAGE HELPERS
   ========================================================= */

function getUsers() {

    try {
        return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
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


function getSavedTutors() {

    try {
        return JSON.parse(
            localStorage.getItem(SAVED_TUTORS_KEY)
        ) || [];
    } catch (error) {
        return [];
    }

}


function saveSavedTutors(tutors) {

    localStorage.setItem(
        SAVED_TUTORS_KEY,
        JSON.stringify(tutors)
    );

}


/* =========================================================
   PENDING BOOKING
   ========================================================= */

function savePendingBooking(tutorId) {

    localStorage.setItem(
        PENDING_BOOKING_KEY,
        JSON.stringify({
            tutorId: tutorId,
            createdAt: Date.now()
        })
    );

}


function getPendingBooking() {

    try {

        return JSON.parse(
            localStorage.getItem(PENDING_BOOKING_KEY)
        );

    } catch (error) {

        return null;

    }

}


function clearPendingBooking() {

    localStorage.removeItem(PENDING_BOOKING_KEY);

}


/* =========================================================
   ROLE REDIRECTION
   ========================================================= */

function redirectByRole(user) {

    if (!user) {

        window.location.href = "choose-role.html?v=1020";
        return;

    }


    /*
       If the student was trying to book a tutor before
       logging in, continue to that booking after login.
    */

    const pending = getPendingBooking();

    if (
        pending &&
        user.role === "student" &&
        pending.tutorId
    ) {

        clearPendingBooking();

        window.location.href =
            "booking.html?id=" +
            encodeURIComponent(pending.tutorId) +
            "&v=1020";

        return;

    }


    if (user.role === "student") {

        window.location.href =
            "student-dashboard.html?v=1020";

        return;

    }


    if (user.role === "tutor") {

        window.location.href =
            "tutor-dashboard.html?v=1020";

        return;

    }


    window.location.href =
        "choose-role.html?v=1020";

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    localStorage.removeItem(CURRENT_USER_KEY);

    window.location.href = "login.html?v=1020";

}


/* =========================================================
   BOOK SESSION
   ========================================================= */

function handleBookSession(tutorId) {

    const currentUser = getCurrentUser();


    /*
       Student already logged in:
       go directly to booking.
    */

    if (
        currentUser &&
        currentUser.role === "student"
    ) {

        window.location.href =
            "booking.html?id=" +
            encodeURIComponent(tutorId) +
            "&v=1020";

        return;

    }


    /*
       Tutor trying to book:
       send them to the role-appropriate place.
    */

    if (
        currentUser &&
        currentUser.role === "tutor"
    ) {

        alert(
            "Tutor accounts cannot book tutoring sessions. Please use a student account."
        );

        return;

    }


    /*
       Nobody logged in:
       remember the tutor and ask them to log in.
    */

    savePendingBooking(tutorId);

    window.location.href =
        "login.html?role=student&redirect=booking&id=" +
        encodeURIComponent(tutorId) +
        "&v=1020";

}


/* =========================================================
   SAVE TUTOR
   ========================================================= */

function toggleSaveTutor(tutorId, button) {

    let saved = getSavedTutors();

    if (saved.includes(tutorId)) {

        saved = saved.filter(
            id => id !== tutorId
        );

        if (button) {

            button.classList.remove("saved");
            button.innerHTML = "♡";

        }

    } else {

        saved.push(tutorId);

        if (button) {

            button.classList.add("saved");
            button.innerHTML = "♥";

        }

    }

    saveSavedTutors(saved);

}


/* =========================================================
   TUTOR CARD
   ========================================================= */

function createTutorCard(
    tutor,
    matchReason = ""
) {

    const saved = getSavedTutors()
        .includes(tutor.id);

    const matchHTML = matchReason
        ? `
            <div class="tutor-match-reason">
                <strong>Why this tutor matches</strong>
                <span>${matchReason}</span>
            </div>
        `
        : "";


    return `
        <article class="tutor-card">

            <div class="tutor-card-top">

                <div class="tutor-avatar">
                    ${tutor.avatar}
                </div>

                <button
                    type="button"
                    class="save-tutor ${saved ? "saved" : ""}"
                    onclick="toggleSaveTutor('${tutor.id}', this)"
                    aria-label="Save ${tutor.name}"
                >
                    ${saved ? "♥" : "♡"}
                </button>

            </div>


            <div class="tutor-card-content">

                <div class="tutor-name-row">

                    <h3>
                        ${tutor.name}
                    </h3>

                    ${
                        tutor.verified
                            ? `<span class="verified-badge">✓ Verified</span>`
                            : ""
                    }

                </div>


                <p class="tutor-subject">
                    ${tutor.subject}
                </p>


                <p class="tutor-bio">
                    ${tutor.bio}
                </p>


                <div class="tutor-meta">

                    <span>
                        🎓 ${tutor.level}
                    </span>

                    <span>
                        💼 ${tutor.experience} yrs
                    </span>

                    <span>
                        👥 ${tutor.students} students
                    </span>

                </div>


                <div class="tutor-rating">

                    <strong>
                        ⭐ ${tutor.rating}
                    </strong>

                    <span>
                        (${tutor.reviews} reviews)
                    </span>

                </div>


                <div class="tutor-card-bottom">

                    <div class="tutor-price">

                        <strong>
                            ₹${tutor.price}
                        </strong>

                        <span>
                            / hour
                        </span>

                    </div>

                    <span class="tutor-badge">
                        ${tutor.badge}
                    </span>

                </div>


                ${matchHTML}


                <div class="tutor-card-actions">

                    <a
                        href="tutor-profile.html?id=${encodeURIComponent(tutor.id)}&v=1020"
                        class="btn-secondary"
                    >
                        View Profile
                    </a>

                    <button
                        type="button"
                        class="btn-primary"
                        onclick="handleBookSession('${tutor.id}')"
                    >
                        Book Session
                    </button>

                </div>

            </div>

        </article>
    `;

}


/* =========================================================
   RENDER TUTORS
   ========================================================= */

function renderTutors(tutors = TUTORS) {

    const grid =
        document.getElementById("tutorGrid");

    const empty =
        document.getElementById("emptyTutors");

    const count =
        document.getElementById("tutorResultCount");


    if (!grid) {
        return;
    }


    if (count) {

        count.textContent =
            `${tutors.length} tutor${tutors.length === 1 ? "" : "s"} found`;

    }


    if (!tutors.length) {

        grid.innerHTML = "";

        if (empty) {
            empty.style.display = "block";
        }

        return;

    }


    if (empty) {
        empty.style.display = "none";
    }


    grid.innerHTML = tutors
        .map(tutor => createTutorCard(tutor))
        .join("");

}


/* =========================================================
   NORMAL SEARCH + FILTER
   ========================================================= */

function filterTutors() {

    const searchInput =
        document.getElementById("tutorSearch");

    const subjectFilter =
        document.getElementById("subjectFilter");

    const levelFilter =
        document.getElementById("levelFilter");

    const ratingFilter =
        document.getElementById("ratingFilter");

    const priceFilter =
        document.getElementById("priceFilter");


    const search =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const subject =
        subjectFilter
            ? subjectFilter.value
            : "";


    const level =
        levelFilter
            ? levelFilter.value
            : "";


    const rating =
        ratingFilter
            ? ratingFilter.value
            : "";


    const price =
        priceFilter
            ? priceFilter.value
            : "";


    const results = TUTORS.filter(tutor => {

        const matchesSearch =
            !search ||
            tutor.name.toLowerCase().includes(search) ||
            tutor.subject.toLowerCase().includes(search) ||
            tutor.bio.toLowerCase().includes(search);


        const matchesSubject =
            !subject ||
            tutor.subject === subject;


        const matchesLevel =
            !level ||
            tutor.level === level;


        const matchesRating =
            !rating ||
            tutor.rating >= Number(rating);


        let matchesPrice = true;


        if (price === "under-250") {

            matchesPrice =
                tutor.price < 250;

        } else if (price === "250-300") {

            matchesPrice =
                tutor.price >= 250 &&
                tutor.price <= 300;

        } else if (price === "300-plus") {

            matchesPrice =
                tutor.price >= 300;

        }


        return (
            matchesSearch &&
            matchesSubject &&
            matchesLevel &&
            matchesRating &&
            matchesPrice
        );

    });


    renderTutors(results);

}


/* =========================================================
   TUTORMATCH
   Recommends 2–3 tutors
   ========================================================= */

function getTutorMatchRecommendations() {

    const subjectFilter =
        document.getElementById("subjectFilter");

    const levelFilter =
        document.getElementById("levelFilter");

    const priceFilter =
        document.getElementById("priceFilter");


    const subject =
        subjectFilter
            ? subjectFilter.value
            : "";


    const level =
        levelFilter
            ? levelFilter.value
            : "";


    const price =
        priceFilter
            ? priceFilter.value
            : "";


    /*
       If nothing has been selected,
       show a useful mixed recommendation.
    */

    let candidates = TUTORS.map(tutor => {

        let score = 0;
        const reasons = [];


        if (subject) {

            if (tutor.subject === subject) {

                score += 50;

                reasons.push(
                    `teaches ${subject}`
                );

            }

        }


        if (level) {

            if (tutor.level === level) {

                score += 30;

                reasons.push(
                    `${level}-level tutor`
                );

            }

        }


        if (price === "under-250") {

            if (tutor.price < 250) {

                score += 15;

                reasons.push(
                    "fits your budget"
                );

            }

        }


        if (price === "250-300") {

            if (
                tutor.price >= 250 &&
                tutor.price <= 300
            ) {

                score += 15;

                reasons.push(
                    "fits your budget"
                );

            }

        }


        if (price === "300-plus") {

            if (tutor.price >= 300) {

                score += 15;

                reasons.push(
                    "fits your budget"
                );

            }

        }


        /*
           Strong tutors get a small quality bonus.
        */

        score += tutor.rating * 3;

        if (tutor.rating >= 4.8) {

            reasons.push(
                "highly rated"
            );

        }


        if (tutor.verified) {

            score += 3;

            reasons.push(
                "verified"
            );

        }


        return {
            tutor,
            score,
            reasons
        };

    });


    candidates.sort(
        (a, b) => b.score - a.score
    );


    /*
       Prefer exact matches first.
       Then fill to at least 3 recommendations
       when possible.
    */

    let recommendations =
        candidates.slice(0, 3);


    /*
       If a specific subject was selected,
       make sure we prioritize subject matches.
    */

    if (subject) {

        const subjectMatches =
            candidates.filter(
                item =>
                    item.tutor.subject === subject
            );


        if (subjectMatches.length >= 3) {

            recommendations =
                subjectMatches.slice(0, 3);

        } else if (subjectMatches.length > 0) {

            const combined = [
                ...subjectMatches,
                ...candidates.filter(
                    item =>
                        item.tutor.subject !== subject
                )
            ];

            recommendations =
                combined.slice(0, 3);

        }

    }


    return recommendations;

}


/* =========================================================
   RENDER TUTORMATCH RESULTS
   ========================================================= */

function renderTutorMatch() {

    const grid =
        document.getElementById("tutorGrid");

    const empty =
        document.getElementById("emptyTutors");

    const count =
        document.getElementById("tutorResultCount");


    if (!grid) {
        return;
    }


    const recommendations =
        getTutorMatchRecommendations();


    if (!recommendations.length) {

        renderTutors([]);

        return;

    }


    if (empty) {
        empty.style.display = "none";
    }


    if (count) {

        count.textContent =
            `${recommendations.length} recommended tutors`;

    }


    grid.innerHTML =
        recommendations
            .map(item => {

                let reason =
                    item.reasons.slice(0, 3).join(" • ");


                if (!reason) {

                    reason =
                        "Strong overall TutorLink match";

                }


                return createTutorCard(
                    item.tutor,
                    reason
                );

            })
            .join("");

}


/* =========================================================
   LOGIN
   ========================================================= */

function initializeLogin() {

    const form =
        document.getElementById("loginForm");

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    ?.value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("loginPassword")
                    ?.value;


            const message =
                document.getElementById("loginMessage");


            const users =
                getUsers();


            const user =
                users.find(
                    item =>
                        item.email.toLowerCase() === email &&
                        item.password === password
                );


            if (!user) {

                if (message) {

                    message.textContent =
                        "Incorrect email or password.";

                    message.className =
                        "auth-message error";

                }

                return;

            }


            setCurrentUser(user);


            if (message) {

                message.textContent =
                    "Login successful!";

                message.className =
                    "auth-message success";

            }


            setTimeout(
                () => redirectByRole(user),
                250
            );

        }
    );

}


/* =========================================================
   SIGN UP
   ========================================================= */

function initializeSignup() {

    const form =
        document.getElementById("signupForm");

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("signupName")
                    ?.value
                    .trim();


            const email =
                document
                    .getElementById("signupEmail")
                    ?.value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("signupPassword")
                    ?.value;


            const role =
                document
                    .getElementById("signupRole")
                    ?.value;


            const message =
                document.getElementById("signupMessage");


            const users =
                getUsers();


            const existing =
                users.find(
                    user =>
                        user.email.toLowerCase() === email
                );


            if (existing) {

                if (message) {

                    message.textContent =
                        "An account with this email already exists.";

                    message.className =
                        "auth-message error";

                }

                return;

            }


            const newUser = {

                id:
                    "user_" +
                    Date.now(),

                name,
                email,
                password,
                role

            };


            users.push(newUser);

            saveUsers(users);

            setCurrentUser(newUser);


            if (message) {

                message.textContent =
                    "Account created successfully!";

                message.className =
                    "auth-message success";

            }


            setTimeout(
                () => redirectByRole(newUser),
                300
            );

        }
    );

}


/* =========================================================
   ROLE SELECTION
   ========================================================= */

function initializeRoleSelection() {

    const studentButton =
        document.getElementById("studentRoleButton");

    const tutorButton =
        document.getElementById("tutorRoleButton");


    if (studentButton) {

        studentButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "login.html?role=student";

            }
        );

    }


    if (tutorButton) {

        tutorButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "login.html?role=tutor";

            }
        );

    }

}


/* =========================================================
   USER NAME DISPLAY
   ========================================================= */

function initializeUserNames() {

    const user =
        getCurrentUser();


    if (!user) {
        return;
    }


    const nameElements =
        document.querySelectorAll(
            "[data-user-name]"
        );


    nameElements.forEach(
        element => {

            element.textContent =
                user.name || "Learner";

        }
    );


    const firstNameElements =
        document.querySelectorAll(
            "[data-user-first-name]"
        );


    firstNameElements.forEach(
        element => {

            element.textContent =
                (user.name || "Learner")
                    .split(" ")[0];

        }
    );

}


/* =========================================================
   LOGOUT BUTTONS
   ========================================================= */

function initializeLogoutButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-logout]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                logout
            );

        }
    );

}


/* =========================================================
   TUTOR PAGE
   ========================================================= */

function initializeTutorPage() {

    const grid =
        document.getElementById("tutorGrid");

    if (!grid) {
        return;
    }


    const search =
        document.getElementById("tutorSearch");

    const searchButton =
        document.getElementById("searchTutorsButton");

    const tutorMatchButton =
        document.getElementById("tutorMatchButton");

    const filters = [
        "subjectFilter",
        "levelFilter",
        "ratingFilter",
        "priceFilter"
    ];


    renderTutors();


    if (search) {

        search.addEventListener(
            "input",
            filterTutors
        );

    }


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            filterTutors
        );

    }


    filters.forEach(
        id => {

            const element =
                document.getElementById(id);

            if (element) {

                element.addEventListener(
                    "change",
                    filterTutors
                );

            }

        }
    );


    if (tutorMatchButton) {

        tutorMatchButton.addEventListener(
            "click",
            renderTutorMatch
        );

    }

}


/* =========================================================
   TUTOR PROFILE HELPERS
   ========================================================= */

function getTutorFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const tutorId =
        params.get("id");


    if (!tutorId) {
        return null;
    }


    return TUTORS.find(
        tutor =>
            tutor.id === tutorId
    ) || null;

}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        initializeLogin();

        initializeSignup();

        initializeRoleSelection();

        initializeUserNames();

        initializeLogoutButtons();

        initializeTutorPage();

    }
);
