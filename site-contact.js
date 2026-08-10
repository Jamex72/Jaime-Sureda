document.querySelectorAll('a[href*="mailto:"]').forEach((link) => {
  link.href = link.href.replace(/mailto:[^?]+/, 'mailto:info@jaimesureda.com');
  if (link.textContent.includes('@')) link.textContent = 'info@jaimesureda.com';
});

const syncWhatsAppLabels = () => {
  const english = document.documentElement.lang === 'en';
  document.querySelectorAll('[data-i18n="whatsapp"]').forEach((link) => {
    link.textContent = english ? 'Message on WhatsApp' : 'Escribir por WhatsApp';
  });
};

new MutationObserver(syncWhatsAppLabels).observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['lang'],
});
syncWhatsAppLabels();
