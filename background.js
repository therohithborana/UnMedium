chrome.action.onClicked.addListener((tab) => {
    if (tab && tab.url.includes("medium.com")) {
      // Modify the URL by adding "freedium.cfd/" before "medium.com"
      const newUrl = tab.url.replace("https://medium.com", "https://freedium.cfd/medium.com");
  
      // Open the modified URL in a new tab
      chrome.tabs.create({ url: newUrl });
    }
  });
  