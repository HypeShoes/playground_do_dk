/**
 * @description       : 
 * @author            : Matheus Branco (matheus.branco@globant.com)
 * @group             : 
 * @last modified on  : 06-20-2021
 * @last modified by  : Matheus Branco (matheus.branco@globant.com)
 * Modifications Log 
 * Ver   Date         Author                                        Modification
 * 1.0   06-20-2021   Matheus Branco (matheus.branco@globant.com)   Initial Version
**/
public with sharing class AccountListControllerLwc {
    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue){
        if(annualRevenue == null){
            annualRevenue = 0;
        }
        List<Account> lAccountLst = [SELECT Id, Name, AnnualRevenue FROM Account WHERE AnnualRevenue >= :annualRevenue];
        return lAccountLst;
    }
}