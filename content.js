function handleRedirect() {
  if (window.location.pathname.startsWith("/reels/")) {
    const blockedPage = chrome.runtime.getURL("blocked.html");
    window.location.href = blockedPage;
  }
}

function injectHidingStyles() {
  if (!document.getElementById("reels-remover-css")) {
    const style = document.createElement("style");
    style.id = "reels-remover-css";
    style.innerHTML = `
      /* Hide the sidebar link and the Reels icon specifically */
      a[href="/reels/"], 
      svg[aria-label="Reels"], 
      [aria-label="Reels"],
      a[href*="/reels/"] { 
        display: none !important; 
      }
    `;
    (document.head || document.documentElement).appendChild(style);
  }
}

handleRedirect();
injectHidingStyles();

let lastUrl = location.href;
const observer = new MutationObserver(() => {
  const currentUrl = location.href;

  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    handleRedirect();
  }

  injectHidingStyles();
});

observer.observe(document, { subtree: true, childList: true });
