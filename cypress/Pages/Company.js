"use strict";
class Company {
    waitforPageLoad (){
        cy.get('h3.pull-left').should('contain', 'Companies');
    }

    waitforCompanyCreation(){
        cy.get('#companyTable>tbody>tr>td>div>a').should('be.visible');
    }

    get addNewButton() {
        return cy.get("#toolbar > div.std-toolbar.btn-group > a > span > span")
        .first();
    }
    get enterAndSearchForTheCompany() {
        return cy.get('table[class="table table-hover table-striped table-bordered company-list"]>tbody>tr>td>div>a');
    }

    get companyName() {
        return  cy.get("#company_companyname");
    }

    get companyCity() {
        return  cy.get('#company_companycity');
    }

    waitforCompanyEditPageOpen(){
        cy.get('#company_companycity').should('be.visible');
    }

    get companyAddressOne() {
        return  cy.get('#company_companyaddress1');
    }

    get companyAddressTwo() {
        return  cy.get('#company_companyaddress2');
    }

    get companyZipCode() {
        return  cy.get('#company_companyzipcode');
    }

    get companyEmailAddress() {
        return  cy.get('#company_companyemail');
    }

    get companyPhoneNumber() {
        return  cy.get('#company_companyphone');
    }

    get companyWebsite() {
        return  cy.get('#company_companywebsite');
    }

    get saveButton() {
        return   cy.get("#company_buttons_save_toolbar");
    }

    get clickCompanyEdit() {
        return   cy.get('tbody > tr > :nth-child(1) > .input-group > .input-group-btn > .btn');
    }

    get editCompany() {
        return   cy.get('#companyTable > tbody > tr:nth-child(1) > td:nth-child(1) > div > div > ul > li:nth-child(1) > a')
    }

    waitTillSearchResultGetsDisplayed(){
        cy.get('#companyTable>tbody>tr>td>a').should('not.be.empty');
    }
  
}
const company = new Company();
module.exports = company;
