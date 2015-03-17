var assert = require("assert");
var webdriver = require("selenium-webdriver");

describe("testing javascript in the browser", function() {
  beforeEach(function() {
    this.browser = new webdriver.Builder()
    .withCapabilities({
      browserName: "chrome"
    }).build();

    return this.browser.get("http://localhost:8000/page/index.html");
  });

  afterEach(function() {
    return this.browser.quit();
  });

  it("should handle clicking on a headline", function(done) {
    var headline = this.browser.findElement(webdriver.By.css('h1'));

    headline.click();

    headline.getText().then(function(txt) {
      assert.equal(txt, "awesome");
      done();
    });
  });
});
