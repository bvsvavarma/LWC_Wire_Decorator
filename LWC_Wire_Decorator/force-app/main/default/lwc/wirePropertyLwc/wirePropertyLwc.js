import { LightningElement, wire } from 'lwc';
import getAccountsData from '@salesforce/apex/AccountHelperLwc.getAccountsData';

const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Account Rating', fieldName: 'Rating' }
];
export default class WirePropertyLwc extends LightningElement {
    
    columns = columns;

    @wire(getAccountsData)
    accounts; //accounts is property
    //actually data will be stored in accounts.data
}