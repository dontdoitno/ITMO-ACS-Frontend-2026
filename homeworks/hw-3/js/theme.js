// Переключает data-bs-theme на <html> в зависимости от системной темы пользователя (prefers-color-scheme).
// Подключается синхронно в <head> до отрисовки страницы, чтобы избежать мигания неверной темой.
(function () {
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(matches) {
    document.documentElement.setAttribute("data-bs-theme", matches ? "dark" : "light");
  }

  applyTheme(media.matches);
  media.addEventListener("change", function (e) {
    applyTheme(e.matches);
  });
})();
