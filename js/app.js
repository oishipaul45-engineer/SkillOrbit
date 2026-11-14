/* =========================================================
   SKILLORBIT — INTERACTIVE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuToggle.textContent =
                navLinks.classList.contains("active")
                    ? "✕"
                    : "☰";

        });

        document.querySelectorAll(".nav-links a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";

            });

        });

    }


    /* =====================================================
       LOGIN MODAL
       ===================================================== */

    const loginModal = document.getElementById("login");
    const loginForm = document.getElementById("loginForm");
    const closeModal = document.querySelector(".close-modal");
    const modalOverlay = document.querySelector(".modal-overlay");

    document.querySelectorAll('a[href="#login"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            if (loginModal) {

                loginModal.classList.add("active");
                document.body.style.overflow = "hidden";

            }

        });

    });


    function closeLoginModal() {

        if (loginModal) {

            loginModal.classList.remove("active");
            document.body.style.overflow = "";

        }

    }


    if (closeModal) {
        closeModal.addEventListener("click", closeLoginModal);
    }


    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeLoginModal);
    }


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeLoginModal();
        }

    });


    /* =====================================================
       LOGIN / SIGN UP SWITCHING
       ===================================================== */

    const loginView = document.getElementById("loginView");
    const signupView = document.getElementById("signupView");

    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");


    if (showSignup) {

        showSignup.addEventListener("click", () => {

            loginView.classList.remove("active");
            signupView.classList.add("active");

        });

    }


    if (showLogin) {

        showLogin.addEventListener("click", () => {

            signupView.classList.remove("active");
            loginView.classList.add("active");

        });

    }


    /* =====================================================
       SHOW / HIDE PASSWORD
       ===================================================== */

    document.querySelectorAll(".toggle-password").forEach((button) => {

        button.addEventListener("click", () => {

            const targetId = button.dataset.target;
            const passwordInput =
                document.getElementById(targetId);

            if (!passwordInput) return;


            if (passwordInput.type === "password") {

                passwordInput.type = "text";
                button.textContent = "Hide";

            } else {

                passwordInput.type = "password";
                button.textContent = "Show";

            }

        });

    });


    /* =====================================================
       FORGOT PASSWORD
       ===================================================== */

    const forgotPassword =
        document.querySelector(".forgot-password");

    if (forgotPassword) {

        forgotPassword.addEventListener("click", async () => {

            const emailInput =
                document.getElementById("loginEmail");

            const email =
                emailInput
                    ? emailInput.value.trim()
                    : "";


            if (!email) {

                alert(
                    "Please enter your email address first."
                );

                if (emailInput) {
                    emailInput.focus();
                }

                return;

            }


            try {

                await auth.sendPasswordResetEmail(email);

                alert(
                    `Password reset email sent to:\n\n${email}`
                );

            } catch (error) {

                console.error(
                    "Password reset error:",
                    error
                );


                if (
                    error.code ===
                    "auth/user-not-found"
                ) {

                    alert(
                        "No account was found with this email address."
                    );

                } else if (
                    error.code ===
                    "auth/invalid-email"
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                } else {

                    alert(
                        "Unable to send password reset email.\n\n" +
                        error.message
                    );

                }

            }

        });

    }


    /* =====================================================
       FIREBASE LOGIN
       ===================================================== */

    if (loginForm) {

        loginForm.addEventListener("submit", async (event) => {

            event.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            if (!email || !password) {

                alert(
                    "Please enter your email and password."
                );

                return;

            }


            try {

                const userCredential =
                    await auth.signInWithEmailAndPassword(
                        email,
                        password
                    );

                const user =
                    userCredential.user;


                alert(
                    `Welcome back to SkillOrbit! 🎉\n\n` +
                    `Logged in as:\n${user.email}`
                );


                loginForm.reset();

                closeLoginModal();

                window.location.href =
                    "dashboard.html";


            } catch (error) {

                console.error(
                    "Login error:",
                    error
                );


                if (
                    error.code ===
                    "auth/user-not-found"
                ) {

                    alert(
                        "No account exists with this email address."
                    );

                } else if (
                    error.code ===
                    "auth/wrong-password"
                ) {

                    alert(
                        "Incorrect password. Please try again."
                    );

                } else if (
                    error.code ===
                    "auth/invalid-credential"
                ) {

                    alert(
                        "Incorrect email or password."
                    );

                } else if (
                    error.code ===
                    "auth/invalid-email"
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                } else {

                    alert(
                        "Unable to log in.\n\n" +
                        error.message
                    );

                }

            }

        });

    }


    /* =====================================================
       FIREBASE SIGN UP
       ===================================================== */

    const signupForm =
        document.getElementById("signupForm");


    if (signupForm) {

        signupForm.addEventListener("submit", async (event) => {

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
                    .trim();

            const password =
                document
                    .getElementById("signupPassword")
                    .value;

            const confirmPassword =
                document
                    .getElementById("confirmPassword")
                    .value;


            /* ---------------------------------------------
               VALIDATION
               --------------------------------------------- */

            if (
                !name ||
                !email ||
                !password ||
                !confirmPassword
            ) {

                alert(
                    "Please fill in all the fields."
                );

                return;

            }


            if (password.length < 6) {

                alert(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            try {

                /* -----------------------------------------
                   CREATE FIREBASE AUTH ACCOUNT
                   ----------------------------------------- */

                const userCredential =
                    await auth.createUserWithEmailAndPassword(
                        email,
                        password
                    );

                const user =
                    userCredential.user;


                /* -----------------------------------------
                   SAVE DISPLAY NAME TO FIREBASE AUTH
                   ----------------------------------------- */

                await user.updateProfile({

                    displayName: name

                });


                /* -----------------------------------------
                   SAVE USER PROFILE TO FIRESTORE

                   IMPORTANT:
                   The document ID is exactly the Firebase
                   Authentication UID.
                   ----------------------------------------- */

                const userRef =
                    db
                        .collection("users")
                        .doc(user.uid);


                await userRef.set({

                    uid: user.uid,

                    name: name,

                    displayName: name,

                    email: email,

                    createdAt:
                        firebase.firestore
                            .FieldValue
                            .serverTimestamp()

                });


                /* -----------------------------------------
                   VERIFY THAT FIRESTORE DOCUMENT EXISTS
                   ----------------------------------------- */

                const savedUser =
                    await userRef.get();


                if (!savedUser.exists) {

                    throw new Error(
                        "Your account was created, " +
                        "but your SkillOrbit profile could not " +
                        "be saved to Firestore."
                    );

                }


                console.log(
                    "SkillOrbit user profile saved:",
                    savedUser.data()
                );


                alert(
                    `Welcome to SkillOrbit, ${name}! 🎉\n\n` +
                    `Your account has been created successfully.`
                );


                signupForm.reset();


                signupView.classList.remove("active");
                loginView.classList.add("active");


            } catch (error) {

                console.error(
                    "Signup error:",
                    error
                );


                if (
                    error.code ===
                    "auth/email-already-in-use"
                ) {

                    alert(
                        "An account with this email already exists."
                    );

                } else if (
                    error.code ===
                    "auth/invalid-email"
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                } else if (
                    error.code ===
                    "auth/weak-password"
                ) {

                    alert(
                        "Please choose a stronger password."
                    );

                } else if (
                    error.code ===
                    "permission-denied"
                ) {

                    alert(
                        "Firebase permission denied.\n\n" +
                        "Please check your Firestore security rules."
                    );

                } else {

                    alert(
                        "Unable to create your account.\n\n" +
                        error.message
                    );

                }

            }

        });

    }


    /* =====================================================
       SMOOTH SCROLLING
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId === "#login"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                const navbarHeight = 75;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({

                    top: targetPosition,
                    behavior: "smooth"

                });

            }

        });

    });


    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const navbar =
        document.querySelector(".navbar");


    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 40) {

            navbar.style.background =
                "rgba(8, 9, 13, 0.92)";

            navbar.style.borderBottomColor =
                "rgba(255, 255, 255, 0.08)";

        } else {

            navbar.style.background =
                "rgba(8, 9, 13, 0.72)";

            navbar.style.borderBottomColor =
                "rgba(255, 255, 255, 0.05)";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar
    );

    updateNavbar();


    /* =====================================================
       INTERSECTION OBSERVER
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".feature-card, .step, .section-intro, .section-heading"
        );


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";


        observer.observe(element);

    });


    /* =====================================================
       FEATURE CARD INTERACTION
       ===================================================== */

    const featureCards =
        document.querySelectorAll(
            ".feature-card"
        );


    featureCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5) * -3;

                const rotateY =
                    ((x / rect.width) - 0.5) * 3;


                card.style.transform =
                    `translateY(-7px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0) rotateX(0) rotateY(0)";

            }
        );

    });


    /* =====================================================
       HERO PARALLAX EFFECT
       ===================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (heroVisual) {

        window.addEventListener(
            "mousemove",
            (event) => {

                const x =
                    (
                        event.clientX /
                        window.innerWidth -
                        0.5
                    ) * 2;


                const y =
                    (
                        event.clientY /
                        window.innerHeight -
                        0.5
                    ) * 2;


                heroVisual.style.transform =
                    `translate(${x * 5}px, ${y * 5}px)`;

            }
        );

    }


    /* =====================================================
       BUTTON RIPPLE EFFECT
       ===================================================== */

    document
        .querySelectorAll(
            ".primary-button, .secondary-button"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                function (event) {

                    const ripple =
                        document.createElement("span");


                    const rect =
                        this.getBoundingClientRect();


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );


                    ripple.style.position =
                        "absolute";

                    ripple.style.width =
                        `${size}px`;

                    ripple.style.height =
                        `${size}px`;


                    ripple.style.left =
                        `${event.clientX - rect.left - size / 2}px`;

                    ripple.style.top =
                        `${event.clientY - rect.top - size / 2}px`;


                    ripple.style.borderRadius =
                        "50%";


                    ripple.style.background =
                        "rgba(255,255,255,0.25)";


                    ripple.style.transform =
                        "scale(0)";


                    ripple.style.pointerEvents =
                        "none";


                    ripple.style.animation =
                        "buttonRipple 0.6s ease-out";


                    this.style.position =
                        "relative";

                    this.style.overflow =
                        "hidden";


                    this.appendChild(ripple);


                    setTimeout(() => {

                        ripple.remove();

                    }, 600);

                }
            );

        });


    /* =====================================================
       CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%cSkillOrbit",
        "color:#a8ff3e;font-size:24px;font-weight:bold;"
    );


    console.log(
        "%cLearn a Skill. Share a Skill. Grow Together.",
        "color:#969baa;font-size:14px;"
    );

});