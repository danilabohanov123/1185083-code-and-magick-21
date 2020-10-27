"use strict";

const WIZARDS_COUNT = 4;

const FIRST_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];

const setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);

const getRandInt = (minNumber, maxNumber) => {
  return Math.floor(minNumber + (maxNumber - minNumber) * Math.random());
};

const getHeroObject = () => {
  const hero = {};
  hero.name = FIRST_NAMES[getRandInt(0, FIRST_NAMES.length - 1)] + ` ` + SECOND_NAMES[getRandInt(0, SECOND_NAMES.length - 1)];
  hero.coatColor = COAT_COLORS[getRandInt(0, COAT_COLORS.length - 1)];
  hero.eyesColoe = EYES_COLORS[getRandInt(0, EYES_COLORS.length - 1)];
  return hero;
};

const getArrayHeroes = () => {
  const heroes = [];
  for (let i = 0; i < WIZARDS_COUNT; i++) {
    const hero = getHeroObject();
    heroes.push(hero);
  }
  return heroes;
};

const createHeroNode = (hero, heroTemplate) => {
  const element = heroTemplate.cloneNode(true);
  const setupSimilarLabel = element.querySelector(`.setup-similar-label`);
  setupSimilarLabel.textContent = hero.name;
  const setupSimilarContent = element.querySelector(`.setup-similar-content`);
  const wizardCoat = setupSimilarContent.querySelector(`.wizard-coat`);
  wizardCoat.style.fill = hero.coatColor;
  const wizardEyes = setupSimilarContent.querySelector(`.wizard-eyes`);
  wizardEyes.style.fill = hero.eyesColor;
  return element;
};

const createHtmlHeroes = () => {
  const fragment = document.createDocumentFragment();
  const heroes = getArrayHeroes();
  const heroTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  for (let i = 0; i < WIZARDS_COUNT; i++) {
    fragment.appendChild(createHeroNode(heroes[i], heroTemplate));
  }
  const setupSimilarList = document.querySelector(`.setup-similar-list`);
  setupSimilarList.appendChild(fragment);
};

createHtmlHeroes();
const setupSimilar = document.querySelector(`.setup-similar`);
setupSimilar.classList.remove(`hidden`);
