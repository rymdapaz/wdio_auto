
class homePage {
    get female_gender() {
        return $('#header-female')
    }

    get age_filter_female() {
        return $('//div[@class="sideBar__item"][1]')
    }

    get teen_female() {
        return $('//div[@id="Age_Teen 18-20"]')
    }

    get adult_female() {
        return $('//div[@id="Age_Adult 21-29"]')
    }

    get milf_female() {
        return $('//div[@id="Age_MILF 30+"]')
    }

    get mature_female() {
        return $('//div[@id="Age_Mature 40+"]')
    }

    get granny_female() {
        return $('//div[@id="Age_Granny 55+"]')

    }

    get teen_filter_on_page() {
        return $('.selectedFilters__filter')
    }

    get header_logo() {
        return $('#header-logo')
    }


    female_teen_filter() {
        this.age_filter_female.click();
        this.teen_female.waitForExist();
        this.teen_female.click();
    }

    female_adult_filter() {
        this.age_filter_female.waitForExist();
        this.age_filter_female.click();
        this.adult_female.waitForExist();
        this.adult_female.click();
    }

    female_milf_filter() {
        this.age_filter_female.waitForExist();
        this.age_filter_female.click();
        this.milf_female.waitForExist();
        this.milf_female.click();
    }

    female_mature_filter() {
        this.age_filter_female.waitForExist();
        this.age_filter_female.click();
        this.mature_female.waitForExist();
        this.mature_female.click();
    }

    female_granny_filter() {
        this.age_filter_female.waitForExist();
        this.age_filter_female.click();
        this.granny_female.waitForExist();
        this.granny_female.click();
    }


    
}


module.exports = new homePage()