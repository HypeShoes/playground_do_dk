/**
 * @description       : 
 * @author            : Matheus Branco (matheus.branco@globant.com)
 * @group             : 
 * @last modified on  : 06-12-2021
 * @last modified by  : Matheus Branco (matheus.branco@globant.com)
 * Modifications Log 
 * Ver   Date         Author                                        Modification
 * 1.0   06-12-2021   Matheus Branco (matheus.branco@globant.com)   Initial Version
**/
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        /*return [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];*/
        throw new AuraHandledException('Forced error');
    }
}