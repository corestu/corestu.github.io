// 高亮当前菜单
function setActiveMenu() {
  const current = window.location.pathname.replace(/\/+$/, ""); // 去掉末尾的斜杠
  document.querySelectorAll(".menu-link").forEach(link => {
    const href = (link.getAttribute("href") || "").replace(/\/+$/, ""); // 去掉末尾的斜杠
    if (href === current) {
      link.classList.add(
        "bg-blue-100", "text-blue-600", "font-semibold",
        "dark:bg-blue-900/40", "dark:text-blue-400"
      );
      // 如果这个 link 在 <details> 里，把父级 details 展开
      let detailsParent = link.closest("details");
      if (detailsParent) detailsParent.open = true;
    } else {
      link.classList.remove(
        "bg-blue-100", "text-blue-600", "font-semibold",
        "dark:bg-blue-900/40", "dark:text-blue-400"
      );
    }
  });
}

// 初次加载
setActiveMenu();

// 如果是 AJAX 导航（pushState/replaceState）
const _pushState = history.pushState;
history.pushState = function () {
  _pushState.apply(this, arguments);
  setActiveMenu();
};
window.addEventListener("popstate", setActiveMenu);
