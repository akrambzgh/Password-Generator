// Password Length
let rangeInput = document.querySelector(".range-input");
let passwordLengthNumber = document.querySelector(".password-length-number");

rangeInput.oninput = function changeText() {
  let passwordLength = parseInt(rangeInput.value);
  passwordLengthNumber.textContent = passwordLength;
};

// Copy Password
const copyButton = document.querySelector(".copy-btn");
var copyText = document.getElementById("password-input");
copyButton.addEventListener("click", () => {
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
});

// Select Includes
let allIncludes = document.querySelectorAll(".include");
let allStrengthCheck = document.querySelectorAll(".strength-box");

allIncludes.forEach((include) => {
  const generatePasswordButton = document.querySelector(".generate-btn");
  generatePasswordButton.addEventListener("click", () => {
    let maxLength = rangeInput.value;
    let {
      uppercaseLetter,
      lowercaseLetter,
      number,
      symbols,
      uppercaseLowerCaseLetter,
      uppercaseLetterNumbers,
      uppercaseLetterLowercaseNumber,
      uppercaseLetterSymbols,
      lowercaseLetterSymbol,
      uppercaseLetterNumbersSymbols,
      uppercaseLowerCaseLetterSymbols,
      lowercaseLetterNumber,
      lowercaseLetterNumberSymbol,
      numbersSymbols,
      allInOnce,
    } = passwordCharecters();
    function passwordCharecters() {
      let uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
      let number = "123456789";
      let symbols = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";
      let uppercaseLowerCaseLetter =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let uppercaseLowerCaseLetterSymbols =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={[}]|:;<,>.?/";
      let uppercaseLetterNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
      let uppercaseLetterLowercaseNumber =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
      let uppercaseLetterSymbols =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+={[}]|:;<,>.?/";
      ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      let numbersSymbols = "123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/";
      let uppercaseLetterNumbersSymbols =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/";
      let lowercaseLetterNumber = "abcdefghijklmnopqrstuvwxyz123456789";
      let lowercaseLetterNumberSymbol =
        "abcdefghijklmnopqrstuvwxyz123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/";
      let lowercaseLetterSymbol =
        "abcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={[}]|:;<,>.?/";
      let allInOnce =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/";
      return {
        uppercaseLetter,
        lowercaseLetter,
        number,
        symbols,
        uppercaseLowerCaseLetter,
        uppercaseLetterNumbers,
        uppercaseLowerCaseLetterSymbols,
        uppercaseLetterLowercaseNumber,
        uppercaseLetterSymbols,
        uppercaseLetterNumbersSymbols,
        lowercaseLetterNumber,
        lowercaseLetterSymbol,
        lowercaseLetterNumberSymbol,
        numbersSymbols,
        allInOnce,
      };
    }
    function passwordConditions() {
      if (
        allIncludes[0].children.item(0).classList.contains("check") &&
        allIncludes[1].children.item(0).classList.contains("check") &&
        allIncludes[2].children.item(0).classList.contains("check") &&
        allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password += allInOnce[Math.floor(Math.random() * allInOnce.length)];
        }
        copyText.value = password;
      }
      if (
        !allIncludes[0].children.item(0).classList.contains("check") &&
        allIncludes[1].children.item(0).classList.contains("check") &&
        allIncludes[2].children.item(0).classList.contains("check") &&
        allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            lowercaseLetterNumberSymbol[
              Math.floor(Math.random() * lowercaseLetterNumberSymbol.length)
            ];
        }
        copyText.value = password;
      }
      if (
        !allIncludes[0].children.item(0).classList.contains("check") &&
        !allIncludes[1].children.item(0).classList.contains("check") &&
        allIncludes[2].children.item(0).classList.contains("check") &&
        allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            numbersSymbols[Math.floor(Math.random() * numbersSymbols.length)];
        }
        copyText.value = password;
      }
      if (
        !allIncludes[0].children.item(0).classList.contains("check") &&
        allIncludes[1].children.item(0).classList.contains("check") &&
        !allIncludes[2].children.item(0).classList.contains("check") &&
        !allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            lowercaseLetter[Math.floor(Math.random() * lowercaseLetter.length)];
        }
        copyText.value = password;
      }
      if (
        !allIncludes[0].children.item(0).classList.contains("check") &&
        allIncludes[1].children.item(0).classList.contains("check") &&
        allIncludes[2].children.item(0).classList.contains("check") &&
        !allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            lowercaseLetterNumber[
              Math.floor(Math.random() * lowercaseLetterNumber.length)
            ];
        }
        copyText.value = password;
      }
      if (
        allIncludes[0].children.item(0).classList.contains("check") &&
        allIncludes[1].children.item(0).classList.contains("check") &&
        allIncludes[2].children.item(0).classList.contains("check") &&
        !allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            uppercaseLetterLowercaseNumber[
              Math.floor(Math.random() * uppercaseLetterLowercaseNumber.length)
            ];
        }
        copyText.value = password;
      }
      if (
        allIncludes[0].children.item(0).classList.contains("check") &&
        !allIncludes[1].children.item(0).classList.contains("check") &&
        !allIncludes[2].children.item(0).classList.contains("check") &&
        allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            uppercaseLetterSymbols[
              Math.floor(Math.random() * uppercaseLetterSymbols.length)
            ];
        }
        copyText.value = password;
      }
      if (
        !allIncludes[0].children.item(0).classList.contains("check") &&
        allIncludes[1].children.item(0).classList.contains("check") &&
        !allIncludes[2].children.item(0).classList.contains("check") &&
        allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            lowercaseLetterSymbol[
              Math.floor(Math.random() * lowercaseLetterSymbol.length)
            ];
        }
        copyText.value = password;
      }
      if (
        allIncludes[0].children.item(0).classList.contains("check") &&
        allIncludes[1].children.item(0).classList.contains("check") &&
        !allIncludes[2].children.item(0).classList.contains("check") &&
        !allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            uppercaseLowerCaseLetter[
              Math.floor(Math.random() * uppercaseLowerCaseLetter.length)
            ];
        }
        copyText.value = password;
      }
      if (
        allIncludes[0].children.item(0).classList.contains("check") &&
        !allIncludes[1].children.item(0).classList.contains("check") &&
        allIncludes[2].children.item(0).classList.contains("check") &&
        !allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            uppercaseLetterNumbers[
              Math.floor(Math.random() * uppercaseLetterNumbers.length)
            ];
        }
        copyText.value = password;
      }
      if (
        allIncludes[0].children.item(0).classList.contains("check") &&
        !allIncludes[1].children.item(0).classList.contains("check") &&
        allIncludes[2].children.item(0).classList.contains("check") &&
        allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            uppercaseLetterNumbersSymbols[
              Math.floor(Math.random() * uppercaseLetterNumbersSymbols.length)
            ];
        }
        copyText.value = password;
      }
      if (
        allIncludes[0].children.item(0).classList.contains("check") &&
        !allIncludes[1].children.item(0).classList.contains("check") &&
        !allIncludes[2].children.item(0).classList.contains("check") &&
        !allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            uppercaseLetter[Math.floor(Math.random() * uppercaseLetter.length)];
        }
        copyText.value = password;
      }
      if (
        !allIncludes[0].children.item(0).classList.contains("check") &&
        !allIncludes[1].children.item(0).classList.contains("check") &&
        allIncludes[2].children.item(0).classList.contains("check") &&
        !allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password += number[Math.floor(Math.random() * number.length)];
        }
        copyText.value = password;
      }
      if (
        !allIncludes[0].children.item(0).classList.contains("check") &&
        !allIncludes[1].children.item(0).classList.contains("check") &&
        !allIncludes[2].children.item(0).classList.contains("check") &&
        allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password += symbols[Math.floor(Math.random() * symbols.length)];
        }
        copyText.value = password;
      }
      if (
        allIncludes[0].children.item(0).classList.contains("check") &&
        allIncludes[1].children.item(0).classList.contains("check") &&
        !allIncludes[2].children.item(0).classList.contains("check") &&
        allIncludes[3].children.item(0).classList.contains("check")
      ) {
        let password = "";
        for (let i = 0; i < maxLength; i++) {
          password +=
            uppercaseLowerCaseLetterSymbols[
              Math.floor(Math.random() * uppercaseLowerCaseLetterSymbols.length)
            ];
        }
        copyText.value = password;
      }
    }
    passwordConditions();
  });
  let inclusdeCheckBox = include.children.item(0);
  inclusdeCheckBox.addEventListener("click", () => {
    inclusdeCheckBox.classList.toggle("check");
    let allCheckedBoxes = document.querySelectorAll(".check");
    let strengthLevelText = document.querySelector(".strength");
    allStrengthCheck.forEach((strengthCheck) => {
      // Strength Levels
      let { firstStrength, thirdStrength, fourthStrength } =
        strengthLevelsBoxes();

      // Strength Colors
      const { easyLightGreen, goodYellow, mediumOrange, hardRed } =
        strengthColors();

      if (allCheckedBoxes.length === 0) {
        strengthLevelText.textContent = "what?";
        strengthCheck.style.backgroundColor = "transparent";
      } else if (allCheckedBoxes.length === 1) {
        strengthLevelText.textContent = "easy";
        strengthCheck.style.backgroundColor = "transparent";
        firstStrength.style.backgroundColor = `${easyLightGreen}`;
        strengthMod = "easy";
      } else if (allCheckedBoxes.length === 2) {
        strengthLevelText.textContent = "good";
        strengthCheck.style.backgroundColor = `${goodYellow}`;
        thirdStrength.style.backgroundColor = "transparent";
        fourthStrength.style.backgroundColor = "transparent";
        strengthMod = "good";
      } else if (allCheckedBoxes.length === 3) {
        strengthLevelText.textContent = "medium";
        strengthCheck.style.backgroundColor = `${mediumOrange}`;
        fourthStrength.style.backgroundColor = "transparent";
        strengthMod = "medium";
      } else if (allCheckedBoxes.length === 4) {
        strengthLevelText.textContent = "hard";
        strengthCheck.style.backgroundColor = `${hardRed}`;
        strengthMod = "hard";
      }

      function strengthLevelsBoxes() {
        let firstStrength = document.querySelector(".first-s");
        let secondStrength = document.querySelector(".second-s");
        let thirdStrength = document.querySelector(".third-s");
        let fourthStrength = document.querySelector(".fourth-s");
        return { firstStrength, thirdStrength, fourthStrength };
      }

      function strengthColors() {
        const easyLightGreen = "hsl(127.25, 100%, 82.16%)";
        const goodYellow = "hsl(54, 100%, 62%)";
        const mediumOrange = "hsl(42, 91%, 68%)";
        const hardRed = "hsl(4, 90%, 58%)";
        return { easyLightGreen, goodYellow, mediumOrange, hardRed };
      }
    });
  });
});
