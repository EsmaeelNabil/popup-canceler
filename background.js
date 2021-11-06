
// this will run when a new tab is opened
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    console.log(tab.id, "tab openned with status : ", changeInfo.url);
    chrome.tabs.get(tabId, function (tab) {
      var url = tab.url;
      // check if url includes 'wp-content/themes/Shahid4u'
      if (url.includes("wp-content/themes/Shahid4u")) {
        console.log(url);
        chrome.tabs.remove(tabId);
        console.log("tab removed");
      }
    });
  }
});
