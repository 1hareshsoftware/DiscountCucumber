$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resource/Features/Discount.feature");
formatter.feature({
  "line": 3,
  "name": "I am on Login Page, after Login, i can add new discount for Summer Sale",
  "description": "",
  "id": "i-am-on-login-page,-after-login,-i-can-add-new-discount-for-summer-sale",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Discount"
    }
  ]
});
formatter.before({
  "duration": 12159893000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "I am able to add new discount",
  "description": "",
  "id": "i-am-on-login-page,-after-login,-i-can-add-new-discount-for-summer-sale;i-am-able-to-add-new-discount",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i click on Login Button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Promotions",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Discounts",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add new",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Name as Summer Sale",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Use percentage",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter 10% in Discount percentage",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Start date 02/08/2020",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter End date 07/08/2020",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Admin comment as Discount for Sale",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i should be able to add new discount for summer sale",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdef.i_am_on_Login_Page()"
});
formatter.result({
  "duration": 183283100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_click_on_Login_Button()"
});
formatter.result({
  "duration": 819173600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_click_on_Promotions()"
});
formatter.result({
  "duration": 101900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_click_on_Discounts()"
});
formatter.result({
  "duration": 26600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_click_on_Add_new()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_enter_Name_as_Summer_Sale()"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_click_on_Use_percentage()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "MyStepdef.i_enter_in_Discount_percentage(int)"
});
formatter.result({
  "duration": 3077100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 19
    },
    {
      "val": "08",
      "offset": 22
    },
    {
      "val": "2020",
      "offset": 25
    }
  ],
  "location": "MyStepdef.i_enter_Start_date(int,int,int)"
});
formatter.result({
  "duration": 234000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07",
      "offset": 17
    },
    {
      "val": "08",
      "offset": 20
    },
    {
      "val": "2020",
      "offset": 23
    }
  ],
  "location": "MyStepdef.i_enter_End_date(int,int,int)"
});
formatter.result({
  "duration": 197200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_enter_Admin_comment_as_Discount_for_Sale()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_click_on_Save_button()"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdef.i_should_be_able_to_add_new_discount_for_summer_sale()"
});
formatter.result({
  "duration": 35200,
  "status": "passed"
});
formatter.after({
  "duration": 17700,
  "status": "passed"
});
});