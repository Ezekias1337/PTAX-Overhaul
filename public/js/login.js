const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

const setTopLeft = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "0%";
  loginBackGround.style.backgroundPositionY = "0%";
};

const setTopCenter = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "50%";
  loginBackGround.style.backgroundPositionY = "0%";
};

const setTopRight = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "100%";
  loginBackGround.style.backgroundPositionY = "0%";
};

const setCenterLeft = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "0%";
  loginBackGround.style.backgroundPositionY = "50%";
};

const setCenterCenter = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "50%";
  loginBackGround.style.backgroundPositionY = "50%";
};

const setCenterRight = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "100%";
  loginBackGround.style.backgroundPositionY = "50%";
};

const setBottomLeft = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "0%";
  loginBackGround.style.backgroundPositionY = "100%";
};

const setBottomCenter = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "50%";
  loginBackGround.style.backgroundPositionY = "100%";
};

const setBottomRight = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  loginBackGround.style.backgroundPositionX = "100%";
  loginBackGround.style.backgroundPositionY = "100%";
};

const generateLogInBackgroundRandom = () => {
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

generateLogInBackgroundRandom();

const causeLogInToAnimate = () => {
  const loginBackGround = document.getElementsByClassName("login-body")[0];
  const numberToDetermineBGPlacement = getRandomArbitrary(1, 72);

  if (numberToDetermineBGPlacement <= 8) {
    loginBackGround.dataset.animationName = "animate-to-top-left";
    window.setTimeout(setTopLeft, 4999);
  } else if (numberToDetermineBGPlacement <= 16) {
    loginBackGround.dataset.animationName = "animate-to-top-center";
    window.setTimeout(setTopCenter, 4999);
  } else if (numberToDetermineBGPlacement <= 24) {
    loginBackGround.dataset.animationName = "animate-to-top-right";
    window.setTimeout(setTopRight, 4999);
  } else if (numberToDetermineBGPlacement <= 32) {
    loginBackGround.dataset.animationName = "animate-to-center-left";
    window.setTimeout(setCenterLeft, 4999);
  } else if (numberToDetermineBGPlacement <= 40) {
    loginBackGround.dataset.animationName = "animate-to-center-center";
    window.setTimeout(setCenterCenter, 4999);
  } else if (numberToDetermineBGPlacement <= 48) {
    loginBackGround.dataset.animationName = "animate-to-center-right";
    window.setTimeout(setCenterRight, 4999);
  } else if (numberToDetermineBGPlacement <= 56) {
    loginBackGround.dataset.animationName = "animate-to-bottom-left";
    window.setTimeout(setBottomLeft, 4999);
  } else if (numberToDetermineBGPlacement <= 64) {
    loginBackGround.dataset.animationName = "animate-to-bottom-center";
    window.setTimeout(setBottomCenter, 4999);
  } else if (numberToDetermineBGPlacement <= 72) {
    loginBackGround.dataset.animationName = "animate-to-bottom-right";
    window.setTimeout(setBottomRight, 4999);
  }
};

setInterval(causeLogInToAnimate, 5500);
