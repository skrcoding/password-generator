import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //declaring the initial length as 0 and setting the values to false when the input field or the check boxes are not checked.
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  // password value set to empty, will be displayed when we click on the generate button.
  password = '';
  //creating call back methods to bind with our html elements , the below syntax makes the inital values we set as false to true when condition is met.
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeLength(value: string) {
    // parse the value varible and pull a number
    const parsedValue = parseInt(value);
    //checking to see if we are taking a look at not a number
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    //creating a whole list of possible combinations for our password generator which includes numbers, letters, and symbols
    const numbers = '124567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
