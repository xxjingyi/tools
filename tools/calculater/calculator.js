let output = document.getElementById('output');

function appendToOutput(value) {
  output.value += value;
}

function clearOutput() {
  output.value = '';
}

function calculate() {
  try {
    output.value = eval(output.value);
  } catch (error) {
    alert('无效的计算表达式');
    clearOutput();
  }
}
