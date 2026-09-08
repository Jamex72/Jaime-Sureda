(() => {
  const heroArea = document.querySelector('.hero-facts span:first-child');
  const detailArea = document.querySelector('.facts strong');
  const detailLabel = detailArea?.nextElementSibling;

  if (!heroArea || !detailArea || !detailLabel) return;

  detailLabel.removeAttribute('data-i18n');

  const updateAreaCopy = () => {
    const english = document.documentElement.lang === 'en';
    heroArea.textContent = english ? '125.97 m²' : '125,97 m²';
    detailArea.textContent = english ? '125.97' : '125,97';
    detailLabel.textContent = english ? 'm² built' : 'm² construidos';
  };

  new MutationObserver(updateAreaCopy).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });

  updateAreaCopy();
})();
