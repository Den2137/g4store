class HomePage {

    visit(){
        cy.visit('https://automationteststore.com/');

    }
    getloginorRegisterButton(){
        
        cy.contains('a', 'Login or register').click();
    }
}

export