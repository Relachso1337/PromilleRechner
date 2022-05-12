let A = 100;

const radioButtons = document.querySelectorAll('input[name="gender"]');
function selectgender() {
  let selectedGender;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedGender = radioButton.value;
      break;
    }
  }
  console.log(selectedGender);
  if (selectedGender == "MALE") {
    return  0.7;
  } else {
    return 0.6;
  }
}

function calculate() {
  let p = document.getElementById("weight").value;
  let r = selectgender();
  let BAK = Math.round(100 * (A / (p * r))) / 100;
  document.getElementById("result").innerHTML = BAK;
}

document.getElementById("calculateButton").addEventListener("click", calculate);
