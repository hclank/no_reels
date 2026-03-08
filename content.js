// 1. Function to redirect if the user navigates to a Reels URL
function handleRedirect() {
  if (window.location.pathname.startsWith("/reels/")) {
    window.location.href = "https://www.instagram.com/";
  }
}

// 2. Function to inject CSS that hides the Reels UI elements
function injectHidingStyles() {
  // Only inject if the style tag doesn't already exist
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
    // We try to attach to document.head, but if it's too early, we use document.documentElement
    (document.head || document.documentElement).appendChild(style);
  }
}

// 3. Initial Execution
handleRedirect();
injectHidingStyles();

// 4. Handle Instagram's "Single Page Application" (SPA) navigation
// This watches for URL changes and ensures the button stays hidden when the page updates
let lastUrl = location.href;
const observer = new MutationObserver(() => {
  const currentUrl = location.href;

  // If the URL changed, check if we need to redirect
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    handleRedirect();
  }

  // Re-verify styles are injected (IG sometimes clears the head on soft reloads)
  injectHidingStyles();
});

// Start observing the page for changes
observer.observe(document, { subtree: true, childList: true });
