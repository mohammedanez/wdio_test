class InfoPage {

   // elements
  get emailField() {
    return browser.element("#email");
  }

   get urlField() {
    return browser.element("#url");
  }
   get phoneField() {
    return browser.element("#phone");
  }

   get myInfo()
  {
    return browser.element("#myInfo");
  }

  getJsonButton()
  {
    return browser.click("#buildJSON");
  }

   showChats()
  {
    return browser.click("#showChats");
  }


  get jsonOutput()
  {
    return browser.element("#json_output");
  }
  myinfoloaded(waitTime)
  {
    browser.waitForVisible('#myInfo', waitTime);
    
  }
   mychatsloaded(waitTime)
  {
    browser.waitForVisible('#myChats', waitTime);
    
  }
  parseData() {
  
    let actualData = {
      email: browser.getText('#email').toString(), 
      url: browser.getText('#url').toString(), 
      phone: browser.getText('#phone').toString()
    };

    return actualData;

  }

    parseJson() {
  
    return JSON.parse(browser.getText('#json_output'));

  }
  parseNewChats()
  {
    let myChats= $('#myChats');
 
  let liLength=myChats.$$('ul')[1].$$('li').length;
  var data =[];
  for(let i=0;i<liLength;i++)
    {
      let str=myChats.$$('ul')[1].$$('li')[i].$$('div')[0].getText();
      let str1=myChats.$$('ul')[1].$$('li')[i].$$('div')[1].getText();
      let senderDetails= str.toString().split(" @");
       data[i] = {
      sender: senderDetails[0],
      time: senderDetails[1],
      message: str1.toString()
    };
    }
     
return data;
  }
}

export default InfoPage;
