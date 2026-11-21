(function(){
  if (window.__androidHook) return;
  window.__androidHook = true;
  if (typeof AndroidBridge === 'undefined') return;

  var origClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () {
    var a = this;
    if (a.hasAttribute('download') && String(a.href).indexOf('blob:') === 0) {
      var name = a.getAttribute('download') || 'file';
      fetch(a.href).then(function (r) { return r.blob(); }).then(function (b) {
        var fr = new FileReader();
        fr.onload = function () {
          var s = String(fr.result);
          AndroidBridge.saveFile(name, b.type || 'application/octet-stream', s.substring(s.indexOf(',') + 1));
        };
        fr.readAsDataURL(b);
      });
      return;
    }
    return origClick.apply(this, arguments);
  };

  window.print = function () { AndroidBridge.print(); };

  navigator.share = function (d) {
    d = d || {};
    if (d.files && d.files.length) return Promise.reject(new DOMException('files not supported', 'NotAllowedError'));
    AndroidBridge.share(d.title || '', d.text || '', d.url || '');
    return Promise.resolve();
  };
  navigator.canShare = function (d) { return !(d && d.files && d.files.length); };
})();
