afterEach(() => {
    driver.reset();
});

describe("Fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", () => {
    it("Entra no App Verifica se o título do app é API Demos", async () => {
       const textoTitulo = await $("android.widget.TextView").getText();
       expect(textoTitulo).toBe("API Demos");  
    });

    it.only("Verifica fluxo dos botões até a caixa de mensagem", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click(); //BOtão Alert Dialogs
        await $("android.widget.Button").click(); //Botão mensagem: "OK CANCEL DIALOG WITH MESSAGE"
            const caixaMensage = await $("android.widget.FrameLayout").isDisplayed();
            expect(caixaMensage).toBe(true);
        const botaoCancel = await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').isDisplayed();
        expect (botaoCancel).toBe(true);
        //await $('android=new UiSelector().text("OK").className("android.widget.Button")').isDisplayed();
    }); 
});

describe("App/Alert Dialogs/LIST DIALOG", () =>{
    it("Acessibilidade Botoes", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click(); //Botão "Alert Dialogs"
        await $('android=new UiSelector().text("List dialog").className("android.widget.Button")').click(); //Lista de diálogos
        //await $("id=alertTitle").isDisplayed(); // título
        //await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed();
        //await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed();
        //await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed();
        //await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed();
    });
}); 

describe("App/Fragment/Hide and Show", () => {  
    it("teste" , async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click(); //Botão "Fragment"
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click(); //Botao Hide and Show
        const btnHide1 = await $("id=frag1hide").getText();
        expect(btnHide1).toBe("HIDE");
        const btnHide2 = await $("id=frag2hide").getText();
        expect(btnHide2).toBe("HIDE");
    }); 
});

describe("App/Action Bar/Display options-DISPLAY_HOME_AS_UP", () => {
    it("Testando caminho", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_home_as_up").isDisplayed(); 
        await $("id=toggle_show_home").isDisplayed(); 
        await $("id=toggle_use_logo").isDisplayed(); 
        await $("id=toggle_show_title").isDisplayed(); 
        await $("id=toggle_show_custom").isDisplayed(); 
        await $("id=toggle_navigation").isDisplayed(); 
        await $("id=cycle_custom_gravity").isDisplayed(); 
    }); 
});

describe("App/Action Bar/Display options-DISPLAY_SHOW_TITLE", () =>{
    it("Testando botao title", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_title").click();
    });
});

describe("App/Action Bar/Display options-DISPLAY_SHOW_CUSTOM", () =>{
    it("Testando botao custom", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_custom").click();
    });
});

describe("App/Action Bar/Display options-DISPLAY_SHOW_NAVIGATION", () =>{
    it("Testando botao navigation", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
    });
});
