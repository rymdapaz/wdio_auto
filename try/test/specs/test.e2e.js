const homePage = require('../pageobjects/homePage.js');

describe('Sidebar filtres', () => {

    it('Age sidebar filter', async () => {
        await browser.url('http://lb-server-347586907.us-east-2.elb.amazonaws.com/');
        await homePage.female_teen_filter();
        await expect(homePage.teen_filter_on_page).toHaveTextContaining('Teen 18-20');
        await homePage.header_logo.click()
        await homePage.female_adult_filter();
        await expect(homePage.teen_filter_on_page).toHaveTextContaining('Adult 21-29');
        await homePage.header_logo.click()
        await homePage.female_milf_filter();
        await expect(homePage.teen_filter_on_page).toHaveTextContaining('MILF 30+');
        await homePage.header_logo.click()
        await homePage.female_mature_filter();
        await expect(homePage.teen_filter_on_page).toHaveTextContaining('Mature 40+');
        await homePage.header_logo.click()
        await homePage.female_granny_filter();
        await expect(homePage.teen_filter_on_page).toHaveTextContaining('Granny 55+');
    });

    


});


