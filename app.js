/* =========================================================
   TUTORLINK APP.JS
   Prototype application logic
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
        reviews: 128,
        experience: "4 years",
        sessions: 420,
        price: 300,
        languages: ["English", "Hindi"],
        teachingStyle: "Concept-focused and patient",
        availability: ["Mon", "Wed", "Fri"],
        qualifications: "B.Sc. Mathematics",
        students: 86,
        verified: true,
        badge: "Top Rated",
        avatar: "AS",
        bio: "Helps school students build strong mathematical foundations through simple explanations and practice."
    },

    {
        id: "ishita-rao",
        name: "Ishita Rao",
        subject: "Mathematics",
        level: "College",
        rating: 4.8,
        reviews: 94,
        experience: "3 years",
        sessions: 285,
        price: 260,
        languages: ["English", "Hindi"],
        teachingStyle: "Practical and problem-solving based",
        availability: ["Tue", "Thu", "Sat"],
        qualifications: "B.Sc. Mathematics",
        students: 61,
        verified: true,
        badge: "Verified Tutor",
        avatar: "IR",
        bio: "Focuses on college mathematics, problem solving and exam preparation."
    },

    {
        id: "aarav-mehta",
        name: "Aarav Mehta",
        subject: "Physics",
        level: "School",
        rating: 4.8,
        reviews: 101,
        experience: "3 years",
        sessions: 310,
        price: 280,
        languages: ["English", "Hindi"],
        teachingStyle: "Visual and example-based",
        availability: ["Mon", "Tue", "Thu"],
        qualifications: "B.Sc. Physics",
        students: 70,
        verified: true,
        badge: "Experienced Tutor",
        avatar: "AM",
        bio: "Makes physics easier through real-world examples, diagrams and step-by-step problem solving."
    },

    {
        id: "riya-deshmukh",
        name: "Riya Deshmukh",
        subject: "English",
        level: "School",
        rating: 4.9,
        reviews: 116,
        experience: "5 years",
        sessions: 380,
        price: 250,
        languages: ["English", "Hindi", "Marathi"],
        teachingStyle: "Interactive and communication-focused",
        availability: ["Mon", "Wed", "Sat"],
        qualifications: "B.A. English Literature",
        students: 79,
        verified: true,
        badge: "Top Rated",
        avatar: "RD",
        bio: "Helps students improve grammar, writing, vocabulary and communication skills."
    },

    {
        id: "kabir-shah",
        name: "Kabir Shah",
        subject: "Computer Science",
        level: "College",
        rating: 4.8,
        reviews: 88,
        experience: "3 years",
        sessions: 260,
        price: 300,
        languages: ["English", "Hindi"],
        teachingStyle: "Project-based and practical",
        availability: ["Tue", "Wed", "Fri"],
        qualifications: "B.Tech Computer Science",
        students: 58,
        verified: true,
        badge: "Verified Tutor",
        avatar: "KS",
        bio: "Teaches programming and computer science through practical projects and coding exercises."
    },

    {
        id: "dev-malhotra",
        name: "Dev Malhotra",
        subject: "Computer Science",
        level: "College",
        rating: 4.7,
        reviews: 73,
        experience: "4 years",
        sessions: 240,
        price: 250,
        languages: ["English", "Hindi"],
        teachingStyle: "Structured and beginner-friendly",
        availability: ["Mon", "Thu", "Sat"],
        qualifications: "BCA, Software Development",
        students: 51,
        verified: true,
        badge: "Experienced Tutor",
        avatar: "DM",
        bio: "Works with beginners and college students learning programming, databases and web development."
    },

    {
        id: "meera-iyer",
        name: "Meera Iyer",
        subject: "Economics",
        level: "College",
        rating: 4.7,
        reviews: 69,
        experience: "6 years",
        sessions: 330,
        price: 300,
        languages: ["English", "Hindi"],
        teachingStyle: "Discussion and case-study based",
        availability: ["Tue", "Thu", "Sun"],
        qualifications: "M.A. Economics",
        students: 63,
        verified: true,
        badge: "Experienced Tutor",
        avatar: "MI",
        bio: "Explains economics using real-world examples, case studies and clear visual concepts."
    },

    {
        id: "vihaan-patel",
        name: "Vihaan Patel",
        subject: "Business Studies",
        level: "College",
        rating: 4.9,
        reviews: 91,
        experience: "4 years",
        sessions: 295,
        price: 275,
        languages: ["English", "Hindi", "Gujarati"],
        teachingStyle: "Practical and business-focused",
        availability: ["Mon", "Wed", "Fri"],
        qualifications: "BBA, MBA",
        students: 67,
        verified: true,
        badge: "Top Rated",
        avatar: "VP",
        bio: "Connects business concepts with real companies, examples and practical situations."
    },

    {
        id: "sana-khan",
        name: "Sana Khan",
        subject: "Hindi",
        level: "School",
        rating: 4.8,
        reviews: 82,
        experience: "5 years",
        sessions: 315,
        price: 220,
        languages: ["Hindi", "English", "Urdu"],
        teachingStyle: "Storytelling and discussion-based",
        availability: ["Tue", "Thu", "Sat"],
        qualifications: "B.A. Hindi",
        students: 72,
        verified: true,
        badge: "Verified Tutor",
        avatar: "SK",
        bio: "Uses stories, conversations and writing exercises to make Hindi engaging and easy to understand."
    },

    {
        id: "arjun-nair",
        name: "Arjun Nair",
        subject: "Python",
        level: "College",
        rating: 4.9,
        reviews: 97,
        experience: "3 years",
        sessions: 275,
        price: 300,
        languages: ["English", "Hindi", "Malayalam"],
        teachingStyle: "Hands-on and project-based",
        availability: ["Mon", "Wed", "Fri", "Sat"],
        qualifications: "BCA, Python Developer",
        students: 64,
        verified: true,
        badge: "Top Rated",
        avatar: "AN",
        bio: "Teaches Python from fundamentals to practical projects with a focus on learning by building."
    },

    {
        id: "priya-menon",
        name: "Priya Menon",
        subject: "Python",
        level: "College",
        rating: 4.8,
        reviews: 84,
        experience: "4 years",
        sessions: 245,
        price: 280,
        languages: ["English", "Hindi", "Malayalam"],
        teachingStyle: "Beginner-friendly and practical",
        availability: ["Tue", "Thu", "Sat"],
        qualifications: "B.Sc. Computer Science",
        students: 57,
        verified: true,
        badge: "Verified Tutor",
        avatar: "PM",
        bio: "Specializes in helping college beginners understand Python through small projects and coding exercises."
    },

    {
        id: "aditya-verma",
        name: "Aditya Verma",
        subject: "Python",
        level: "College",
        rating: 4.7,
        reviews: 61,
        experience: "3 years",
        sessions: 190,
        price: 250,
        languages: ["English", "Hindi"],
        teachingStyle: "Step-by-step and project-based",
        availability: ["Mon", "Wed", "Sun"],
        qualifications: "B.Tech Computer Science",
        students: 45,
        verified: true,
        badge: "Experienced Tutor",
        avatar: "AV",
        bio: "Helps college students learn Python programming, problem solving and basic automation."
    },

    {
        id: "neha-joshi",
        name: "Neha Joshi",
        subject: "Accounting",
        level: "College",
        rating: 4.8,
        reviews: 76,
        experience: "4 years",
        sessions: 225,
        price: 270,
        languages: ["English", "Hindi"],
        teachingStyle: "Step-by-step and practice-based",
        availability: ["Tue", "Thu", "Fri"],
        qualifications: "B.Com, CA Foundation",
        students: 54,
        verified: true,
        badge: "Verified Tutor",
        avatar: "NJ",
        bio: "Breaks accounting concepts into simple steps with plenty of numerical practice."
    },

    {
        id: "rohan-kapoor",
        name: "Rohan Kapoor",
        subject: "Marketing",
        level: "College",
        rating: 4.7,
        reviews: 58,
        experience: "3 years",
        sessions: 175,
        price: 280,
        languages: ["English", "Hindi"],
        teachingStyle: "Case-study and discussion-based",
        availability: ["Mon", "Wed", "Sat"],
        qualifications: "BBA, Digital Marketing",
        students: 42,
        verified: true,
        badge: "Community Tutor",
        avatar: "RK",
        bio: "Uses marketing campaigns, brand examples and case studies to explain marketing concepts."
    }

];


/* =========================================================
   BASIC STORAGE HELPERS
   ========================================================= */

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

    localStorage.removeItem(
        PENDING_BOOKING_KEY
    );

}


