import { LightningElement, wire } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue'

export default class AccountFinder extends LightningElement {
    annualRevenue = 0.00;
    
    handleChange(event) {
        this.annualRevenue = event.detail.value;
    }
    reset() {
        this.annualRevenue = 0.00;
    }

    @wire(queryAccountsByRevenue, {annualRevenue: '$annualRevenue'}) accountAnnualRevenue;
}