var webdriverio = require('webdriverio');
var options = {desiredCapabilities: {browserName:'chrome'}};
var client = webdriverio.remote(options);

client
    .init()
      .url('http://www.loopnet.com/')
      // .setValue('#search_form_input_homepage', 'WebdriverIO')
      // .click('/html/body/section/main/section[1]/section[1]/div/div/div/form/div/div/div[3]/div/button')
        .setValue('/html/body/section/main/section[1]/section[1]/div/div/div/form/div/div/div[2]/div[3]/div/input', 'Salt Lake City')
        .click('/html/body/section/main/section[1]/section[1]/div/div/div/form/div/div/div[2]/div[4]/button[1]')
        .getTitle().then(function(title) {
          console.log(title);
        })
        .pause(3000)
          .click('/html/body/section/main/section/div/section[1]/div/div/div[2]/div[2]/div[1]/button')
          .click('/html/body/section/main/section/div/section[1]/div/div/div[2]/div[2]/div[1]/div/ul/li[2]/label[1]/input')
          .click('/html/body/section/main/section/div/section[1]/div/div/div[2]/div[2]/div[1]/div/ul/li[3]/label[1]/input')
          .click('/html/body/section/main/section/div/section[1]/div/div/div[2]/div[2]/div[1]/div/ul/li[4]/label[1]/input')
          .click('/html/body/section/main/section/div/section[1]/div/div/div[2]/div[2]/div[1]/div/ul/li[5]/label[1]/input')
          .pause(2000)
          .refresh()

          .getText('address').then(function(res) {
            console.log(res);
            res.forEach(function(elem) {
              console.log(elem);
              clicks.push(
                runner
                      .getText('h1').then(function(title) {
                        console.log(title);
                      })
                      // .getText('.column-09 .column-tiny-08').then(function(cityState) {
                      //   console.log(cityState);
                      // })
                      .back()
              );
            });

            return q.all(clicks);
          })
          // .click('/html/body/section/div[3]/div[2]/div/section/form/div[2]/section[1]/div[1]/ul/li[3]/label[1]').then(function(prop) {
          //   console.log(prop)
          // })
          // .click('/html/body/section/div[3]/div[2]/div/section/form/div[2]/section[1]/div[1]/ul/li[4]/label[1]').then(function(prop) {
          //   console.log(prop)
          // })
      // .setValue('/html/body/section/main/section[1]/section[1]/div/div/div/form/div/div/div[2]/div[3]/div/input' , 'Salt Lake City, Utah')
      // .click('/html/body/section/main/section[1]/section[1]/div/div/div/form/div/div/div[2]/div[4]/button[1]')
    // .end();

    // .init()
    //    .url('https://www.google.dk/search?q=burrito')
    //    .getText(".r").then(function(res){
    //        console.log(res);
    //        res.forEach(function(elem){
    //            console.log(elem);
    //            clicks.push(
    //                runner
    //                    .click('=' + elem)
    //                    .back()
    //            );
    //        });
    //
    //        return q.all(clicks);
    //    });
