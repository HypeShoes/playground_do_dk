import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingComponent extends LightningElement {
    @track displayDiv = false;
    @track cityList = ['São Paulo','Santos','Sorocaba','Mongagua','Boituva', 'Osasco'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}