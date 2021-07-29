var mineflayer = require('mineflayer');
var pass = "12345";
var ayar = {
  host: "DeluxeCraft21.aternos.me",
  port: 25565,
  username: "antioffbot",
  version: false
  
};

var bot = mineflayer.createBot(ayar);


bot.on('chat', function(username, message) {
  if (username === bot.username) return;
  function intervalFunc() {
    bot.setControlState('forward', true)
  }
  setInterval(intervalFunc,7000);
  console.log('Sunucuya Giriş Yapıldı!');
  bot.chat('/register lan400 lan400');
});

bindEvents(bot);
function bindEvents(bot) {
  
  bot.on('error', function(err) {
    console.log("Bir Hata Oluştu!");
  });
  
  bot.on('end', function() {
    console.log("Bot sunucudan atıldı!");
    setTimeout(relog, 5000);
  });
  
  function relog() {
    console.log("Sunucuya tekrardan bağlanılıyor");
    bot = mineflayer.createBot(ayar);
    
    bot.on('chat', function(username, message) {
      if (username === bot.username) return;
      console.log("Bot tekrardan sunucuya giriş yaptı!");
      bot.chat('/login '+ pass);
});
    
    
    bindEvents(bot);
  }
}

  
  