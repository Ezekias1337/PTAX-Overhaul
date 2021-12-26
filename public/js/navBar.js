let arrayOfNavbarDropdownElements = document.getElementsByClassName(
  "nav-link dropdown-toggle"
);

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const setTopLeft = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "left";
  navbar.style.backgroundPositionY = "top";
};

const setTopCenter = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "center";
  navbar.style.backgroundPositionY = "top";
};

const setTopRight = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "right";
  navbar.style.backgroundPositionY = "top";
};

const setCenterLeft = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "left";
  navbar.style.backgroundPositionY = "center";
};

const setCenterCenter = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "center";
  navbar.style.backgroundPositionY = "center";
};

const setCenterRight = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "right";
  navbar.style.backgroundPositionY = "center";
};

const setBottomLeft = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "left";
  navbar.style.backgroundPositionY = "bottom";
};

const setBottomCenter = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "center";
  navbar.style.backgroundPositionY = "bottom";
};

const setBottomRight = () => {
  const navbar = document.getElementById("navbar");
  navbar.style.backgroundPositionX = "right";
  navbar.style.backgroundPositionY = "bottom";
};

const generateNavBarBackgroundRandom = () => {
  const numberToDetermineBGPlacement = getRandomArbitrary(1, 72);

  if (numberToDetermineBGPlacement <= 8) {
    setTopLeft();
  } else if (numberToDetermineBGPlacement <= 16) {
    setTopCenter();
  } else if (numberToDetermineBGPlacement <= 24) {
    setTopRight();
  } else if (numberToDetermineBGPlacement <= 32) {
    setCenterLeft();
  } else if (numberToDetermineBGPlacement <= 40) {
    setCenterCenter();
  } else if (numberToDetermineBGPlacement <= 48) {
    setCenterRight();
  } else if (numberToDetermineBGPlacement <= 56) {
    setBottomLeft();
  } else if (numberToDetermineBGPlacement <= 64) {
    setBottomCenter();
  } else if (numberToDetermineBGPlacement <= 72) {
    setBottomRight();
  }
};

generateNavBarBackgroundRandom();

const causeNavbarToAnimate = () => {
    const navbar = document.getElementById("navbar");
    const numberToDetermineBGPlacement = getRandomArbitrary(1, 72);
  
    if (navbar.dataset.animationName === "animate-to-top-left") {
      navbar.dataset.animationName = "animate-to-center-left";
      window.setTimeout(setCenterLeft, 4999);
    } else if (
      navbar.dataset.animationName === "animate-to-center-left"
    ) {
      navbar.dataset.animationName = "animate-to-bottom-left";
      window.setTimeout(setBottomLeft, 4999);
    } else if (
      navbar.dataset.animationName === "animate-to-bottom-left"
    ) {
      navbar.dataset.animationName = "animate-to-bottom-center";
      window.setTimeout(setBottomCenter, 4999);
    } else if (
      navbar.dataset.animationName === "animate-to-bottom-center"
    ) {
      navbar.dataset.animationName = "animate-to-center-center";
      window.setTimeout(setCenterCenter, 4999);
    } else if (
      navbar.dataset.animationName === "animate-to-center-center"
    ) {
      navbar.dataset.animationName = "animate-to-top-center";
      window.setTimeout(setTopCenter, 4999);
    } else if (
      navbar.dataset.animationName === "animate-to-top-center"
    ) {
      navbar.dataset.animationName = "animate-to-top-right";
      window.setTimeout(setTopRight, 4999);
    } else if (navbar.dataset.animationName === "animate-to-top-right") {
      navbar.dataset.animationName = "animate-to-center-right";
      window.setTimeout(setCenterRight, 4999);
    } else if (
      navbar.dataset.animationName === "animate-to-center-right"
    ) {
      navbar.dataset.animationName = "animate-to-bottom-right";
      window.setTimeout(setBottomRight, 4999);
    } else if (
      navbar.dataset.animationName === "animate-to-bottom-right"
    ) {
      navbar.dataset.animationName = "animate-to-top-left";
      window.setTimeout(setTopLeft, 4999);
    } else {
      if (numberToDetermineBGPlacement <= 8) {
        navbar.dataset.animationName = "animate-to-top-left";
        window.setTimeout(setTopLeft, 4999);
      } else if (numberToDetermineBGPlacement <= 16) {
        navbar.dataset.animationName = "animate-to-top-center";
        window.setTimeout(setTopCenter, 4999);
      } else if (numberToDetermineBGPlacement <= 24) {
        navbar.dataset.animationName = "animate-to-top-right";
        window.setTimeout(setTopRight, 4999);
      } else if (numberToDetermineBGPlacement <= 32) {
        navbar.dataset.animationName = "animate-to-center-left";
        window.setTimeout(setCenterLeft, 4999);
      } else if (numberToDetermineBGPlacement <= 40) {
        navbar.dataset.animationName = "animate-to-center-center";
        window.setTimeout(setCenterCenter, 4999);
      } else if (numberToDetermineBGPlacement <= 48) {
        navbar.dataset.animationName = "animate-to-center-right";
        window.setTimeout(setCenterRight, 4999);
      } else if (numberToDetermineBGPlacement <= 56) {
        navbar.dataset.animationName = "animate-to-bottom-left";
        window.setTimeout(setBottomLeft, 4999);
      } else if (numberToDetermineBGPlacement <= 64) {
        navbar.dataset.animationName = "animate-to-bottom-center";
        window.setTimeout(setBottomCenter, 4999);
      } else if (numberToDetermineBGPlacement <= 72) {
        navbar.dataset.animationName = "animate-to-bottom-right";
        window.setTimeout(setBottomRight, 4999);
      }
    }
  };
  
  setInterval(causeNavbarToAnimate, 5500);

for (const item of arrayOfNavbarDropdownElements) {
  item.addEventListener("mouseenter", () => {
    item.click();
  });
  item.nextElementSibling.addEventListener("mouseleave", () => {
    /* 
            without this part the navbar was allowing several dropdowns to display
            when the mouse is moved rapidly horizontally
        */
    let arrayOfElementsWithShow = document.querySelectorAll("ul.show");
    for (const nestedItem of arrayOfElementsWithShow) {
      nestedItem.classList.remove("show");
    }
  });
  item.addEventListener("mouseleave", () => {
    /* 
            without this part the navbar was allowing several dropdowns to display
            when the mouse is moved rapidly horizontally
        */
    let arrayOfElementsWithShow = document.querySelectorAll("ul.show");
    if (arrayOfElementsWithShow?.length > 1) {
      for (let i = 1; i < arrayOfElementsWithShow.length; i++) {
        arrayOfElementsWithShow[i].classList.remove("show");
      }
    }
  });
}

// Now need to handle nested dropdowns
