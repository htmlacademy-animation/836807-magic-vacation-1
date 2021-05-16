// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import body from './modules/body.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import SymbolAnimation from './modules/symbol-animation';

// init modules
mobileHeight();
slider();
menu();
body();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
const introTitleAnimation = new SymbolAnimation(`.intro__title`, 600, `transform`);
const introDateAnimation = new SymbolAnimation(`.intro__date`, 600, `transform`);
const historyTitleAnimation = new SymbolAnimation(`.slider__item-title`, 500, `transform`);
const prizesTitleAnimation = new SymbolAnimation(`.prizes__title`, 500, `transform`);
const rulesTitleAnimation = new SymbolAnimation(`.rules__title`, 500, `transform`);
const gameTitleAnimation = new SymbolAnimation(`.game__title`, 500, `transform`);

introTitleAnimation.runAnimation();
introDateAnimation.runAnimation();
historyTitleAnimation.runAnimation();
prizesTitleAnimation.runAnimation();
rulesTitleAnimation.runAnimation();
gameTitleAnimation.runAnimation();

fullPageScroll.init();
