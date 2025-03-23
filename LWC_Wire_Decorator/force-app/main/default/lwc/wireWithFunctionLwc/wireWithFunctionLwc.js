import { LightningElement, wire } from 'lwc';
import getAccountsData from '@salesforce/apex/AccountHelperLwc.getAccountsData';
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Account Rating', fieldName: 'Rating' }
];

export default class WireWithFunctionLwc extends LightningElement {
    accountsData;
    errorData;

    columns = columns;
    @wire(getAccountsData)
        accountDataFunction({data, error}){
            if(data){
                console.log("data", data);
                let updatedAccount = data.map((currItem) => {
                    let updatedObject = {};
                    if(!currItem.hasOwnProperty('Rating')){
                            updatedObject = {...currItem, Rating : "Warm"};
                    }else{
                        updatedObject = {...currItem}
                    }
                    return updatedObject
                });
                console.log("updatedAccount", updatedAccount);
                this.accountsData = updatedAccount;
                this.errorData = null;
            }else if(error){
                console.log("error", error);
                this.errorData = error;
                this.accountsData =  null;
               
            }
    }
}