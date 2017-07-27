class LoginPage {
  // elements
  get extensionField() {
    return browser.element("input#ext_field");
  }
 loginButton() {
     browser.click("button#login_button");
  }

  // page methods
  visit() {
    browser.url(
      "file:///" + __dirname + "../../../tests/test_pages/test_page_1.html"
    );
  }

  title() {
    return browser.getTitle();
  }

  login(extension) {
    browser.setValue('input#ext_field',extension.toString())
    
  }
}

export default LoginPage;
