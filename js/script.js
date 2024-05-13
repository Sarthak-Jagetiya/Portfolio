///////////////////////////////////////////////////////////
// MOBILE NAVIGATION
const btnNavEl = document.querySelector(".btn-mobile-nav");
const icoNavEl = document.querySelector(".icon-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  icoNavEl.classList.toggle("display-none");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLink = document.querySelectorAll("a:link");
allLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    // console.log(href);

    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Fixed-nav

const sectionHeroEL = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      // console.log(ent);
      document.querySelector(".fixed-nav").classList.remove("display-none");
    }
    if (ent.isIntersecting) {
      document.querySelector(".fixed-nav").classList.add("display-none");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-300px",
  }
);
obs.observe(sectionHeroEL);

///////////////////////////////////////////////////////////
// CONTACT-ANIMATION
// const contact = document.querySelector(".btn--form");
// contact.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (
//     String(document.getElementById("phone").value).trim().length != 0 &&
//     String(document.getElementById("email").value).trim().length != 0 &&
//     String(document.getElementById("full-name").value).trim().length != 0
//   ) {
//     contact.classList.add("display-none");
//     document
//       .querySelector(".contact-animation")
//       .classList.remove("display-none");
//   }
//   document.getElementById("phone").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("full-name").value = "";
// });

///////////////////////////////////////////////////////////
// REVEAL SECTIONS
// const allSections = document.querySelectorAll(".section");

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove("section--hidden");
// };

// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.15,
// });

// allSections.forEach(function (section) {
//   sectionObserver.observe(section);
//   section.classList.add("section--hidden");
// });

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Anim Morph

var morphing = anime({
  targets: ".morph",
  points: [
    //Debut
    {
      value:
        "460.677372 125.296036 108.040017 24.8652344 112.454079 125.296036",
    },
    //Fin
    {
      value:
        "460.677372 157.296036 112.758683 38.9677241 119.111306 145.719727",
    },
  ],
  easing: "easeInOutQuad",
  duration: 3000,
  loop: true,
});

var morphing = anime({
  targets: ".morph2",
  points: [
    //Debut
    { value: "108.040017 24.8652344 168.780251 0 460.677372 125.296036" },
    //Fin
    { value: "112.758683 38.9677241 184.146186 0 460.677372 157.296036" },
  ],
  easing: "easeInOutQuad",
  duration: 3000,
  loop: true,
});

var morphing = anime({
  targets: ".morph3",
  points: [
    //Debut
    { value: "75.3147561 38.1354167 460.677372 125.296036 0 68.5184024" },
    //Fin
    { value: "78.250435 57.8044647 460.677372 157.296036 0 100.518402" },
  ],
  easing: "easeInOutQuad",
  duration: 3000,
  loop: true,
});

// Copy to Clipboard
// Sources : https://alligator.io/js/copying-to-clipboard/

const ctcMail = document.querySelectorAll(".contact");

ctcMail.forEach((mail) => {
  mail.addEventListener("click", () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(mail);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      selection.removeAllRanges();

      mail.getElementsByClassName("mail")[0].dataset.status = "Copied!";
      mail.classList.add("success");

      setTimeout(() => {
        mail.classList.remove("success");
        mail.getElementsByClassName("mail")[0].dataset.status = "Click to Copy";
      }, 1200);
    } catch (e) {}
  });
});

/********************************/
/********TECHNICAL STACK*********/
/********************************/
document.addEventListener("DOMContentLoaded", function () {
  // Get all community items
  var communityItems = document.querySelectorAll(".community-item");

  // Iterate through each community item
  communityItems.forEach(function (item) {
    // Add a mouseover event listener to each community item
    item.addEventListener("mouseover", function () {
      // Find the corresponding community-name within the current community item
      var communityName = item.querySelector(".community-name");

      // Make the community-name visible by setting its opacity to 1
      if (communityName) {
        communityName.style.opacity = "1";
      }
    });

    // Add a mouseout event listener to each community item
    item.addEventListener("mouseout", function () {
      // Find the corresponding community-name within the current community item
      var communityName = item.querySelector(".community-name");

      // Hide the community-name by setting its opacity back to 0
      if (communityName) {
        communityName.style.opacity = "0";
      }
    });
  });
});

/********************************/
/*****SKILL IMAGE TRANSFORM******/
/********************************/
document.addEventListener("DOMContentLoaded", function () {
  // Observer options
  const options = {
    root: null, // use the viewport as the root
    rootMargin: "0px", // no margin
    threshold: 0.5, // trigger when 50% of the target is visible
  };

  // Observer callback for scaling images
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const image = entry.target;
      if (entry.isIntersecting) {
        // Image is in the viewport
        image.style.transform = "scale(1.1)";
      } else {
        // Image is out of the viewport
        image.style.transform = "scale(1)";
      }
    });
  }, options);

  // Observer callback for fading in step numbers
  const numberObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const number = entry.target;
      if (entry.isIntersecting) {
        // Number is in the viewport
        number.style.opacity = 1;
      } else {
        // Number is out of the viewport
        number.style.opacity = 0;
      }
    });
  }, options);

  // Start observing each image
  document.querySelectorAll(".step-img").forEach((image) => {
    imageObserver.observe(image);
  });

  // Start observing each step number
  document.querySelectorAll(".step-number").forEach((number) => {
    numberObserver.observe(number);
  });
});

/********************************/
/***********CAROUSEL*************/
/********************************/
const wrapper = document.querySelector(".work-carousel");
const carousel = document.querySelector(".image-carousel");
const images = document.querySelectorAll(".image-carousel img");
const link = document.querySelector(".text-link"); // Selecting the link element
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Add an array to store the image links
const imageLinks = [
  "https://indiantradition.netlify.app/",
  "https://lgerp.netlify.app/",
  "",
  "https://github.com/Sarthak-Jagetiya/Hotel-Management-System",
];

images.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;

  // Add click event listener to each image
  slide.addEventListener("click", () => {
    // Check if the image has a corresponding link
    if (imageLinks[index]) {
      // Open the link in a new window
      window.open(imageLinks[index], "_blank");
    }
  });
});

// Add click event listener to the link element
link.addEventListener("click", () => {
  // Check if the current slide index is valid and has a corresponding link
  if (imageLinks[counter]) {
    // Open the corresponding link in a new window
    window.open(imageLinks[counter], "_blank");
  }
});

let counter = 0;

const slideImage = () => {
  images.forEach((img) => {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });

  // Check if there's a previous image
  prev.style.color = counter > 0 ? "black" : "gray";

  // Check if there's a next image
  next.style.color = counter < images.length - 1 ? "black" : "gray";
};

const prevSlide = () => {
  if (counter > 0) {
    counter--;
    slideImage();
  }
};

const nextSlide = () => {
  if (counter < images.length - 1) {
    counter++;
    slideImage();
  }
};

// Initial setup
slideImage();

// Add click event listeners
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
