chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url == "http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js") {
      console.log(details.url);
      return {redirectUrl: "http://cdn.staticfile.org/jquery/1.7.1/jquery.min.js"};
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
