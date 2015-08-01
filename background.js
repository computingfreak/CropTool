chrome.browserAction.onClicked.addListener(function(tab) {
console.log("clicked");
chrome.tabs.executeScript(null, { file: "jquery-1.11.3.min.js" }, function() {
          chrome.tabs.executeScript(null, { file: "script.js" });
        });  
});
