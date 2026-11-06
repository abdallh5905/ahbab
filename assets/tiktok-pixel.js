/* TikTok Pixel and WhatsApp conversion tracking */
(function (w, d, t) {
  w.TiktokAnalyticsObject = t;
  var ttq = w[t] = w[t] || [];
  ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent'];
  ttq.setAndDefer = function (target, method) {
    target[method] = function () {
      target.push([method].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };
  for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
  ttq.instance = function (id) {
    for (var instance = ttq._i[id] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(instance, ttq.methods[n]);
    return instance;
  };
  ttq.load = function (id, options) {
    var url = 'https://analytics.tiktok.com/i18n/pixel/events.js';
    var partner = options && options.partner;
    ttq._i = ttq._i || {};
    ttq._i[id] = [];
    ttq._i[id]._u = url;
    ttq._t = ttq._t || {};
    ttq._t[id] = +new Date();
    ttq._o = ttq._o || {};
    ttq._o[id] = options || {};
    var script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url + '?sdkid=' + id + '&lib=' + t;
    var firstScript = d.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  };

  ttq.load('DBMJ21BC77UDLIGRBCS0');
  ttq.page();

  var file = w.location.pathname.replace(/\/+$/, '').split('/').pop().replace(/\.html$/i, '').toLowerCase() || 'index';
  var pages = {
    index: { id: 'umrah-packages', name: 'رحلات العمرة - احباب الحرمين', type: 'product_group' },
    vip: { id: 'vip-packages', name: 'باقات العمرة VIP', type: 'product_group' },
    hotels: { id: 'umrah-hotels', name: 'فنادق مكة والمدينة', type: 'product_group' },
    buses: { id: 'umrah-buses', name: 'حجز باصات العمرة', type: 'product_group' },
    'ads-0561902357': { id: 'whatsapp-ads', name: 'التواصل عبر واتساب من الإعلان', type: 'product_group' }
  };
  var pageContent = pages[file] || {
    id: 'page-' + file,
    name: d.title,
    type: 'product_group'
  };

  function eventPayload(content) {
    return {
      contents: [{
        content_id: String(content.id || pageContent.id),
        content_type: content.type || 'product_group',
        content_name: content.name || pageContent.name
      }],
      currency: 'SAR'
    };
  }

  function trackWhatsApp(content) {
    var payload = eventPayload(content || pageContent);
    ttq.track('Contact', payload);
    ttq.track('ClickButton', payload);
  }

  w.AhbabTikTok = {
    trackWhatsApp: trackWhatsApp
  };

  if (pages[file]) ttq.track('ViewContent', eventPayload(pageContent));

  d.addEventListener('click', function (event) {
    var target = event.target;
    var link = target && target.closest ? target.closest('a[href]') : null;
    if (!link || link.getAttribute('data-tiktok-track') === 'false') return;

    var href = link.href || '';
    var isWhatsApp = href.indexOf('https://wa.me/') === 0 ||
      href.indexOf('https://api.whatsapp.com/') === 0 ||
      href.indexOf('https://www.whatsapp.com/') === 0;
    if (!isWhatsApp) return;

    var container = link.closest('article, .group');
    var heading = container && container.querySelector('h3');
    if (!heading && link.parentElement) heading = link.parentElement.querySelector('h3');

    trackWhatsApp({
      id: pageContent.id,
      name: heading ? heading.textContent.trim() : pageContent.name,
      type: pageContent.type
    });
  });
}(window, document, 'ttq'));
