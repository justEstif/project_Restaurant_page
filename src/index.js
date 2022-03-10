// function to create the home page on load and button click
/**
 * document.addEventListener('DOMContentLoaded', function() {
    alert("Ready!");
}, false);

 */
import "./style.css";
import { addMenuText } from "./menu";
import { addContactText } from "./contact";
const preparePage = function () {
  // function to create elements and add classes to elements
  function createElements() {
    // capture container
    const content = document.querySelector("#content");

    // make main sections
    const navbar = document.createElement("nav");
    const section1 = document.createElement("section");
    const section2 = document.createElement("section");
    const section3 = document.createElement("section");
    const footer = document.createElement("footer");

    // create nav-bar subsections: buttons
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    // create section1 subsections: title
    const title = document.createElement("div");

    // create section2 subsections: subtitle and sub-content
    const subtitle1 = document.createElement("div");
    const subtitle1Content = document.createElement("div");

    // create section3 subsections: subtitle and sub-content
    const subtitle2 = document.createElement("div");
    const subtitle2Content = document.createElement("div");

    return {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    };
  }
  // function to add class and ID to elements
  function addClassID(elements) {
    const {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    } = elements;
    // adding class to main sections
    navbar.classList.add("nav-bar");
    section1.classList.add("section-1");
    section2.classList.add("section-2");
    section3.classList.add("section-3");
    footer.classList.add("footer");

    // adding class to nav-bar components
    homeBtn.classList.add("home-btn");
    menuBtn.classList.add("menu-btn");
    contactBtn.classList.add("contact-btn");
    title.classList.add("title");

    // adding class and ID to sub-section
    subtitle1.classList.add("subtitle");
    subtitle1.setAttribute("id", "subtitle1");
    subtitle1Content.classList.add("subtitle-content");
    subtitle1Content.setAttribute("id", "subtitle1-content");
    subtitle2.classList.add("subtitle");
    subtitle2.setAttribute("id", "subtitle2");
    subtitle2Content.classList.add("subtitle-content");
    subtitle2Content.setAttribute("id", "subtitle2-content");

    // return everything
    return {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    };
  }
  // function to append elements to page
  function appendToPage(elements) {
    const {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    } = elements;

    // adding text to buttons
    homeBtn.innerText = "Home";
    // homeBtn.onClick = addIndexText();
    menuBtn.innerText = "Menu";
    // menuBtn.onClick = addMenuText();
    contactBtn.innerText = "Contact";
    // adding event listeners to each button
    homeBtn.addEventListener("click", (e) => loadPage(e.target.innerText));
    menuBtn.addEventListener("click", (e) => loadPage(e.target.innerText));
    contactBtn.addEventListener("click", (e) => loadPage(e.target.innerText));

    // footer
    footer.innerHTML = `Made by<a href = "https://github.com/justEstif/"> me</a>`;
    // appending to navbar
    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);

    // appending to section1
    section1.appendChild(title);

    // appending to section2
    section2.appendChild(subtitle1);
    section2.appendChild(subtitle1Content);

    // appending to section3
    section3.appendChild(subtitle2);
    section3.appendChild(subtitle2Content);

    // appending to content
    content.appendChild(navbar);
    content.appendChild(section1);
    content.appendChild(section2);
    content.appendChild(section3);
    content.appendChild(footer);
    // return everything
    return {
      content,
      navbar,
      section1,
      section2,
      section3,
      footer,
      homeBtn,
      menuBtn,
      contactBtn,
      title,
      subtitle1,
      subtitle2,
      subtitle1Content,
      subtitle2Content,
    };
  }

  return appendToPage(addClassID(createElements()));
};

// function to add text to elements
function addHomeText(elements) {
  const { title, subtitle1, subtitle2, subtitle1Content, subtitle2Content } =
    elements;

  // contactBtn.onClick = addContactText();
  // adding text to title and subtitle
  title.innerText = "Himalayan Wild Yak";
  subtitle1.innerText = "What is Yak?";
  subtitle2.innerText = "Why Yak?";

  // adding text to content
  subtitle1Content.innerText = `Yak is a very hairy animal similar to bison or buffalo, but it's known as mountain cow. You can find Yak in Himalayan countries such as Nepal, Tibet and Mongolia. Yak is the healthiest meat on the planet which has more Omega-3 than Salmon. Usually, Yak prefers the higher elevation and colder climate. However, Yak can grow anywhere in the world. So, Canada started bringing Yak from Tibet and Nepal and then moved to North America, especially Colorado, Utah, Alaska. Now, they have in Pennsylvania and Virginia as well. Yak is not gamy meat but leaves a sweeter test in pallet.`;

  subtitle2Content.innerText = `Yak is a hundred percent Grass-Fed animal. Yak has three times a lower diet than the COW. It takes at least three years to grow. Yak has the lowest cholesterol than any other animal. We are only one who will be serving Yak meat dishes.`;
}

function loadPage(button) {
  switch (button) {
    case "Home":
      document.getElementById("content").innerHTML = "";
      addHomeText(preparePage());
      break;
    case "Menu":
      document.getElementById("content").innerHTML = "";
      addMenuText(preparePage());
      break;
    case "Contact":
      document.getElementById("content").innerHTML = "";
      addContactText(preparePage());
      break;
    default:
      document.getElementById("content").innerHTML = "";
      addHomeText(preparePage());
      break;
  }
}

addHomeText(preparePage());
