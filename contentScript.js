// contentScript.js

let commentsHidden = false;

function toggleCommentsVisibility() {
  const elements = document.querySelectorAll("[class*='DivContentContainer']");
  elements.forEach((element) => {
    element.style.display = commentsHidden ? "block" : "none";
  });
  commentsHidden = !commentsHidden;
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "toggleComments") {
    toggleCommentsVisibility();
  }
});
