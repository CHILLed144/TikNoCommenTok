// background.js

chrome.action.onClicked.addListener((tab) => {
  // Ensure the tab has an ID before trying to send a message
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { action: "toggleComments" }, (response) => {
      // Check if an error occurred during message sending 
      // (e.g., content script wasn't injected or listening)
      if (chrome.runtime.lastError) {
        console.error("Could not send message to tab", tab.id, ":", chrome.runtime.lastError.message);
      } else {
        // Optional: Log success or handle response from content script
        console.log("Message sent to tab", tab.id, "Response:", response); 
      }
    });
  } else {
    console.error("Clicked action on a tab with no ID:", tab);
  }
});