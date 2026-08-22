(() => {
  const tabs = Array.from(document.querySelectorAll('[data-listing-tab]'));
  const panels = Array.from(document.querySelectorAll('[data-listing-panel]'));
  if (!tabs.length || !panels.length) return;

  const selectTab = (name, updateHash = false) => {
    const selected = tabs.find((tab) => tab.dataset.listingTab === name) || tabs[0];
    tabs.forEach((tab) => {
      tab.setAttribute('aria-selected', String(tab === selected));
      tab.tabIndex = tab === selected ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.listingPanel !== selected.dataset.listingTab;
    });
    if (updateHash) history.replaceState(null, '', `#${selected.dataset.listingTab}`);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab.dataset.listingTab, true));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const next = tabs[(index + direction + tabs.length) % tabs.length];
      selectTab(next.dataset.listingTab, true);
      next.focus();
    });
  });

  selectTab(location.hash === '#alquiler' ? 'alquiler' : 'venta');
})();
