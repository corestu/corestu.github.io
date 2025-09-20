
// 页面开始加载时间
window._startLoadTime = performance.now();
window.addEventListener("DOMContentLoaded", () => {
  fetch("/custom-header.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("custom-header-container");
      if (container) {
        container.innerHTML = html;
      }
    })
    .catch(err => console.error("加载自定义头部失败:", err));
});
