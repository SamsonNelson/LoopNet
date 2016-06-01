var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
    .init()
    .url('http://www.loopnet.com/')
    // .setValue('#search_form_input_homepage', 'WebdriverIO')
    .setValue('/html/body/section/main/section[1]/section[1]/div/div/div/form/div/div/div[2]/div[3]/div/input' , 'Salt Lake City, Utah')
    .click('/html/body/section/main/section[1]/section[1]/div/div/div/form/div/div/div[2]/div[4]/button[1]')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    .refresh()
    .click('//*[@id="placardSec"]/div[2]/div[1]/article[1]/div[1]/section[1]/div/div/div/div/div[2]/div/figure')
    .getText('/html/body/section/main/section/div/div/div/div/aside/div/div/div[1]/div/section[2]/div[2]/div/div/div/div[2]/div[1]/div/div/h4/a/span[1]').then(function(text) {
      console.log(text);
    })
    .getText('/html/body/section/main/section/div/div/div/div/aside/div/div/div[1]/div/section[2]/div[2]/div/div/div/div[2]/div[1]/div/div/h4/a/span[2]').then(function(text) {
      console.log(text);
    })
    .getText('/html/body/section/main/section/div/div/div/div/aside/div/div/div[1]/div/section[2]/div[2]/div/div/div/div[2]/div[1]/div/div/h4/p/a').then(function(text) {
      console.log(text);
    })
    .getText('/html/body/section/main/section/div/div/div/div/div/section[1]/div/div/div').then(function(text) {
      console.log(text);
    })
    .end();
