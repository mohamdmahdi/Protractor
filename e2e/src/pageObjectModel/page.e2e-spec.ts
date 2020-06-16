import { browser, by, element } from 'protractor';
export class page{
    private _pageTitle:string


     public pageTitle(): string
    {
        browser.getTitle().then(title =>{
            this._pageTitle = title;
        })
        return this._pageTitle
    }

    public openBrowser(url:string){
        browser.get(url);

    }

    public dispose()
    {
        browser.driver.close();
    }


}