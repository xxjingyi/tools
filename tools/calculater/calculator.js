let display = document.querySelector('.display');

function appendToDisplay(value) {
	display.textContent += value;
}

function clearDisplay() {
	display.textContent = '';
}

function calculate() {
	let result = eval(display.textContent);
	display.textContent = result;
}

// 监听键盘事件
document.addEventListener('keydown', function(event) {
	// 数字键
	if (event.keyCode >= 48 && event.keyCode <= 57) {
		appendToDisplay(String.fromCharCode(event.keyCode));
	}
	// 小数点
	else if (event.keyCode === 190 || event.keyCode === 110) {
		appendToDisplay('.');
	}
	// 加号
	else if (event.keyCode === 187 || event.keyCode === 107) {
		appendToDisplay('+');
	}
	// 减号
	else if (event.keyCode === 189 || event.keyCode === 109) {
		appendToDisplay('-');
	}
	// 乘号
	else if (event.keyCode === 56 && event.shiftKey) {
		appendToDisplay('*');
	}
	// 除号
	else if (event.keyCode === 191 || event.keyCode === 111) {
		appendToDisplay('/');
	}
	// 左括号
	else if (event.keyCode === 57 && event.shiftKey) {
		appendToDisplay('(');
	}
	// 右括号
	else if (event.keyCode === 48 && event.shiftKey) {
		appendToDisplay(')');
	}
	// 清空
	else if (event.keyCode === 8 || event.keyCode === 46) {
		clearDisplay();
	}
	// 计算结果
	else if (event.keyCode === 13) {
		calculate();
	}
});
