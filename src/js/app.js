// Selecting Elements
const tabTitleButtons = document.querySelectorAll(".tabs__title");
const tabContents = document.querySelectorAll(".tabs__content");
// Accordion
const titleContainers = document.querySelectorAll(
  ".accordion__title-container"
);
const descriptionContainers = document.querySelectorAll(
  ".accordion__description-container"
);
const accordionToggleLogo = document.querySelectorAll(
  ".accordion__toggle-logo"
);

// Functionality Tabs
titleContainers.forEach((title, index) => {
  title.addEventListener("click", () => {
    descriptionContainers[index].classList.toggle(
      "accordion__description-container--active"
    );
    accordionToggleLogo[index].classList.toggle("rotate-arrow");
  });
});

// Loading Page - Hide Inactive Pages
document.addEventListener("DOMContentLoaded", () => {
  const tabContents = document.querySelectorAll(".tabs__content");

  // Aktiver riktig tab
  tabContents.forEach((content) => {
    if (content.classList.contains("tabs__content-active")) {
      content.style.visibility = "visible";
    } else {
      content.style.display = "none";
    }
  });
});

// Loop that iterates through the tab titles and the tab content
tabTitleButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (e) => {
    tabContents.forEach((content) =>
      content.classList.remove("tabs__content-active")
    );

    tabTitleButtons.forEach((button) =>
      button.classList.remove("tabs__title-active")
    );

    e.target.classList.add("tabs__title-active");

    tabContents[index].classList.add("tabs__content-active");
  });
});

// ------------------------------------------------------------------------------------------------------------

// Accordion Functionality
document.addEventListener("DOMContentLoaded", function () {
  const accordionElements = document.querySelectorAll(".accordion");

  // If statements - three states
  accordionElements.forEach((accordion) => {
    const titleContainer = accordion.querySelector(
      ".accordion__title-container"
    );
    const descriptionContainer = accordion.querySelector(
      ".accordion__description-container"
    );
    const toggleLogo = accordion.querySelector(".accordion__toggle-logo");

    // Default State
    if (accordion.classList.contains("accordion__default--state")) {
      titleContainer.addEventListener("click", () => {
        descriptionContainer.classList.toggle(
          "accordion__description-container--active"
        );
        toggleLogo.classList.toggle("rotate-arrow");
      });
    }

    // Open State
    if (accordion.classList.contains("accordion__open--state")) {
      descriptionContainer.classList.add(
        "accordion__description-container--active"
      );
      toggleLogo.classList.add("rotate-arrow");
    }
  });
});
