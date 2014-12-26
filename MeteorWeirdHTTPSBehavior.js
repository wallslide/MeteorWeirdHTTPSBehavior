if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    console.log('Making HTTP call...');
    //Works *****
    //console.log(HTTP.call('GET', 'https://google.com'));
    //console.log(HTTP.call('GET', 'http://wre.jp/'));
    //***********************************

    //Fails *****
    console.log(HTTP.call('GET', 'https://www.int-mypage.post.japanpost.jp/mypage/M010000.do'));
    //console.log(HTTP.call('GET', 'https://www.int-mypage.post.japanpost.jp/webapi/servlet/WEBAPI'));
    //************************************

    console.log('Finished HTTP call...');
  });
}
