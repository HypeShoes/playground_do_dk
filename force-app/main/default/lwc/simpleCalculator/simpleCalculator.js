import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResult = [];
    @track showPreviousResult = false;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        } else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(event){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+' + '+secondN+' is '+(firstN + secondN);
        this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN+secondN}`;
        this.previousResult.push(this.currentResult);
    }

    subHandler(event){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+' + '+secondN+' is '+(firstN + secondN);
        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN-secondN}`;
        this.previousResult.push(this.currentResult);
    }

    multiplyHandler(event){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+' + '+secondN+' is '+(firstN + secondN);
        this.currentResult = `Result of ${firstN} x ${secondN} is ${firstN*secondN}`;
        this.previousResult.push(this.currentResult);
    }

    divisionHandler(event){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult = 'Result of '+firstN+' + '+secondN+' is '+(firstN + secondN);
        this.currentResult = `Result of ${firstN} : ${secondN} is ${firstN/secondN}`;
        this.previousResult.push(this.currentResult);
    }

    showPreviousResultToggle(event){
        this.showPreviousResult = event.target.checked;
    }
}