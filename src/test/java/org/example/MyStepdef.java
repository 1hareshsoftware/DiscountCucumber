package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdef {

    Homepage homepage = new Homepage();


    @Given("^I am on Login Page$")
    public void i_am_on_Login_Page() {
    }

    @When("^i click on Login Button$")
    public void i_click_on_Login_Button() {
        homepage.login();
    }

    @When("^I click on Promotions$")
    public void i_click_on_Promotions() {
    }

    @When("^I click on Discounts$")
    public void i_click_on_Discounts() {
    }

    @When("^I click on Add new$")
    public void i_click_on_Add_new() {
    }

    @When("^I enter Name as Summer Sale$")
    public void i_enter_Name_as_Summer_Sale() {
    }

    @When("^I click on Use percentage$")
    public void i_click_on_Use_percentage() {
    }

    @When("^I enter (\\d+)% in Discount percentage$")
    public void i_enter_in_Discount_percentage(int arg1) {
    }

    @When("^I enter Start date (\\d+)/(\\d+)/(\\d+)$")
    public void i_enter_Start_date(int arg1, int arg2, int arg3) {
    }

    @When("^I enter End date (\\d+)/(\\d+)/(\\d+)$")
    public void i_enter_End_date(int arg1, int arg2, int arg3) {
    }

    @When("^I enter Admin comment as Discount for Sale$")
    public void i_enter_Admin_comment_as_Discount_for_Sale() {
    }

    @When("^I click on Save button$")
    public void i_click_on_Save_button() {
    }

    @Then("^i should be able to add new discount for summer sale$")
    public void i_should_be_able_to_add_new_discount_for_summer_sale() {
    }

}
