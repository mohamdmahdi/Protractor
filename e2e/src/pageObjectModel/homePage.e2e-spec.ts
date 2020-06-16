import { browser, by, element, ElementFinder,Key, promise } from 'protractor';
import{page} from "./page.e2e-spec";
export class homePage extends page{
private filterInputTag= 'data-test-filter-input';
private bookTitleTag='data-test-book-title';
private bookDetailsTitleTag= 'data-test-book-details-title';
private bookDeleteIconeTag = 'data-test-book-delete-icon';
private filterInput = element(by.css(`[${this.filterInputTag}]`));
private bookTitleinList= element(by.css(`[${this.bookTitleTag}]`));
private bookTitlesList= element.all(by.css(`[${this.bookTitleTag}]`));
private bookDetailCardTitle=   element(by.css(`[${this.bookDetailsTitleTag}]`));


setFilter(bookTitle:string)
{
    this.filterInput.clear();
    this.filterInput.sendKeys(bookTitle);
    this.bookTitleinList.click();
}

clickBook(bookTitle:string)
{
    this.bookTitleinList = element(by.cssContainingText(`[${this.bookTitleTag}]`, bookTitle))
    this.bookTitleinList.click();
}

getNumberOfBooks():promise.Promise<number>
{

   var counts= this.bookTitlesList.count();
    return counts;
}

clearFilter()
{
    this.setFilter(' ');
}

getBookCard(title:string):ElementFinder
{
    this.bookDetailCardTitle= element(by.cssContainingText(`[${this.bookDetailsTitleTag}]`, title))
    return this.bookDetailCardTitle;
}

}