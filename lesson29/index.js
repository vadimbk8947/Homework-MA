//classes-------------------------
class DOMHelper {
  append(boxElement, insertElement) {
    boxElement.append(insertElement);
  }
}

class RadioFactory extends DOMHelper {
  constructor(color, name, parent) {
    super();
    this.color = color;
    this.name = name;
    this.parent = parent;
  }

  __createInput() {
    this.elem = document.createElement("span");
    this.elem.setAttribute("data-name", this.name);
    this.elem.setAttribute("data-checked", false);
    this.elem.setAttribute("data-id", this.color);
    this.elem.name = this.name;

    this.checker = document.createElement("b");
  }

  __style() {
    this.elem.style.backgroundColor = "white";
    this.elem.style.height = "15px";
    this.elem.style.width = "15px";
    this.elem.style.borderRadius = "50%";
    this.elem.style.border = `solid 2px ${this.color}`;
    this.elem.style.display = "block";
    this.elem.style.position = "relative";
    this.elem.style.cursor = "pointer";
    this.elem.style.margin = "0 2px";

    this.checker.style.height = "11px";
    this.checker.style.display = "block";
    this.checker.style.width = "11px";
    this.checker.style.left = "2px";
    this.checker.style.position = "relative";
    this.checker.style.top = "2px";
    this.checker.style.borderRadius = "50%";
    this.checker.style.backgroundColor = this.color;
  }

  __addListeners() {
    this.elem.addEventListener(
      "click",
      e => {
        const radios = document.querySelectorAll('[data-name="color"]');

        radios.forEach(radio => {
          radio.setAttribute("data-checked", false);
          radio.firstElementChild && radio.firstElementChild.remove();
        });

        e.target.setAttribute("data-checked", true);
        this.append(e.target, this.checker);
      },
      true
    );
  }

  create() {
    this.__createInput();
    this.__style();

    if (!document.querySelector('[data-name="color"]')) {
      this.elem.setAttribute("data-checked", true);

      this.append(this.elem, this.checker);
    }

    this.__addListeners();

    this.append(this.parent, this.elem);
  }
}

class NoteCreator extends DOMHelper {
  constructor(parentElem) {
    super();
    this.parentElem = parentElem;
  }
  __createContainer() {
    this.notesFactoryContainer = document.createElement("div");
    this.notesFactoryContainer.className = "note-creator";

    return this.notesFactoryContainer;
  }

  __createRadioWrapper() {
    this.radioWrapper = document.createElement("div");
    this.radioWrapper.innerText = "Choose color:";
    this.radioWrapper.className = "radio-wrapper";

    return this.radioWrapper;
  }

  __createTextArea() {
    this.notesFactoryTextarea = document.createElement("textarea");
    this.notesFactoryTextarea.placeholder = "Input your shit";

    return this.notesFactoryTextarea;
  }

  __createButtonWrapper() {
    this.buttonWrapper = document.createElement("div");
    this.buttonWrapper.className = "button-wrapper";

    return this.buttonWrapper;
  }

  __handleOnSubmit() {
    if (!this.notesFactoryTextarea.value.trim().length) {
      this.__handleOnReset();

      return;
    }

    this.__addNewNote();
  }

  __addNewNote() {
    const selectedRadio = document.querySelector(
      '[data-name="color"][data-checked="true"]'
    );

    const color = selectedRadio.getAttribute("data-id");

    const div = document.createElement("div");

    div.classList = "task-item";

    const spanClose = document.createElement("span");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.style.position = "absolute";
    input.style.left = "0";
    input.style.top = "0";
    input.style.cursor = "pointer";

    div.style.backgroundColor = color;
    div.style.border = "solid 1px #c2f9f0";
    div.style.width = "300px";
    div.style.height = "200px";
    div.style.padding = "15px";
    div.style.margin = "10px";
    div.style.position = "relative";
    div.style.overflowY = "scroll";

    spanClose.innerHTML = "&times;";
    spanClose.style.fontSize = "22px";
    spanClose.style.cursor = "pointer";
    spanClose.style.position = "absolute";
    spanClose.style.top = "0";
    spanClose.style.right = "5px";

    div.innerText = this.notesFactoryTextarea.value;

    div.append(spanClose);
    div.append(input);

    div.addEventListener("click", e => {
      if (e.target.tagName === "INPUT") {
        if (e.target.checked) {
          e.currentTarget.setAttribute("data-isDone", true);
          e.currentTarget.style.textDecoration = "line-through";
        } else {
          e.currentTarget.hasAttribute("data-isDone") &&
            e.currentTarget.removeAttribute("data-isDone");

          e.currentTarget.style.textDecoration = "none";
        }
      }
      if (e.target.tagName !== "SPAN") {
        return;
      }

      e.currentTarget.remove();
    });

    this.append(this.parentElem, div);
    this.__handleOnReset();
  }

  __handleOnReset() {
    const textarea = this.notesFactoryTextarea;

    textarea.value = "";

    //logic for reset color
    const radios = document.querySelectorAll('[data-name="color"]');

    const checker = document.querySelector("b");

    radios.forEach(radio => {
      radio.setAttribute("data-checked", false);
      radio.firstElementChild && radio.firstElementChild.remove();
    });

    radios[0].setAttribute("data-checked", true);

    const newColor = radios[0].getAttribute("data-id");

    checker.style.backgroundColor = newColor;

    this.append(radios[0], checker);
  }

  __createButton(buttonName, text, type) {
    this[buttonName] = document.createElement("button");
    this[buttonName].innerHTML = text;

    this[buttonName].addEventListener("click", e =>
      type ? this.__handleOnSubmit(e) : this.__handleOnReset(e)
    );

    return this[buttonName];
  }

