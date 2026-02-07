package com.salesforce.automation.tests;

import com.salesforce.automation.base.BaseTest;
import com.salesforce.automation.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class LoginValidTest extends BaseTest {

    @Test(description = "Verify successful login with valid credentials")
    public void testValidLogin() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String validUsername = "test@salesforce.com";
            String validPassword = "ValidPassword123";

            loginPage.performLogin(validUsername, validPassword);

            Thread.sleep(2000);
            String currentUrl = loginPage.getCurrentUrl();
            boolean isLoginSuccessful = !currentUrl.contains("login.salesforce.com");

            Assert.assertTrue(isLoginSuccessful, "Login was not successful");
        } catch (Exception e) {
            throw new RuntimeException("Test failed: " + e.getMessage(), e);
        }
    }

    @Test(description = "Verify successful login with valid credentials and remember me option")
    public void testValidLoginWithRememberMe() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String validUsername = "test@salesforce.com";
            String validPassword = "ValidPassword123";

            loginPage.performLoginWithRememberMe(validUsername, validPassword);

            Thread.sleep(2000);
            String currentUrl = loginPage.getCurrentUrl();
            boolean isLoginSuccessful = !currentUrl.contains("login.salesforce.com");

            Assert.assertTrue(isLoginSuccessful, "Login with remember me was not successful");
        } catch (Exception e) {
            throw new RuntimeException("Test failed: " + e.getMessage(), e);
        }
    }

    @Test(description = "Verify username field accepts valid email format")
    public void testUsernameFieldValidInput() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String validEmail = "user@example.com";

            loginPage.enterUsername(validEmail);

            Assert.assertTrue(loginPage.isLoginButtonVisible(), "Login button should be visible");
        } catch (Exception e) {
            throw new RuntimeException("Test failed: " + e.getMessage(), e);
        }
    }

    @Test(description = "Verify password field accepts input")
    public void testPasswordFieldValidInput() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            String validPassword = "SecurePassword123!";

            loginPage.enterPassword(validPassword);

            Assert.assertTrue(loginPage.isLoginButtonVisible(), "Login button should be visible");
        } catch (Exception e) {
            throw new RuntimeException("Test failed: " + e.getMessage(), e);
        }
    }

    @Test(description = "Verify login page loads successfully")
    public void testLoginPageLoads() {
        try {
            LoginPage loginPage = new LoginPage(driver);

            Assert.assertTrue(loginPage.isLoginButtonVisible(), "Login page should load with login button visible");
        } catch (Exception e) {
            throw new RuntimeException("Test failed: " + e.getMessage(), e);
        }
    }
}
