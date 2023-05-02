let output = document.getElementById('output');
let result;

function appendToOutput(value) {
  output.value += value;
}

function clearScreen() {
  output.value = '';
}

function saveResult() {
  result = eval(output.value);
  alert(`结果 ${result} 已记录`);
}

function recallResult() {
  if (result != null) {
    output.value += result;
  }
}

function deleteLastInput() {
  let currentValue = output.value;
  output.value = currentValue.substring(0, currentValue.length - 1);
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    alert('无效的计算表达式');
    clearScreen();
  }
}
