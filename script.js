/* =========================================
   EMAILJS
========================================= */

emailjs.init({
    publicKey: "alap-e62NkCINHw33"
});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuToggle.textContent = "×";
        } else {
            menuToggle.textContent = "☰";
        }
    });

}


/* =========================================
   DROPDOWNS
========================================= */

const aboutDropdownBtn =
    document.getElementById("aboutDropdownBtn");

const projectsDropdownBtn =
    document.getElementById("projectsDropdownBtn");

const aboutDropdown =
    document.getElementById("aboutDropdown");

const projectsDropdown =
    document.getElementById("projectsDropdown");


if (aboutDropdownBtn) {

    aboutDropdownBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        aboutDropdown.classList.toggle("active");

        if (projectsDropdown) {
            projectsDropdown.classList.remove("active");
        }

    });

}


if (projectsDropdownBtn) {

    projectsDropdownBtn.addEventListener("click", (e) => {

        e.stopPropagation();

        projectsDropdown.classList.toggle("active");

        if (aboutDropdown) {
            aboutDropdown.classList.remove("active");
        }

    });

}


/* =========================================
   CLOSE DROPDOWNS
========================================= */

document.addEventListener("click", () => {

    if (aboutDropdown) {
        aboutDropdown.classList.remove("active");
    }

    if (projectsDropdown) {
        projectsDropdown.classList.remove("active");
    }

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navLinks = document.querySelectorAll(
    ".nav-menu a"
);

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});


/* =========================================
   SKILL BAR ANIMATION
========================================= */

const skillProgress =
    document.querySelectorAll(".skill-progress");


const skillObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const width =
                    entry.target.getAttribute("data-width");

                entry.target.style.width = width;

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.3
    }
);


skillProgress.forEach((bar) => {
    skillObserver.observe(bar);
});


/* =========================================
   CONTACT MODAL
========================================= */

const talkBtn =
    document.getElementById("talkBtn");

const contactTalkBtn =
    document.getElementById("contactTalkBtn");

const contactModal =
    document.getElementById("contactModal");

const closeBtn =
    document.getElementById("closeBtn");


function openContactModal() {

    if (contactModal) {

        contactModal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

}


function closeContactModal() {

    if (contactModal) {

        contactModal.classList.remove("active");

        document.body.style.overflow = "";

    }

}


if (talkBtn) {

    talkBtn.addEventListener(
        "click",
        openContactModal
    );

}


if (contactTalkBtn) {

    contactTalkBtn.addEventListener(
        "click",
        openContactModal
    );

}


if (closeBtn) {

    closeBtn.addEventListener(
        "click",
        closeContactModal
    );

}


/* =========================================
   CLICK OUTSIDE MODAL
========================================= */

if (contactModal) {

    contactModal.addEventListener("click", (e) => {

        if (e.target === contactModal) {

            closeContactModal();

        }

    });

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeContactModal();

    }

});


/* =========================================
   EMAILJS CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();


        const submitButton =
            contactForm.querySelector(
                "button[type='submit']"
            );


        const originalText =
            submitButton.innerHTML;


        submitButton.disabled = true;

        submitButton.innerHTML =
            "Sending...";


        emailjs.sendForm(

            "service0722",

            "template_g49s00e",

            contactForm

        )

        .then(() => {

            alert(
                "Message sent successfully! Thank you for reaching out."
            );


            contactForm.reset();


            submitButton.disabled = false;

            submitButton.innerHTML =
                originalText;


            closeContactModal();

        })

        .catch((error) => {

            console.error(
                "EmailJS Error:",
                error
            );


            alert(
                "Sorry, your message could not be sent. Please check your EmailJS template settings and try again."
            );


            submitButton.disabled = false;

            submitButton.innerHTML =
                originalText;

        });

    });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const regularNavLinks =
    document.querySelectorAll(
        ".nav-menu > .nav-link"
    );


const activeObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    regularNavLinks.forEach((link) => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );


sections.forEach((section) => {

    activeObserver.observe(section);

});