@Discount

Feature:I am on Login Page, after Login, i can add new discount for Summer Sale

  Scenario:I am able to add new discount

    Given I am on Login Page
    When i click on Login Button
    And I click on Promotions
    And I click on Discounts
    And I click on Add new
    And I enter Name as Summer Sale
    And I click on Use percentage
    And I enter 10% in Discount percentage
    And I enter Start date 02/08/2020
    And I enter End date 07/08/2020
    And I enter Admin comment as Discount for Sale
    And I click on Save button
    Then i should be able to add new discount for summer sale