jQuery(document).ready(function($) {
  // Generated from python script siteReader.py
  var siteList = [{url: "http://bokkisam.github.com", src: "img/sites/http---bokkisam.github.com-.png", name: "bokkisam.github.com"},{url: "http://aung786.github.io", src: "img/sites/http---aung786.github.io-.png", name: "aung786.github.io"},{url: "http://1775776.github.io", src:"img/sites/http---1775776.github.io-.png", name: "1775776.github.io"},{url: "http://github-jmjones.github.com", src:"img/sites/http---github-jmjones.github.com.png", name: "github-jmjones.github.com"},{url: "http://gofishs.github.com", src:"img/sites/http---gofishs.github.com-.png", name: "gofishs.github.com"},{url: "http://grand-tee.github.com", src:"img/sites/http---grand-tee.github.com-.png", name: "grand-tee.github.com"},{url: "http://katwalt11.github.io", src:"img/sites/http---katwalt11.github.io-.png", name: "katwalt11.github.io"},{url: "http://kevin51lam.github.io", src:"img/sites/http---kevin51lam.github.io-.png", name: "kevin51lam.github.io"},{url: "http://luettgenj4.github.io", src:"img/sites/http---luettgenj4.github.io-.png", name: "luettgenj4.github.io"},{url: "http://mrtacloban2012.github.com", src:"img/sites/http---mrtacloban2012.github.com-.png", name: "mrtacloban2012.github.com"},{url: "http://raptormstr.github.io", src:"img/sites/http---raptormstr.github.io-.png", name: "raptormstr.github.io"},{url: "http://whuckeby.github.io/GoSteelers", src:"img/sites/http---whuckeby.github.io-GoSteelers-.png", name: "whuckeby.github.io/GoSteelers"},{url: "http://yethusan.github.io", src:"img/sites/http---yethusan.github.io-.png", name: "yethusan.github.io"}];

  // Sort the sites
  siteList.sort(function(a,b){return a.order-b.order});

  var siteListArray = [];
  for(var i = 0, l = siteList.length; i < l; i++){
    siteListArray.push(siteList[i].name);
  }

  //Get the HTML from the template in the script tag
  var siteTemplateScript = $("#site-template").html(); 

  //Compile the template
  var theTemplate = Handlebars.compile (siteTemplateScript); 

  // Generate site images and append
  $("#sites").append(theTemplate(siteList));  
  
});