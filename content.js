const hideReels = () => {
  // We look for the link that leads to /reels/
  const reelsTab = document.querySelector('a[href="/reels/"]');

  if (reelsTab) {
    // We find the parent container (the sidebar item) and hide it
    const sidebarItem = reelsTab.closest("div");
    // Sometimes you need to go higher up the tree depending on IG's current structure
    if (sidebarItem) {
      sidebarItem.parentElement.style.display = "none";
    }
  }
};

// Use a MutationObserver to catch elements as they load dynamically
const observer = new MutationObserver(() => {
  hideReels();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Initial run
hideReels();
