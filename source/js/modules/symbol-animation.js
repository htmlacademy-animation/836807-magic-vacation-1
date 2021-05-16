
class SymbolAnimation {
  constructor(
      elementSelector,
      timer,
      property,
  ) {

    this._elementSelector = elementSelector;
    this._animatedElement = document.querySelector(elementSelector);
    this._classForActivate = `symbol-animated__text`;
    this._property = property;
    this._timeOffset = 0;
    this._step = 20;
    this._timer = timer;

    this.prePareText();
  }

  createSpan({content, className = ``}) {
    const spanElem = document.createElement(`span`);
    spanElem.className = className;
    if (content) {
      spanElem.textContent = content;
    }
    return spanElem;
  }

  addTransition(elem) {
    elem.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
    if (this._timeOffset / this._step > 4) {
      this._timeOffset = 0;
    }
    this._timeOffset += this._step;
  }

  prePareText() {
    if (!this._animatedElement) {
      return;
    }

    const elemText = this._animatedElement.textContent;
    const words = elemText.trim().split(` `).filter((latter)=>latter !== ``);

    const content = words.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter) => {
        const letterSpan = this.createSpan({content: latter});
        this.addTransition(letterSpan);
        fragment.appendChild(letterSpan);
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = this.createSpan({className: `text__word`});
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._animatedElement.innerHTML = ``;
    this._animatedElement.appendChild(content);
  }

  runAnimation() {
    if (!this._animatedElement) {
      return;
    }
    this._animatedElement.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._animatedElement.classList.remove(this._classForActivate);
  }
}

export default SymbolAnimation;
