package com.salesforce.automation.tests;

import com.salesforce.automation.base.BaseTest;
import com.salesforce.automation.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class LoginInvalidTest extends BaseTest {

    @Test(description = "Verify login fails with invalid username")
    public void testLoginWithInvalidUsername() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String invalidUsername = "invalidemail@notexist.com";
            String validPassword = "Password123";

            loginPage.performLogin(invalidUsername, validPassword);

            Thread.sleep(2000);
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for invalid username");
        } catch (Exception e) {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        }
    }

    @Test(description = "Verify login fails with invalid password")
    public void testLoginWithInvalidPassword() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String validUsername = "test@salesforce.com";
            String invalidPassword = "WrongPassword123";

            loginPage.performLogin(validUsername, invalidPassword);

            Thread.sleep(2000);
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for invalid password");
        } catch (Exception e) {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        }
    }

    @Test(description = "Verify login fails with both invalid username and password")
    public void testLoginWithBothInvalidCredentials() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String invalidUsername = "invalid@notexist.com";
            String invalidPassword = "WrongPassword";

            loginPage.performLogin(invalidUsername, invalidPassword);

            Thread.sleep(2000);
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for invalid credentials");
        } catch (Exception e) {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        }
    }

    @Test(description = "Verify login fails with empty username")
    public void testLoginWithEmptyUsername() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String emptyUsername = "";
            String validPassword = "Password123";

            loginPage.performLogin(emptyUsername, validPassword);

            Thread.sleep(1000);
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for empty username");
        } catch (Exception e) {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        }
    }

    @Test(description = "Verify login fails with empty password")
    public void testLoginWithEmptyPassword() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String validUsername = "test@salesforce.com";
            String emptyPassword = "";

            loginPage.performLogin(validUsername, emptyPassword);

            Thread.sleep(1000);
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for empty password");
        } catch (Exception e) {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        }
    }

    @Test(description = "Verify login fails with both empty username and password")
    public void testLoginWithBothEmptyCredentials() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String emptyUsername = "";
            String emptyPassword = "";

            loginPage.performLogin(emptyUsername, emptyPassword);

            Thread.sleep(1000);
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for empty credentials");
        } catch (Exception e) {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        }
    }

    @Test(description = "Verify login fails with invalid email format")
    public void testLoginWithInvalidEmailFormat() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String invalidEmail = "notanemail";
            String validPassword = "Password123";

            loginPage.performLogin(invalidEmail, validPassword);

            Thread.sleep(2000);
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for invalid email format");
        } catch (Exception e) {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        }
    }

    @Test(description = "Verify login fails with special characters in username")
    public void testLoginWithSpecialCharactersInUsername() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String usernameWithSpecialChars = "test@!#$%@example.com";
            String validPassword = "Password123";

            loginPage.performLogin(usernameWithSpecialChars, validPassword);

            Thread.sleep(2000);
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed for special characters");
        } catch (Exception e) {
            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message should be displayed");
        }
    }
}
