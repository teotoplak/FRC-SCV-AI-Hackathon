// Shared tracking layer — initialises dataLayer and loads GTM.
// Replace GTM-XXXXXXX with the real container ID.
window.dataLayer = window.dataLayer || [];

(function(w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-XXXXXXX');

// Helper to push a tracking event to the dataLayer.
window.trackEvent = function(eventName, params) {
  window.dataLayer.push(Object.assign({ event: eventName }, params || {}));
};
