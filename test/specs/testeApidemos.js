afterEach(() => {
    driver.reset();
});

describe("Fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE", () => {
    it("Verifica fluxo do caminho e acesso a caixa de mensagem - CANCEL e OK", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click(); 
        await $("android.widget.Button").click(); //Botão mensagem: "OK CANCEL DIALOG WITH MESSAGE"
        const caixaMensage = await $("android.widget.FrameLayout").isDisplayed();
        expect(caixaMensage).toBe(true);
    }); 
});

describe("Fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE - BOTÃO CANCEL", () => {
    it("Verifica botão CANCEL", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click(); 
        await $("android.widget.Button").click(); //Botão mensagem: "OK CANCEL DIALOG WITH MESSAGE"
        const buttonCanc = await $('android=new UiSelector().text("CANCEL").className("android.widget.Button")').isEnabled();
        expect(buttonCanc).toBe(true);
    }); 
});

describe("Fluxo App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE - BOTÃO OK", () => {
    it.only("Verifica botão OK", async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click(); 
        await $("android.widget.Button").click(); //Botão mensagem: "OK CANCEL DIALOG WITH MESSAGE"
       await $('android=new UiSelector().text("OK").className("android.widget.Button")').click();
        
    }); 
});

describe("App/Alert Dialogs/LIST DIALOG", () =>{
    it("Verifica fluxo do caminho e visiibilidade dos botões dos 'Commands'", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click(); 
        await $('android=new UiSelector().text("LIST DIALOG")').click(); 
        await $("id=alertTitle").isDisplayed(); 
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed();
        await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed();
    });
});

describe("App/Alert Dialogs/LIST DIALOG - Command one ", () => { 
    it("Verifica botão Command One", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG")').click(); 
        await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').click();
        const mensOne = await $('android=new UiSelector().text("You selected: 0 , Command one").className("android.widget.TextView")').isDisplayed();
        expect(mensOne).toBe(true);
    });
}); 

describe("App/Alert Dialogs/LIST DIALOG - Command two ", () => { 
    it("Verifica botão Command two", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG")').click(); 
        await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').click();
        const mensTwo = await $('android=new UiSelector().text("You selected: 1 , Command two").className("android.widget.TextView")').isDisplayed();
        expect(mensTwo).toBe(true);
    });
}); 

describe("App/Alert Dialogs/LIST DIALOG - Command three ", () => { 
    it("Verifica botão Command three", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG")').click(); 
        await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').click();
        const mensThree = await $('android=new UiSelector().text("You selected: 2 , Command three").className("android.widget.TextView")').isDisplayed();
        expect(mensThree).toBe(true);
    });
}); 

describe("App/Alert Dialogs/LIST DIALOG - Command four ", () => { 
    it("Verifica botão Command four", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("LIST DIALOG")').click(); 
        await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').click();
        const mensFour = await $('android=new UiSelector().text("You selected: 3 , Command four").className("android.widget.TextView")').isDisplayed();
        expect(mensFour).toBe(true);
    });
}); 

describe("App/Fragment/Hide and Show", () => {  
    it("Verifica fluxo do caminho e texto dos botões" , async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click(); //Botão "Fragment"
        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click(); //Botao Hide and Show
        const BtnHide1 = await $("id=frag1hide").getText();
        expect(BtnHide1).toBe("HIDE");
        const BtnHide2 = await $("id=frag2hide").getText();
        expect(BtnHide2).toBe("HIDE");
    }); 
});

describe("App/Action Bar/Display options", () => {
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
        const titText1 = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(titText1).toBe(true);
    });
});

describe("App/Action Bar/Display options-DISPLAY_SHOW_TITLE", () =>{
    it("Verifica botão 'SHOW TITLE' se funciona", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();     
        await $("id=toggle_show_title").click();
        const button2 = await $("id=toggle_show_title").isDisplayed();
        expect(button2).toBe(true);
        await $("android.widget.ImageView").isDisplayed();
        await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
    });
});

describe("App/Action Bar/Display options-DISPLAY_SHOW_CUSTOM", () =>{
    it("Verifica botão 'SHOW CUSTOM' se funciona", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_show_custom").click();
        const button3 = await $("id=toggle_show_custom").isDisplayed();
        expect(button3).toBe(true);
        const textVis = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(textVis).toBe(true);
        const imagText = await $("android.widget.Button").getText();
        expect(imagText).toBe("CUSTOM VIEW!");
    });
});

describe("App/Action Bar/Display options-DISPLAY_SHOW_NAVIGATION", () =>{
    it("Verifica botão 'SHOW NAVIGATION' se funciona", async() => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); //Botão "App"
        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        await $("id=toggle_navigation").click();
        const button4 = await $("id=toggle_navigation").isDisplayed();
        expect(button4).toBe(true);
        const textVis4 = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(textVis4).toBe(true);
        const ImagNav1 = await $('android=new UiSelector().text("TAB 1").className("android.widget.TextView")').isDisplayed();
        expect(ImagNav1).toBe(true);
        const ImagNav2 = await $('android=new UiSelector().text("TAB 2").className("android.widget.TextView")').isDisplayed();
        expect(ImagNav2).toBe(true);
        const ImagNav3 = await $('android=new UiSelector().text("TAB 3").className("android.widget.TextView")').isDisplayed();
        expect(ImagNav3).toBe(true);
    });
});