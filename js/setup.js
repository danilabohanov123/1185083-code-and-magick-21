"use strict";

const N = 4;

const firstNames = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const secondNames = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColors = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];

const setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);

const getRandInt = (minNumber, maxNuber) => {
  return Math.floor(minNumber + (maxNuber - minNumber) * Math.random());
};

const getObject = () => {
  const hero = {};
  hero.name = firstNames[getRandInt(0, firstNames.length - 1)] + ` ` + secondNames[getRandInt(0, secondNames.length - 1)];
  hero.coatColor = coatColors[getRandInt(0, coatColors.length - 1)];
  hero.eyesColoe = eyesColors[getRandInt(0, eyesColors.length - 1)];
  return hero;
};

const getArrayObjects = () => {
  const heroes = [];
  for (let i = 0; i < N; i++) {
    const hero = getObject();
    heroes.push(hero);
  }
  return heroes;
};

const createDomObject = () => {
  const fragment = document.createDocumentFragment();
  const heroes = getArrayObjects();
  const heroTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  for (let i = 0; i < N; i++) {
    const hero = heroes[i];
    const element = heroTemplate.cloneNode(true);
    element.children[1].textContent = hero.name;
    element.children[0].children[0].children[0].children[0].style.fill = hero.coatColor;
    element.children[0].children[0].children[0].children[2].style.fill = hero.eyesColor;
    fragment.appendChild(element);
  }
  const setupSimilarList = document.querySelector(`.setup-similar-list`);
  setupSimilarList.appendChild(fragment);
};

createDomObject();
const setupSimilar = document.querySelector(`.setup-similar`);
setupSimilar.classList.remove(`hidden`);
