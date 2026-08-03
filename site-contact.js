document.querySelectorAll('a[href*="mailto:"]').forEach((link) => {
  link.href = link.href.replace(/mailto:[^?]+/, 'mailto:info@jaimesureda.com');
  if (link.textContent.includes('@')) link.textContent = 'info@jaimesureda.com';
});
