// GoTaxi Express — language switcher (uz / ru / en)
(function () {
  var LANGS = ["uz", "ru", "en"];

  function setLang(l) {
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.setAttribute("lang", l);
    try { localStorage.setItem("gtx-lang", l); } catch (e) {}
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("active", buttons[i].getAttribute("data-lang") === l);
    }
  }

  function initialLang() {
    var qs = null;
    try { qs = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (qs && LANGS.indexOf(qs) !== -1) return qs;
    var saved = null;
    try { saved = localStorage.getItem("gtx-lang"); } catch (e) {}
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    return "uz";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".lang-switch button");
    for (var i = 0; i < buttons.length; i++) {
      (function (btn) {
        btn.addEventListener("click", function () {
          setLang(btn.getAttribute("data-lang"));
        });
      })(buttons[i]);
    }
    setLang(initialLang());
  });
})();
