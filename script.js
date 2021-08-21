const language = localStorage.getItem("language");
let uppercased = false;

const buttons = [
  {
    text: "§",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "±",
  },
  {
    text: "1",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "!",
    textLT: "ą",
    textLT2: "Ą",
  },
  {
    text: "2",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "@",
    textLT: "č",
    textLT2: "Č",
  },
  {
    text: "3",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "#",
    textLT: "ę",
    textLT2: "Ę",
  },
  {
    text: "4",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "$",
    textLT: "ė",
    textLT2: "Ė",
  },
  {
    text: "5",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "%",
    textLT: "į",
    textLT2: "Į",
  },
  {
    text: "6",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "^",
    textLT: "š",
    textLT2: "Š",
  },
  {
    text: "7",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "&",
    textLT: "ų",
    textLT2: "Ų",
  },
  {
    text: "8",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "*",
    textLT: "ū",
    textLT2: "Ū",
  },
  {
    text: "9",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "(",
  },
  {
    text: "0",
    row: 1,
    type: "symbol",
    size: "small",
    text2: ")",
  },
  {
    text: "-",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "_",
  },
  {
    text: "=",
    row: 1,
    type: "symbol",
    size: "small",
    text2: "+",
    textLT: "ž",
    textLT2: "Ž",
  },
  {
    text: "Backspace",
    row: 1,
    type: "Backspace",
    size: "big",
  },
  {
    text: "TAB",
    row: 2,
    type: "Tab",
    size: "medium",
  },
  {
    text: "q",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "w",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "e",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "r",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "t",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "y",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "u",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "i",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "o",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "p",
    row: 2,
    type: "letter",
    size: "small",
  },
  {
    text: "[",
    row: 2,
    type: "symbol",
    size: "small",
    text2: "{",
  },
  {
    text: "]",
    row: 2,
    type: "symbol",
    size: "small",
    text2: "}",
  },
  {
    text: "\\",
    row: 2,
    type: "symbol",
    size: "small",
    text2: "|",
  },
  {
    text: "Caps Lock",
    row: 3,
    type: "CapsLock",
    size: "big",
    pushed: false,
  },
  {
    text: "a",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: "s",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: "d",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: "f",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: "g",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: "h",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: "j",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: "k",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: "l",
    row: 3,
    type: "letter",
    size: "small",
  },
  {
    text: ";",
    row: 3,
    type: "symbol",
    size: "small",
    text2: ":",
  },
  {
    text: "'",
    row: 3,
    type: "symbol",
    size: "small",
    text2: '"',
  },
  {
    text: "ENTER",
    row: 3,
    type: "Enter",
    size: "big",
  },
  {
    text: "SHIFT",
    row: 4,
    type: "ShiftLeft",
    size: "big",
    pushed: false,
  },
  {
    text: "`",
    row: 4,
    type: "symbol",
    size: "small",
    text2: "~",
  },
  {
    text: "z",
    row: 4,
    type: "letter",
    size: "small",
  },
  {
    text: "x",
    row: 4,
    type: "letter",
    size: "small",
  },
  {
    text: "c",
    row: 4,
    type: "letter",
    size: "small",
  },
  {
    text: "v",
    row: 4,
    type: "letter",
    size: "small",
  },
  {
    text: "b",
    row: 4,
    type: "letter",
    size: "small",
  },
  {
    text: "n",
    row: 4,
    type: "letter",
    size: "small",
  },
  {
    text: "m",
    row: 4,
    type: "letter",
    size: "small",
  },
  {
    text: ",",
    row: 4,
    type: "symbol",
    size: "small",
    text2: "<",
  },
  {
    text: ".",
    row: 4,
    type: "symbol",
    size: "small",
    text2: ">",
  },
  {
    text: "/",
    row: 4,
    type: "symbol",
    size: "small",
    text2: "?",
  },
  {
    text: "↑",
    row: 4,
    type: "ArrowUp",
    size: "small",
  },
  {
    text: "SHIFT",
    row: 4,
    type: "ShiftRight",
    size: "small",
    pushed: false,
  },
  {
    text: "control",
    row: 5,
    type: "ControlLeft",
    size: "small",
    pushed: false,
  },
  {
    text: "option",
    row: 5,
    type: "AltLeft",
    size: "small",
    pushed: false,
  },
  {
    text: "command",
    row: 5,
    type: "MetaLeft",
    size: "medium",
    pushed: false,
  },
  {
    text: " ",
    row: 5,
    type: "Space",
    size: "huge",
  },
  {
    text: "command",
    row: 5,
    type: "MetaRight",
    size: "medium",
    pushed: false,
  },
  {
    text: "option",
    row: 5,
    type: "AltRight",
    size: "medium",
    pushed: false,
  },
  {
    text: "←",
    row: 5,
    type: "ArrowLeft",
    size: "small",
  },
  {
    text: "↓",
    row: 5,
    type: "ArrowDown",
    size: "small",
  },
  {
    text: "→",
    row: 5,
    type: "ArrowRight",
    size: "small",
  },
];

