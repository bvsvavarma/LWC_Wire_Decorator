public with sharing class AccountHelperLwc {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsData(){
        return [SELECT Id, Name, Industry, Rating 
                FROM Account
                WITH USER_MODE
                ];
    }
}