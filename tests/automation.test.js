import LoginPage from "~/src/pages/login.page.js";
import InfoPage from "~/src/pages/info.page.js";

describe("My Awesome Website", () => {
  // this test should pass
  it("will show the correct title", () => {
    let loginPage = new LoginPage();
    loginPage.visit();
    expect(loginPage.title()).to.equal("Test Page");
  });

  // make these tests pass
  it("will show the the correct extension in myInfo", () => {
    let extension = Date.now();

    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(extension);
    loginPage.loginButton();
    let infoPage= new InfoPage();
    infoPage.myinfoloaded(5000);
    let data = infoPage.parseData(); // hmm, does infoPage exist?

    var expectedData = {
      email: extension.toString() + "@dundermifflin.com", //what should I be?
      url: "https://www.dundermifflin.com/extension/" + extension.toString() + "/", //what should I be?
      phone: "+167 438 2348 ext " + extension.toString() //what should I be?,
    };

    expect(data).to.deep.equal(expectedData);
  });

  it("will show the my extension in the JSON output", () => {
    let extension = Date.now();

    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(extension);
    loginPage.loginButton();
     let infoPage= new InfoPage();
    infoPage.myinfoloaded(5000);
    infoPage.getJsonButton(); // do I exist?
    let data = infoPage.parseJson(); // hmm, does infoPage exist?

  let expectedData = {
      email: extension.toString()  + "@dundermifflin.com", //what should I be?
      url: "https://www.dundermifflin.com/extension/" + extension.toString() + "/", //what should I be?
      phone: "+167 438 2348 ext " + extension.toString() //what should I be?,
    };
    


    expect(data).to.deep.equal(expectedData);
  });

  it("BONUS: will show NEW chat messages", () => {
    let extension = Date.now();

    let loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(extension);
    loginPage.loginButton();
    let infoPage= new InfoPage();
    infoPage.myinfoloaded(5000);
    infoPage.showChats(); 
     infoPage.mychatsloaded(5000);// wait a minute, am I new too?
    let data = infoPage.parseNewChats(); // hmm, does infoPage exist?

    let thirdChat = {
      sender: "Toby Flenderson",
      time: "11:41 AM",
      message: "What are you guys doing for lunch?"
    };

    expect(data[2]).to.deep.equal(thirdChat);
  });
});