function createAndStyleElement(type, id, style) {
  const newElement = document.createElement(type);
  document.body.appendChild(newElement);
  newElement.style.cssText = style;
  newElement.id = id;
}

function createRows(n) {
  let div;
  for (let i = 0; i < n; i += 1) {
    div = document.createElement("div");
    div.id = `row${i + 1}`;
    div.style.cssText = "display:flex;";
    document.getElementById("rows-container").appendChild(div);
  }
}

function createHtmlLayout() {
  document.body = document.createElement("body");
  document.body.style.cssText =
    "display:flex;flex-direction:column;width: 1000px;";
  createAndStyleElement(
    "textarea",
    "input-field",
    "width: 100%; height:200px;margin-bottom: 50px"
  );
  createAndStyleElement(
    "div",
    "language-info",
    "font-size:20px;margin:15px;border:2px solid black;padding:10px"
  );
  createAndStyleElement(
    "div",
    "rows-container",
    "display:flex;flex-direction:column"
  );
  document.getElementById(
    "language-info"
  ).innerText = `To change language, press space button while holding Option button. Current language- ${language}`;
  document.getElementById("input-field").focus();
  createRows(5);
}

function addButtonToRow(buttonElement, elem) {
  document.getElementById(`row${elem.row}`).appendChild(buttonElement);
}

function changeKeyboardDisplay(elem) {
  if (language === null) {
    localStorage.setItem("language", "en");
    window.location.reload();
  }
  if (language === "en") {
    if (elem.type === "letter") {
      localStorage.setItem(elem.id, elem.text.toUpperCase());
    } else {
      localStorage.setItem(elem.id, elem.text);
    }
  }
  if (language === "lt") {
    if (elem.textLT) {
      localStorage.setItem(elem.id, elem.textLT2);
    }
    if (elem.type === "letter" && !elem.textLT) {
      localStorage.setItem(elem.id, elem.text.toUpperCase());
    }
    if (elem.type !== "letter" && !elem.textLT) {
      localStorage.setItem(elem.id, elem.text);
    }
  }
  document.getElementById(elem.id).innerText = localStorage.getItem(elem.id);
}

function changeButtonSize(id, size) {
  switch (size) {
    case "small":
      document.getElementById(id).style.flex = "0 1 50px";
      break;
    case "medium":
      document.getElementById(id).style.flex = "2";
      break;
    case "big":
      document.getElementById(id).style.flex = "3";
      break;
    case "huge":
      document.getElementById(id).style.flex = "5";
      break;
    default:
      throw new Error("Not supported");
  }
  return document.getElementById(id);
}

function addTextToInputField(text) {
  document.getElementById("input-field").value += text;
}

function handleCapsLock(elem) {
  if (uppercased) {
    uppercased = false;
    document.getElementById(elem.id).style.backgroundColor = "white";
  } else {
    uppercased = true;
    document.getElementById(elem.id).style.backgroundColor = "#FFDFD3";
  }
}

