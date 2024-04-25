var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this.display = document.createElement('input');
        this.display.setAttribute('type', 'text');
        document.body.appendChild(this.display);
        this.buttons = [];
        var _loop_1 = function (i) {
            var button = document.createElement('button');
            button.textContent = i.toString();
            button.addEventListener('click', function () {
                _this.display.value += i.toString();
            });
            this_1.buttons.push(button);
        };
        var this_1 = this;
        for (var i = 0; i < 10; i++) {
            _loop_1(i);
        }
        var addButton = function (value) {
            var button = document.createElement('button');
            button.textContent = value;
            button.addEventListener('click', function () {
                _this.display.value += value;
            });
            _this.buttons.push(button);
        };
        addButton('+');
        addButton('-');
        addButton('*');
        addButton('/');
        var clearButton = document.createElement('button');
        clearButton.textContent = 'C';
        clearButton.addEventListener('click', function () {
            _this.display.value = '';
        });
        this.buttons.push(clearButton);
        var calculateButton = document.createElement('button');
        calculateButton.textContent = '=';
        calculateButton.addEventListener('click', function () {
            try {
                _this.display.value = eval(_this.display.value);
            }
            catch (error) {
                _this.display.value = 'Error';
            }
        });
        this.buttons.push(calculateButton);
        this.buttons.forEach(function (button) {
            document.body.appendChild(button);
        });
    }
    return Calculator;
}());
new Calculator();
