afterEach(() => {
    driver.reset();
});

describe("Fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", () => {
    xit("Entra no App Verifica se o título do app é API Demos", async () => {
       const textoTitulo = await $("android.widget.TextView").getText();
       expect(textoTitulo).toBe("API Demos");  
    });

    xit("Verifica fluxo do caminho e acesso a caixa de mensagem - CANCEL e OK", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click(); 
        await $("android.widget.Button").click(); //Botão mensagem: "OK CANCEL DIALOG WITH MESSAGE"
            const caixaMensage = await $("android.widget.FrameLayout").isDisplayed();
            expect(caixaMensage).toBe(true);
        const buttonCancel = await $('android=new UiSelector().text("Cancel").className("android.widget.Button")').isDisplayed();
        expect(buttonCancel).toBe(true);
        const buttonOK = await $('android=new UiSelector().text("OK").className("android.widget.Button")').isDisplayed();
        expect(buttonOK).toBe(true);
    }); 
});

describe("App/Alert Dialogs/LIST DIALOG", () =>{
    xit("Verifica fluxo do caminho e acessibilidade dos botões", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click(); //Botão "Alert Dialogs"
        await $('android=new UiSelector().text("LIST DIALOG")').click(); //Lista de diálogos
        await $("id=alertTitle").isDisplayed(); // título
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed();
    });
}); 

describe("App/Fragment/Hide and Show", () => {  
    xit("Verifica fluxo do caminho e texto dos botões" , async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click(); //Botão "Fragment"
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click(); //Botao Hide and Show
        const BtnHide1 = await $("id=frag1hide").getText();
        expect(BtnHide1).toBe("HIDE");
        const BtnHide2 = await $("id=frag2hide").getText();
        expect(BtnHide2).toBe("HIDE");
    }); 
});

describe("App/Action Bar/Display options-DISPLAY_HOME_AS_UP", () => {
    it("Verifica fluxo do caminho e visibilidade da lista options", async() => {
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

describe("App/Action Bar/Display options-DISPLAY_HOME_AS_UP", () =>{
    it("Verifica botão 'Home AS UP' se funciona", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        const button1 = await $("id=toggle_home_as_up").isDisplayed();
        expect(button1).toBe(true);
        await $("id=toggle_home_as_up").click();
        const titText = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(titText).toBe(true);
    });
});

describe("App/Action Bar/Display options-DISPLAY_SHOW_TITLE", () =>{
    it.only("Verifica botão 'SHOW TITLE' se funciona", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();     
        await $("id=toggle_show_title").click();
        const button2 = await $("id=toggle_show_title").isDisplayed();
        expect(button2).toBe(true);
    });
});
describe("App/Action Bar/Display options-DISPLAY_SHOW_CUSTOM", () =>{
    xit("Testando botao custom", async() => {
        await $("~App").click(); //Botão "App"
        await $("~Action Bar").click();
        await $("~Display Options").click();
        await $("id=toggle_show_custom").click();
    });
});

describe("App/Action Bar/Display options-DISPLAY_SHOW_NAVIGATION", () =>{
    xit("Testando botao navigation", async() => {
        await $("~App").click(); //Botão "App"
        await $("~Action Bar").click();
        await $("~Display Options").click();
        await $("id=toggle_navigation").click();
    });
});
