'use strict'; // necessary for es6 output in node

import { browser, by, element } from 'protractor';
import{bookCard} from './pageObjectModel/bookCard.e2e-spec';
var data= require('./data.json') ;

describe('Book Actions Test',function(){
    let page ;

    beforeEach(()=>{
        page = new bookCard()
        page.openBrowser(`${browser.baseUrl}#/books/1`);
    });
    afterEach( () => {
        browser.driver.quit();
        browser.restart();
      });
 it('Change Book Title', function(){
        page.setBookTitle(data.bookTitle);
        page.saveBook();
        let result = page.getBookCardTitle(data.bookTitle);
       expect(result.getText()).toEqual(data.bookTitle);
        page.saveBook();
        page.dispose();
    });
it ('Change the Book Author', function(){
    page.setBookAuthor(data.bookAuthor);
    page.saveBook();
    let author= page.getBookCardAuthor();
    author.then((text)=>{
        expect(text).toBe(data.bookAuthor);
    })
    page.dispose();

})
it ('Change the Book Publisher', function(){
    page.setBookPubisher(data.bookPublisher);
    page.saveBook();
    let publisher= page.getBookCardPublisher();
    publisher.then((text)=>{
        expect(text).toBe(data.bookPublisher);
    })
    page.dispose();
})
it ('Change the Book Publish Year', function(){
    page.setBookYear(data.publishYear);
    page.saveBook();
    let year= page.getBookCardYear();
    year.then((year)=>{
        expect(year).toBe(data.publishYear);
    })
    page.dispose();
})
it ('Enter Invalid Date in publisher with string', function(){
    page.setBookYear("5555555555555555555555555555555555555");
    page.saveBook();
    let errorflag= page.checkYearErrorMessage();
    errorflag.then((flag)=>{
        expect(flag).toBe(false,'An error should be appear since it is long invalid number and no data should be entered');
    })
    page.dispose();
})
it ('Adding Book without a title',function(){
        page.setBookTitle('');
        page.saveBook();
        let errorflag= page.checkBookTitleErrorMessage();
        errorflag.then((flag)=>{
            expect(flag).toBe(false,'An error should be appear since the books has no title');
        })
        page.saveBook();
        browser.sleep(5000);
        page.dispose();
})
it ('Adding Book without a Author',function(){
    page.setBookTitle('');
    page.saveBook();
    let errorflag= page.checkAuthorErrorMessage();
    errorflag.then((flag)=>{
        expect(flag).toBe(false,'An error should be appear since the books has no Author');
    })
    page.saveBook();
    page.dispose();

})
it ('Adding Book without a publisher',function(){
    page.setBookTitle('');
    page.saveBook();
    let errorflag= page.checkPublisherErrorMessage();
    errorflag.then((flag)=>{
        expect(flag).toBe(false,'An error should be appear since the books has no publisher');
    })
    page.saveBook();
    page.dispose();

})
})