/* =========================================================
   ROLE REDIRECTION
   ========================================================= */

function redirectByRole(user) {

    if (!user) {

        window.location.href =
            "choose-role.html?v=1023";

        return;

    }


    const pending =
        getPendingBooking();


    if (
        pending &&
        user.role === "student" &&
        pending.tutorId
    ) {

        clearPendingBooking();

        window.location.href =
            "booking.html?id=" +
            encodeURIComponent(pending.tutorId) +
            "&v=1023";

        return;

    }


    if (user.role === "student") {

        window.location.href =
            "student-dashboard.html?v=1023";

        return;

    }


    if (user.role === "tutor") {

        window.location.href =
            "tutor-dashboard.html?v=1023";

        return;

    }


    window.location.href =
        "choose-role.html?v=1023";

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    localStorage.removeItem(
        CURRENT_USER_KEY
    );

    window.location.href =
        "login.html?v=1023";

}


/* =========================================================
   BOOK SESSION
   ========================================================= */

function handleBookSession(tutorId) {

    const currentUser =
        getCurrentUser();


    if (
        currentUser &&
        currentUser.role === "student"
    ) {

        window.location.href =
            "booking.html?id=" +
            encodeURIComponent(tutorId) +
            "&v=1023";

        return;

    }


    if (
        currentUser &&
        currentUser.role === "tutor"
    ) {

        alert(
            "Tutor accounts cannot book tutoring sessions. Please use a student account."
        );

        return;

    }


    savePendingBooking(tutorId);

    window.location.href =
        "login.html?role=student&redirect=booking&id=" +
        encodeURIComponent(tutorId) +
        "&v=1023";

}


