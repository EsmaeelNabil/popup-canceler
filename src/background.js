import "crx-hotreload";

// this will run when a new tab is opened
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    console.log(tab.id, "tab openned with status : ", changeInfo.url);
    chrome.tabs.get(tabId, function (tab) {
      var url = tab.url;
      // check if url includes 'wp-content/themes/Shahid4u'

      chrome.storage.local.get(["urls"], (result) => {
        // push old urls to the array
        if (result) {
          if (result.urls) {
            result.urls.forEach((item) => {
              console.log(item, "\n");
              // check if url is already in the blocked array and remove it
              if (url.includes(item)) {
                console.log(url);
                chrome.tabs.remove(tabId);
                console.log("tab removed");
              }
            });
          }
        }
      });
    });
  }
});


// wp-content/themes/Shahid4u
