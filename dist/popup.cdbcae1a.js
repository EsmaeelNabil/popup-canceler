let list = document.getElementById("list");
let addToListButton = document.getElementById("add-to-list-button");
let loadListButton = document.getElementById("load-list-button");
let clearListButton = document.getElementById("clear-list-button");
// Clear list button
clearListButton.onclick = ()=>{
    chrome.storage.local.clear();
    list.innerHTML = "";
    document.getElementById("url").value = "";
};
addToListButton.onclick = function() {
    let items = [];
    let url = document.getElementById("url").value;
    // if url string is empty return
    if (url === "") {
        alert("Please enter a URL");
        return;
    }
    chrome.storage.local.get([
        "urls"
    ], (result)=>{
        // push old urls to the array
        if (result) {
            if (result.urls) result.urls.forEach((item)=>{
                items.push(item);
            });
        }
        // add current type url
        items.push(url);
        // save to chrome storage
        chrome.storage.local.set({
            urls: items
        }, function() {
            console.log("saved", items);
            showUrls();
        });
    });
};
function showUrls() {
    chrome.storage.local.get([
        "urls"
    ], (result)=>{
        if (result) {
            console.log(result.urls);
            list.innerHTML = "";
            if (result.urls) {
                result.urls.forEach(function(item) {
                    let li = document.createElement("li");
                    li.innerText = item;
                    list.appendChild(li);
                });
                document.getElementById("url").value = "";
            }
        }
    });
}
loadListButton.onclick = function() {
    showUrls();
};
showUrls();

//# sourceMappingURL=popup.cdbcae1a.js.map
