class Calculator {
  display: HTMLInputElement;
  buttons: HTMLButtonElement[];

  constructor() {
      this.display = document.createElement('input');
      this.display.setAttribute('type', 'text');
      document.body.appendChild(this.display);

      this.buttons = [];
      for (let i = 0; i < 10; i++) {
          const button = document.createElement('button');
          button.textContent = i.toString();
          button.addEventListener('click', () => {
              this.display.value += i.toString();
          });
          this.buttons.push(button);
      }

      const addButton = (value: string) => {
          const button = document.createElement('button');
          button.textContent = value;
          button.addEventListener('click', () => {
              this.display.value += value;
          });
          this.buttons.push(button);
      };

      addButton('+');
      addButton('-');
      addButton('*');
      addButton('/');

      const clearButton = document.createElement('button');
      clearButton.textContent = 'C';
      clearButton.addEventListener('click', () => {
          this.display.value = '';
      });
      this.buttons.push(clearButton);

      const calculateButton = document.createElement('button');
      calculateButton.textContent = '=';
      calculateButton.addEventListener('click', () => {
          try {
              this.display.value = eval(this.display.value);
          } catch (error) {
              this.display.value = 'Error';
          }
      });
      this.buttons.push(calculateButton);

      this.buttons.forEach(button => {
          document.body.appendChild(button);
      });
  }
}

new Calculator();