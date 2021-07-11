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
public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        /*List<Contact> lContactLst = [SELECT FirstName, LastName, Email 
                                    FROM Contact
                                    WITH SECURITY_ENFORCED
                                    ORDER BY FirstName];
        return lContactLst;*/
        throw new AuraHandledException('Forced error');
    }
}