  __style() {
    this.notesFactoryContainer.style.width = "300px";
    this.notesFactoryContainer.style.height = "200px";
    this.notesFactoryContainer.style.border = "solid 1px #c2f9f0";
    this.notesFactoryContainer.style.borderRadius = "4px";
    this.notesFactoryContainer.style.boxShadow = "0px 0px 10px 1px #c2f9f059";
    this.notesFactoryContainer.style.margin = "10px";
    this.notesFactoryContainer.style.padding = "15px";
    this.notesFactoryContainer.style.backgroundColor = "white";
    this.notesFactoryContainer.style.display = "flex";
    this.notesFactoryContainer.style.flexDirection = "column";

    this.notesFactoryTextarea.rows = 6;
    this.notesFactoryTextarea.cols = 30;
    this.notesFactoryTextarea.style.outline = "none";
    this.notesFactoryTextarea.style.resize = "none";
    this.notesFactoryTextarea.style.fontSize = "14px";
    this.notesFactoryTextarea.style.letterSpacing = "2px";
    this.notesFactoryTextarea.style.color = "#808080";
    this.notesFactoryTextarea.style.fontFamily = "Orbitron, sans-serif";

    this.radioWrapper.style.display = "flex";
    this.radioWrapper.style.alignItems = "center";
    this.radioWrapper.style.margin = "10px 0";
    this.radioWrapper.style.fontWeight = "500";
    this.radioWrapper.style.fontWeight = "500";
    this.radioWrapper.style.fontWeight = "500";

    this.buttonWrapper.style.display = "flex";
    this.buttonWrapper.style.justifyContent = "flex-end";

    this.parentElem.style.display = "flex";
    this.parentElem.style.flexWrap = "wrap";

    const buttonsArr = [this.__submit, this.__reset];

    buttonsArr.forEach(btn => {
      btn.style.margin = "10px 0";
      btn.style.borderRadius = "50%";
      btn.style.height = "35px";
      btn.style.width = "35px";
      btn.style.outline = "none";
      btn.style.cursor = "pointer";
    });

    this.__submit.style.border = "solid 2px rgb(194, 249, 240)";
    this.__reset.style.border = "solid 2px #ffb0b0";
    this.__reset.style.marginRight = "20px";
  }

  __addNewNoteWithEnter() {
    this.notesFactoryTextarea.addEventListener("keyup", e => {
      if (e.code == "Enter") {
        this.__addNewNote();
      }
    });

    return;
  }

  render() {
    const container = this.__createContainer();

    const textArea = this.__createTextArea();

    const btnWrapper = this.__createButtonWrapper();

    const radioWrapper = this.__createRadioWrapper();

    const buttonSubmit = this.__createButton("__submit", `&#10004;`, true);
    const buttonReset = this.__createButton("__reset", `&#10006;`);

    this.__style();

    this.append(container, radioWrapper);
    this.append(container, textArea);
    this.append(container, btnWrapper);

    this.append(btnWrapper, buttonReset);
    this.append(btnWrapper, buttonSubmit);

    this.__addNewNoteWithEnter();

    this.append(this.parentElem, container);
  }
}

class HeaderCreator extends DOMHelper {
  constructor(parentElem) {
    super();
    this.parentElem = parentElem;
  }

  __createHeader() {
    const header = document.createElement("header");

    header.style.backgroundColor = "#808080";
    header.style.display = "flex";
    header.style.width = "100%";
    header.style.height = "50px";
    header.style.alignItems = "center";

    return header;
  }

  __createButton(text, onClickAction) {
    const button = document.createElement("button");

    button.textContent = text;
    button.addEventListener("click", onClickAction);

    button.style.backgroundColor = "white";
    button.style.border = "solid 1px black";
    button.style.margin = "0 20px";
    button.style.cursor = "pointer";
    button.style.width = "160px";
    button.style.padding = "5px 0";
    button.style.borderRadius = "4px";
    button.style.fontSize = "14px";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.style.lineHeight = "1";
    button.style.outline = "none";

    return button;
  }

  render() {
    const header = this.__createHeader();
    const button1 = this.__createButton("All", e => {
      const allTasks = document.querySelectorAll(".task-item");

      allTasks.forEach(task => {
        task.hidden = false;
      });
    });
    const button2 = this.__createButton("Done", e => {
      const allTasks = document.querySelectorAll(".task-item");

      allTasks.forEach(task => {
        if (!task.hasAttribute("data-isdone")) {
          task.hidden = true;
        } else {
          task.hidden = false;
        }
      });
    });
    const button3 = this.__createButton("Future Tasks", e => {
      const allTasks = document.querySelectorAll(".task-item");

      allTasks.forEach(task => {
        if (task.hasAttribute("data-isdone")) {
          task.hidden = true;
        } else {
          task.hidden = false;
        }
      });
    });

    this.append(header, button1);
    this.append(header, button2);
    this.append(header, button3);

    this.append(this.parentElem, header);
  }
}

const root = document.getElementById("root");

const header = new HeaderCreator(root);

header.render();

const container = new NoteCreator(root);

container.render();

const DOMContainer = document.querySelector(".radio-wrapper");

const arrRadioButtons = [
  new RadioFactory("#fde9e6", "color", DOMContainer),
  new RadioFactory("#e3f9f9", "color", DOMContainer),
  new RadioFactory("#d5ffd4", "color", DOMContainer)
];

arrRadioButtons.forEach(btn => btn.create());