/* =========================================================
   SAVE TUTOR
   ========================================================= */

function toggleSaveTutor(tutorId, button) {

    let saved =
        getSavedTutors();


    if (saved.includes(tutorId)) {

        saved =
            saved.filter(
                id => id !== tutorId
            );


        if (button) {

            button.classList.remove(
                "saved"
            );

            button.innerHTML = "♡";

        }

    } else {

        saved.push(tutorId);


        if (button) {

            button.classList.add(
                "saved"
            );

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

    const saved =
        getSavedTutors()
            .includes(tutor.id);


    const matchHTML =
        matchReason
            ? `
                <div class="tutor-match-reason">

                    <strong>
                        Why this tutor matches
                    </strong>

                    <span>
                        ${matchReason}
                    </span>

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
                            ? `
                                <span class="verified-badge">
                                    ✓ Verified
                                </span>
                            `
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
                        💼 ${tutor.experience}
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
                        href="tutor-profile.html?id=${encodeURIComponent(tutor.id)}&v=1023"
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

function renderTutors(
    tutors = TUTORS
) {

    const grid =
        document.getElementById(
            "tutorGrid"
        );

    const empty =
        document.getElementById(
            "emptyTutors"
        );

    const count =
        document.getElementById(
            "tutorResultCount"
        );


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

            empty.style.display =
                "block";

        }

        return;

    }


    if (empty) {

        empty.style.display =
            "none";

    }


    grid.innerHTML =
        tutors
            .map(
                tutor =>
                    createTutorCard(tutor)
            )
            .join("");

}


/* =========================================================
   NORMAL SEARCH + FILTER
   ========================================================= */

function filterTutors() {

    const searchInput =
        document.getElementById(
            "tutorSearch"
        );

    const subjectFilter =
        document.getElementById(
            "subjectFilter"
        );

    const levelFilter =
        document.getElementById(
            "levelFilter"
        );

    const ratingFilter =
        document.getElementById(
            "ratingFilter"
        );

    const priceFilter =
        document.getElementById(
            "priceFilter"
        );


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
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


    const results =
        TUTORS.filter(tutor => {

            const matchesSearch =
                !search ||
                tutor.name
                    .toLowerCase()
                    .includes(search) ||
                tutor.subject
                    .toLowerCase()
                    .includes(search) ||
                tutor.bio
                    .toLowerCase()
                    .includes(search);


            const matchesSubject =
                !subject ||
                tutor.subject === subject;


            const matchesLevel =
                !level ||
                tutor.level === level;


            const matchesRating =
                !rating ||
                tutor.rating >= Number(rating);


            let matchesPrice =
                true;


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
   Recommends 2–3 relevant tutors
   ========================================================= */

function getTutorMatchRecommendations() {

    const subjectFilter =
        document.getElementById(
            "subjectFilter"
        );

    const levelFilter =
        document.getElementById(
            "levelFilter"
        );

    const priceFilter =
        document.getElementById(
            "priceFilter"
        );


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
       SUBJECT IS A HARD REQUIREMENT.

       If the student selects a subject,
       only tutors teaching that subject
       can be recommended.
    */

    let candidates =
        TUTORS.filter(tutor => {

            if (!subject) {
                return true;
            }

            return (
                tutor.subject
                    .toLowerCase() ===
                subject.toLowerCase()
            );

        });


    /*
       Calculate match score.
    */

    candidates =
        candidates.map(tutor => {

            let score = 0;

            const reasons = [];


            /*
               Subject match
            */

            if (subject) {

                score += 50;

                reasons.push(
                    `teaches ${subject}`
                );

            }


            /*
               Level match
            */

            if (
                level &&
                tutor.level
                    .toLowerCase() ===
                level.toLowerCase()
            ) {

                score += 30;

                reasons.push(
                    `${level}-level tutor`
                );

            }


            /*
               Price match
            */

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
               Rating bonus
            */

            score +=
                tutor.rating * 3;


            if (tutor.rating >= 4.8) {

                reasons.push(
                    "highly rated"
                );

            }


            /*
               Verification bonus
            */

            if (tutor.verified) {

                score += 3;

                reasons.push(
                    "verified"
                );

            }


            return {
                tutor: tutor,
                score: score,
                reasons: reasons
            };

        });


    /*
       Highest score first.
    */

    candidates.sort(
        (a, b) =>
            b.score - a.score
    );


    /*
       Maximum 3 recommendations.

       Because subject filtering happens
       BEFORE scoring, unrelated subjects
       can NEVER appear here.
    */

    return candidates.slice(0, 3);

}


/* =========================================================
   RENDER TUTORMATCH RESULTS
   ========================================================= */

function renderTutorMatch() {

    const grid =
        document.getElementById(
            "tutorGrid"
        );

    const empty =
        document.getElementById(
            "emptyTutors"
        );

    const count =
        document.getElementById(
            "tutorResultCount"
        );


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

        empty.style.display =
            "none";

    }


    if (count) {

        count.textContent =
            `${recommendations.length} recommended tutors`;

    }


    grid.innerHTML =
        recommendations
            .map(item => {

                let reason =
                    item.reasons
                        .slice(0, 3)
                        .join(" • ");


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
        document.getElementById(
            "loginForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document
                    .getElementById(
                        "loginEmail"
                    )
                    ?.value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById(
                        "loginPassword"
                    )
                    ?.value;


            const message =
                document.getElementById(
                    "loginMessage"
                );


            const users =
                getUsers();


            const user =
                users.find(
                    item =>
                        item.email
                            .toLowerCase() ===
                        email &&
                        item.password ===
                        password
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
                () =>
                    redirectByRole(user),
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
        document.getElementById(
            "signupForm"
        );


    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "signupName"
                    )
                    ?.value
                    .trim();


            const email =
                document
                    .getElementById(
                        "signupEmail"
                    )
                    ?.value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById(
                        "signupPassword"
                    )
                    ?.value;


            const role =
                document
                    .getElementById(
                        "signupRole"
                    )
                    ?.value;


            const message =
                document.getElementById(
                    "signupMessage"
                );


            const users =
                getUsers();


            const existing =
                users.find(
                    user =>
                        user.email
                            .toLowerCase() ===
                        email
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

                name:
                    name,

                email:
                    email,

                password:
                    password,

                role:
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
                () =>
                    redirectByRole(newUser),
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
        document.getElementById(
            "studentRoleButton"
        );

    const tutorButton =
        document.getElementById(
            "tutorRoleButton"
        );


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
                user.name ||
                "Learner";

        }
    );


    const firstNameElements =
        document.querySelectorAll(
            "[data-user-first-name]"
        );


    firstNameElements.forEach(
        element => {

            element.textContent =
                (
                    user.name ||
                    "Learner"
                )
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
        document.getElementById(
            "tutorGrid"
        );


    if (!grid) {
        return;
    }


    const search =
        document.getElementById(
            "tutorSearch"
        );


    const searchButton =
        document.getElementById(
            "searchTutorsButton"
        );


    const tutorMatchButton =
        document.getElementById(
            "tutorMatchButton"
        );


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
                document.getElementById(
                    id
                );


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
   UPDATE NAVBAR FOR LOGGED-IN USER
   ========================================================= */

function updateNavbarForUser() {

    const user = getCurrentUser();

    const authLinks =
        document.querySelector(".nav-actions");

    if (!authLinks) {
        return;
    }

    if (user) {

        authLinks.innerHTML = `
            <button
                type="button"
                class="nav-login"
                onclick="logout()"
            >
                Log Out
            </button>
        `;

    } else {

        authLinks.innerHTML = `
            <a
                href="login.html"
                class="nav-login"
            >
                Log In
            </a>

            <a
                href="signup.html"
                class="nav-signup"
            >
                Sign Up
            </a>
        `;

    }

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

        updateNavbarForUser();

    }
);
