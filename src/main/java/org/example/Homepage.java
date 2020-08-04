package org.example;

import org.openqa.selenium.By;

import static org.example.Utils.utils.*;

public class Homepage extends Utils {


    private By _login = By.cssSelector("input[class='button-1 login-button']");
    //private By _promotion = By.cssSelector("[class='fa fa-tags']");



    public void login() {
        waitForElementToBevisible(_login, 20);
        ClickOnElement(_login);
        //ClickOnElement(_promotion);
    }


}

