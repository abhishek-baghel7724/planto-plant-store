const collectionSlides = document.querySelectorAll(".collection-slide");
const collectionCount = document.querySelector(".collection-count");
const collectionNext = document.querySelector(".collection-next");
const collectionPrev = document.querySelector(".collection-prev");

let collectionIndex = 0;

function showCollectionSlide(index) {
  collectionSlides[collectionIndex].classList.remove("active");

  collectionIndex =
    (index + collectionSlides.length) % collectionSlides.length;

  collectionSlides[collectionIndex].classList.add("active");
  collectionCount.textContent =
    `0${collectionIndex + 1}/0${collectionSlides.length}`;
}

collectionNext.addEventListener("click", () => {
  showCollectionSlide(collectionIndex + 1);
});

collectionPrev.addEventListener("click", () => {
  showCollectionSlide(collectionIndex - 1);
});


document.querySelectorAll(".icon-button").forEach((button)=>{
  button.addEventListener("click",()=>{

const isFavorite =button.textContent.trim() ==="♡";
button.textContent = isFavorite ? "♥" : "♡";
button.style.color= isFavorite ? "#ff5c7a": " ";
button.setAttribute("aria-pressed", isFavorite);

  });
});

const introButtons = document.querySelectorAll(".intro button");
const ExploreButton=introButtons[0];
const LiveDemoButton = introButtons[1];
ExploreButton.addEventListener("click",()=>{
  document.querySelector(".trending-section").scrollIntoView({
    behavior:"smooth"
  });
});
LiveDemoButton.addEventListener("click", () => {
  document.querySelector(".collection-slider").scrollIntoView({
    behavior: "smooth"
  });
});
const subscribeForm = document.querySelector("#subscribe-form");
const subscribeMessage=document.querySelector("#subscribe-message");
subscribeForm.addEventListener("submit",(event)=>{
 event.preventDefault();
subscribeMessage.textContent = "Thanks for Subscribing!";
 subscribeForm.reset();
 setTimeout(()=>{
  subscribeMessage.textContent=" ";
 },3000);
 
  
});
const animatedText = document.querySelectorAll(
  ".intro h1, .intro > p"
);

const revealTargets = document.querySelectorAll(
  ".trending-section, .top.selling, .customer-reviews, .collection-slider, .site-footer"
);

revealTargets.forEach((section) => {
  section.classList.add("scroll-reveal");
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
animatedText.forEach((element) => {
  const text = element.textContent.trim().replace(/\s+/g, " ");
  element.textContent = "";
  element.classList.add("rise-reveal");

  const totalLetters = [...text].length;

  [...text].forEach((letter, index) => {
    if (letter === " ") {
      element.appendChild(document.createTextNode(" "));
      return;
    }

    const span = document.createElement("span");
    span.textContent = letter;
    span.style.setProperty(
      "--letter-delay",
      `${(index / totalLetters) * 0.55}s`
    );
    element.appendChild(span);
  });
});
revealTargets.forEach((section) => revealObserver.observe(section));
