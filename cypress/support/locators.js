const locators = {
    login: {
        user: '[data-test="email"]',
        password: '[data-test="passwd"]',
        btn_entrar: '[class*= btn-primary]',
    },

    menu: {
        settings: '[data-test=menu-settings]',
        contas: '[href="/contas"]',
    },
    
    contas: {
        nome: '[data-test=nome]',
        btn_salvar: '.btn',
        xp_btn_alterar: "//table//td[contains(., 'usuario teste')]/..//i[@class='far fa-edit']",
    },

    message: {
        alert_message: '[class*=toast]',
    }
    
}

export default locators;       











