import { browser, by, element, ElementFinder,Key, promise } from 'protractor';
import{page} from "./page.e2e-spec";
export class bookCard extends page{
    private bookDetailsTitleInputTag='data-test-book-details-title-input';
    private bookDetailsTitleInput= element(by.css(`[${this.bookDetailsTitleInputTag}]`));
    private bookDetailsSaveButtonTag='data-test-book-details-save-button';
    private bookDetailsSaveButton= element(by.css(`[${this.bookDetailsSaveButtonTag}]`));
    private bookDetailsTitleTag= 'data-test-book-details-title';
    private bookDetailCardTitle=   element(by.css(`[${this.bookDetailsTitleTag}]`));
    private bookDetailsAuthorTag='data-test-book-details-author-input';
    private bookDetailsAuthor=element(by.css(`[${this.bookDetailsAuthorTag}]`));
    private bookDetailsPublisherTag ='data-test-book-details-publisher-input';
    private bookDetailsPublisher= element(by.css(`[${this.bookDetailsPublisherTag}]`));
    private bookDetailYearInputTag='data-test-book-details-year-input';
    private bookDetailYearInput= element(by.css(`[${this.bookDetailYearInputTag}]`));
    private bookDetailsYearsErrorTag='data-test-book-details-year-error';
    private bookDetailsYearsError= element(by.css(`[${this.bookDetailsYearsErrorTag}]`));
    private bookDetailsTitleErrorTag='data-test-book-details-title-error';
    private bookDetailsTitleError=  element(by.css(`[${this.bookDetailsTitleErrorTag}]`));
    private bookDetailsAuthorErrorTag='data-test-book-details-Author-error';
    private bookDetailsAuthorError=element(by.css(`[${this.bookDetailsAuthorErrorTag}]`));
    private bookDetailsPublisherErrorTag='data-test-book-details-publisher-error';
    private bookDetailsPublisherError=element(by.css(`[${this.bookDetailsPublisherErrorTag}]`));




setBookTitle(bookTitle:string)
{
    this.bookDetailsTitleInput.clear();
    this.bookDetailsTitleInput.sendKeys(bookTitle);
}
setBookAuthor(bookAuthor:string)
{
    this.bookDetailsAuthor.clear();
    this.bookDetailsAuthor.sendKeys(bookAuthor);
}
setBookPubisher(bookPublisher:string)
{
    this.bookDetailsPublisher.clear();
    this.bookDetailsPublisher.sendKeys(bookPublisher);
}
setBookYear(bookYear:number)
{
    this.bookDetailYearInput.clear();
    this.bookDetailYearInput.sendKeys(bookYear);
}
saveBook(){
    this.bookDetailsSaveButton.click();
}
getBookCardTitle(title:string):ElementFinder
{
    this.bookDetailCardTitle= element(by.cssContainingText(`[${this.bookDetailsTitleTag}]`, title))
    return this.bookDetailCardTitle;
}
getBookCardAuthor():promise.Promise<string>
{
    return this.bookDetailsAuthor.getAttribute('value');
}
getBookCardPublisher():promise.Promise<string>
{
    return this.bookDetailsPublisher.getAttribute('value');
}
getBookCardYear():promise.Promise<string>
{
    return this.bookDetailYearInput.getAttribute('value');
}

checkYearErrorMessage():promise.Promise<boolean>
{
   return this.bookDetailsYearsError.isPresent()
}
checkBookTitleErrorMessage():promise.Promise<boolean>
{
   return this.bookDetailsTitleError.isPresent()
}

checkAuthorErrorMessage():promise.Promise<boolean>
{
   return this.bookDetailsAuthorError.isPresent()
}

checkPublisherErrorMessage():promise.Promise<boolean>
{
   return this.bookDetailsPublisherError.isPresent()
}

}