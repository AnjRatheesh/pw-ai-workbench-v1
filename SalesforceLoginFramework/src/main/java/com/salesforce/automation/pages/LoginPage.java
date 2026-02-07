package com.salesforce.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class LoginPage {

    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(xpath = "//input[@id='username']")
    private WebElement usernameField;

    @FindBy(xpath = "//input[@id='password']")
    private WebElement passwordField;

    @FindBy(xpath = "//input[@id='Login']")
    private WebElement loginButton;

    @FindBy(xpath = "//input[@id='rememberUn']")
    private WebElement rememberMeCheckbox;

    @FindBy(xpath = "//a[contains(@href, 'forgot_password')]")
    private WebElement forgotPasswordLink;

    @FindBy(xpath = "//div[contains(@class, 'loginError')]")
    private WebElement errorMessage;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    public void enterUsername(String username) {
        try {
            wait.until(ExpectedConditions.visibilityOf(usernameField));
            usernameField.clear();
            usernameField.sendKeys(username);
        } catch (Exception e) {
            throw new RuntimeException("Failed to enter username: " + e.getMessage(), e);
        }
    }

    public void enterPassword(String password) {
        try {
            wait.until(ExpectedConditions.visibilityOf(passwordField));
            passwordField.clear();
            passwordField.sendKeys(password);
        } catch (Exception e) {
            throw new RuntimeException("Failed to enter password: " + e.getMessage(), e);
        }
    }

    public void clickLoginButton() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(loginButton));
            loginButton.click();
        } catch (Exception e) {
            throw new RuntimeException("Failed to click login button: " + e.getMessage(), e);
        }
    }

    public void clickRememberMeCheckbox() {
        try {
            wait.until(ExpectedConditions.elementToBeClickable(rememberMeCheckbox));
            rememberMeCheckbox.click();
        } catch (Exception e) {
            throw new RuntimeException("Failed to click remember me checkbox: " + e.getMessage(), e);
        }
    }

    public void performLogin(String username, String password) {
        try {
            enterUsername(username);
            enterPassword(password);
            clickLoginButton();
        } catch (Exception e) {
            throw new RuntimeException("Login operation failed: " + e.getMessage(), e);
        }
    }

    public void performLoginWithRememberMe(String username, String password) {
        try {
            enterUsername(username);
            enterPassword(password);
            clickRememberMeCheckbox();
            clickLoginButton();
        } catch (Exception e) {
            throw new RuntimeException("Login with remember me failed: " + e.getMessage(), e);
        }
    }

    public String getErrorMessage() {
        try {
            wait.until(ExpectedConditions.visibilityOf(errorMessage));
            return errorMessage.getText();
        } catch (Exception e) {
            throw new RuntimeException("Failed to retrieve error message: " + e.getMessage(), e);
        }
    }

    public boolean isErrorMessageDisplayed() {
        try {
            wait.until(ExpectedConditions.visibilityOf(errorMessage));
            return errorMessage.isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    public boolean isLoginButtonVisible() {
        try {
            return loginButton.isDisplayed();
        } catch (Exception e) {
            throw new RuntimeException("Failed to check login button visibility: " + e.getMessage(), e);
        }
    }

    public String getCurrentUrl() {
        try {
            return driver.getCurrentUrl();
        } catch (Exception e) {
            throw new RuntimeException("Failed to get current URL: " + e.getMessage(), e);
        }
    }
}
