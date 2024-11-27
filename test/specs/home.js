//website we're testing
//title: Practice E-Commerce Site – SDET Unicorns
//url: https://practice.sdetunicorns.com/

//mocha framework needs a describe block, it describes the test
//this is our test suit
//home is the title, as we are testing the home page
describe('home', () => { 


    //it block is our actual test case, this is what gets executed
    //the string is the title of what this block does
    it('open url and check title', async () => {
        
        //steps go in here

        //open url
        await browser.url('https://practice.sdetunicorns.com/');

        //check title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });


    it('check about', async () => {

        //open url
        await browser.url('https://practice.sdetunicorns.com/about/');

        //check url
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });


    it('get started', async () => {
        
        //open url
        await browser.url('https://practice.sdetunicorns.com/');

        //click the button
        //$ finds an element
        await $('#get-started').click();

        //check url
        await expect(browser).toHaveUrl(expect.stringContaining('#get-started'));

        //! not working
        //TypeError: expect(...).toHaveUrlContaining is not a function
        //maybe syntax has changed in latest versions, bc 'toHave...Containing' functions arent working
        //await expect(browser).toHaveUrlContaining('get-started');
    });


    it('check button', async () => {
        
        //open url
        await browser.url('https://practice.sdetunicorns.com/');

        //find button
        const elem = await $('#get-started');

        //check if there
        await expect(elem).toBeDisplayed();
        await expect(elem).toBeClickable();
    });


    it('check logo', async () => {
        
        //open url
        await browser.url('https://practice.sdetunicorns.com/');

        //click the logo
        await $('//img[@alt="Practice E-Commerce Site"]').click();

        //check url
        await expect(browser).not.toHaveUrl('https://practice.sdetunicorns.com/#get-started');
    });

    
    it('find heading', async () => {
        
        //open url
        await browser.url('https://practice.sdetunicorns.com/');

        //find h1
        await $('//img[@alt="Practice E-Commerce Site"]').click();

        //check url
        await expect(browser).not.toHaveUrl('https://practice.sdetunicorns.com/#get-started');
    });
});