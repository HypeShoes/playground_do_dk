import { LightningElement, track } from 'lwc';

export default class BmiCalculator extends LightningElement {
    cardTitle = 'BMI Calculator';

    heightValue;
    weightValue;

    @track bmi;
    /*changePrivatePropertyHandler(){
        this.cardTitle = 'Changed Value';
        console.log('value: '+this.cardTitle);
    }*/

    calculateBMI(){
        this.bmi = this.weightValue/(this.heightValue*this.heightValue);
    }
    

    onHeightChange(event){
        this.heightValue = parseFloat(event.target.value);
    }


    onWeightChange(event){
        this.weightValue = parseFloat(event.target.value);
    }
}