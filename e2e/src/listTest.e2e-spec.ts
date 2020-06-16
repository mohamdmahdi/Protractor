'use strict'; // necessary for es6 output in node

import { browser, by, element } from 'protractor';
import{homePage} from './pageObjectModel/homePage.e2e-spec';



describe('List Menue', function(){
    let page ;
    let filterText:string = 'geek love' ;
    let filterNewText:string= 'infinite jest';
    let bookTitle:string = 'lolita' ;

    beforeEach(()=>{
        browser.restart();
        page = new homePage()
        page.openBrowser(browser.baseUrl);
    });
    afterEach( () => {

        browser.driver.quit();
        browser.restart();
      });

    it ('Filter A Book', function(){
        page.setFilter(filterText);
        let result = page.getBookCard(filterText);
        expect(result.getText()).toEqual(filterText);
        page.dispose();
    });

    it('Number of Books are Display', function(){
       let bookscount= page.getNumberOfBooks()
       bookscount.then((number)=>{
        expect(number).toBeGreaterThan(0);
       })
        page.dispose();
    });

    it('Drop A Filter', function(){
        page.setFilter(filterNewText);
        browser.sleep(3000)
        page.clearFilter();
        expect(page.getNumberOfBooks()).toBeGreaterThan(1);
        page.dispose();

    });
    it ('Click A Book', function(){
        page.clickBook(bookTitle);
        let result = page.getBookCard(bookTitle);
        expect(result.getText()).toEqual(bookTitle);
        page.dispose();
    });



})

