// const inputSlider = document.querySelector("[data-lengthSlider]");
// const lengthDisplay = document.querySelector("[data-lengthNumber]");
// const passswordDisplay = document.querySelector("[data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
// const copyMsg = document.querySelector("[data-copyMsg]");
// const uppercaseCheck = document.querySelector("#uppercase");
// const lowercaseCheck = document.querySelector("#lowercase");
// const numbersCheck = document.querySelector("#numbers");
// const symbolsCheck = document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generateBtn = document.querySelector(".generateButton");
// const allCheckBox = document.querySelectorAll("input[type=checkbox]");

// let password = "";
// let passwordLength = 10;
// let checkCount = 0;
// let symbol = "!-+*/%^{}[]@#$&()_~|";
// //
// handleSilder();
// // set password length
// function handleSilder() {
//   inputSlider.value = passwordLength;
//   lengthDisplay.innerText = passwordLength;
// }

// function setIndicator() {
//   indicator.style.backgroundColor = color;
//   indicator.style.boxShadow = `10px 20px 30px ${color}`;
// }

// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function generateRandomNumber() {
//   return getRandomInteger(0, 9);
// }

// function generateLowerCase() {
//   // 92 -> a and 123 -> z we will convert it using String.fromCharCode
//   return String.fromCharCode(getRandomInteger(97, 123));
// }

// function generateUpperCase() {
//   return String.fromCharCode(getRandomInteger(65, 91));
// }

// function generateSymbol() {
//   let size = symbol.length;
//   let randomIndex = getRandomInteger(0, size);
//   return symbol.charAt(getRandomInteger(randomIndex));
// }

// function calculateStrength() {
//   let hasUpper = false;
//   let hasLower = false;
//   let hasNumber = false;
//   let hasSymbol = false;

//   //   checking the checked boxes
//   if (uppercaseCheck.checked) {
//     hasUpper = true;
//   }
//   if (lowercaseCheck.checked) {
//     hasLower = true;
//   }
//   if (numbersCheck.checked) {
//     hasNumber = true;
//   }
//   if (symbolsCheck.checked) {
//     hasSymbol = true;
//   }

//   //   setting rule for the indicator
//   if (hasUpper && hasNumber && hasSymbol) {
//     setIndicator("#0f0");
//   } else if ((hasUpper || hasLower) && hasNumber) {
//     setIndicator("#ff0");
//   } else {
//     setIndicator("#f00");
//   }
// }

// // await words only in async function
// async function copyContent() {
//   // generated password to the clipboard
//   // clip board.writeText
//   try {
//     await navigator.clipboard.writeText(passswordDisplay.value);
//     copyMsg.innerText = "copied";
//   } catch (error) {
//     copyMsg.innerText = "failed to copy";
//   }

//   //   to make copy span visible
//   copyMsg.classList.add("active");
//   setTimeout(() => {
//     copyMsg.classList.remove("active");
//   }, 2000);
// }

// function sufflePassword(array)
// {
//     // fisher yates method
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     let str = "";
//     array.forEach((el) => (str += el));
//     return str;
// }

// // changes value of slider
// inputSlider.addEventListener('input',(e)=>{
//     passwordLength = e.target.value;
//     handleSilder();
// });

// copyBtn.addEventListener('click',()=>{
//     if(passswordDisplay.value) // if non empty
//     {
//         copyContent();
//     }
// });

// function handleCheckBox()
// {
//     checkCount = 0;
//     allCheckBox.forEach((checkbox)=>{
//         if(checkbox.checked)
//         {
//             checkCount++;
//         }
//     });

//     // special case
//     if(passwordLength < checkCount)
//     {
//         passwordLength = checkCount;
//         handleSilder();
//     }
// }

// allCheckBox.forEach((checkbox)=>{
//     checkbox.addEventListener('click',handleCheckBox)
// });

// generateBtn.addEventListener('click',()=>{
//     // none of the checkbox is selected
//     if(checkCount <= 0)
//     {
//         return;
//     }
//     if(passwordLength < checkCount)
//     {
//         passwordLength = checkCount;
//         handleSilder();
//     }

//     // find new password

//     // remove old password
//     password = "";
    
//     // put mentioned by checkboxes
//     // if(uppercaseCheck.checked)
//     // {
//     //     password += generateUpperCase();
//     // }

//     // if(lowercaseCheck.checked)
//     // {
//     //     password += generateLowerCase();
//     // }
    
//     // if(numbersCheck.checked)
//     // {
//     //     password += generateRandomNumber();
//     // }

//     // if(symbolsCheck.checked)
//     // {
//     //     password += generateSymbol();
//     // }

//     let functionArr = [];
//     if(uppercaseCheck.checked)
//     {
//         functionArr.push(generateUpperCase());
//     }

//     if(lowercaseCheck.checked)
//     {
//         functionArr.push(generateLowerCase());
//     }
    
//     if(numbersCheck.checked)
//     {
//         functionArr.push(generateRandomNumber);
//     }

//     if(symbolsCheck.checked)
//     {
//         functionArr.push(generateSymbol());
//     }

//     // compulsory addition
//     for(let i = 0;i<functionArr.length;i++)
//     {
//         password += functionArr[i]();
//     }

//     // remaining addition
//     for(let i = 0;i<passwordLength-functionArr.length;i++)
//     {
//         let randomIndex = getRandomInteger(0,functionArr.length);
//         password += functionArr[randomIndex]();
//     }

//     // shuffle the password
//     password = sufflePassword(Array.from(password));

//     // show in UI
//     passswordDisplay.value = password;

//     // calculate strength
//     calculateStrength();
// });
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//ste strength circle color to grey
setIndicator("#ccc")

//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = 
    ((passwordLength - min)*100/(max-min)) 
    + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px ${color}`;
    // indicator.style.cssText = `
    // box-shadow: 0px 0px 12px ${color}`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
    {
        copyContent();
    }
});

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
         /*
         funcArr[randIndex]() invokes (calls) the function 
         retrieved from funcArr at the index specified by randIndex.
         */
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();
});