function handleButtons(elem, event) {
  if (elem.type === "Enter") {
    addTextToInputField("\n");
  }
  if (elem.type === "CapsLock") {
    handleCapsLock(elem);
  }
  if (elem.type === "Backspace") {
    document.getElementById("input-field").value = document
      .getElementById("input-field")
      .value.slice(0, document.getElementById("input-field").value.length - 1);
  }
  if (
    elem.type === "ArrowUp" ||
    elem.type === "ArrowDown" ||
    elem.type === "ArrowLeft" ||
    elem.type === "ArrowRight"
  ) {
    addTextToInputField(elem.text);
    event.preventDefault();
  }
  if (elem.type === "symbol" || elem.type === "letter") {
    if (!uppercased && !event.shiftKey) {
      if (language === "lt" && elem.textLT) {
        addTextToInputField(elem.textLT);
      } else {
        addTextToInputField(elem.text);
      }
    }
    if (uppercased || event.shiftKey) {
      if (language === "lt" && elem.textLT2) {
        addTextToInputField(elem.textLT2);
      } else if ((event.shiftKey && elem.text2) || elem.type === "letter") {
        addTextToInputField(elem.text2);
      } else {
        addTextToInputField(elem.text);
      }
    }
  }
  if (elem.type === "Tab") {
    addTextToInputField("     ");
  }
  if (elem.type === "Space" && event.altKey) {
    if (language === "en") {
      localStorage.setItem("language", "lt");
    } else {
      localStorage.setItem("language", "en");
    }
  }
}

function handleClick(element, elem, type) {
  element.addEventListener("click", (event) => {
    const targetButton = event.target;
    if (!language) {
      localStorage.setItem("language", "en");
    }
    targetButton.style.backgroundColor = "#FFDFD3";
    handleButtons(elem, event);
    if (type !== "CapsLock") {
      setTimeout(() => {
        targetButton.style.backgroundColor = "white";
      }, 200);
    }
  });
}

function addSecondText(elem) {
  if (!elem.text2) {
    buttons[elem.id - 1].text2 = buttons[elem.id - 1].text.toUpperCase();
  }
}

function createButtons(arr) {
  let buttonElement;
  arr.forEach((elem) => {
    buttonElement = document.createElement("div");
    const i = buttons.indexOf(elem);
    buttons[i].id = i + 1;
    buttonElement.id = i + 1;
    addButtonToRow(buttonElement, elem);
    changeKeyboardDisplay(elem);
    addSecondText(elem);
    buttonElement.style.cssText =
      "width:50px;border:2px solid black;border-radius:8px;height:50px;display:flex;justify-content:center;align-items:center;margin: 5px;cursor:pointer";
    changeButtonSize(elem.id, elem.size);
    handleClick(buttonElement, elem, elem.type);
  });
  return arr;
}

document.addEventListener("keydown", (event) => {
  document.getElementById("input-field").focus();
  buttons.forEach((elem) => {
    if (
      elem.text === event.code ||
      elem.type === event.code ||
      elem.text === event.key ||
      elem.textLT === event.key
    ) {
      const buttonElement = document.getElementById(elem.id);
      buttonElement.style.backgroundColor = "#FFDFD3";
      handleButtons(elem, event);
      event.preventDefault();
    }
  });
});
document.addEventListener("keyup", (event) => {
  buttons.forEach((elem) => {
    if (
      elem.text === event.code ||
      elem.type === event.code ||
      elem.text === event.key ||
      elem.textLT === event.key
    ) {
      if (event.key === "CapsLock") {
        handleCapsLock(elem);
      }
      setTimeout(() => {
        document.getElementById(elem.id).style.backgroundColor = "white";
      }, 200);
    }
  });
});

window.addEventListener("load", () => {
  createHtmlLayout();
  createButtons(buttons);
});
