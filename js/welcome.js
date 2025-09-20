// 创建容器（全局只创建一次）
const container = document.createElement("div");
container.id = "notify-container";
document.body.appendChild(container);

// 样式一定要有 fixed + top/right + z-index
// 并保证动画初始状态 transform + opacity

// 弹窗函数
window.$notify = function({ title="", message="", type="info", duration=3000, showClose=false }) {
  const notify = document.createElement("div");
  notify.className = `notify ${type}`;
  const theme = document.documentElement.getAttribute("data-theme");
  notify.classList.toggle("dark", theme === "dark");

  notify.innerHTML = `
    <div>
      <strong>${title}</strong><br>
      <span>${message}</span>
    </div>
    ${showClose ? '<span class="close-btn">&times;</span>' : ''}
  `;

  container.appendChild(notify);

  // 保证动画
  requestAnimationFrame(() => notify.classList.add("show"));

  // 自动关闭
  const timer = setTimeout(removeNotify, duration);
  if (showClose) notify.querySelector(".close-btn").addEventListener("click", removeNotify);

  function removeNotify() {
    clearTimeout(timer);
    notify.classList.remove("show");
    setTimeout(() => container.removeChild(notify), 300);
  }
};

// 加载完成或 SPA 路由变化时再触发
function showLoadNotify() {
  const duration = (performance.now() - window._startLoadTime).toFixed(2);
  const hour = new Date().getHours();
  let greetings = []; if (hour >= 5 && hour < 12) { greetings = [ "早上好 🌅 新的一天开始啦！", "清晨好 🌞 愿你今天充满能量！", "早安 ☕️ 一起加油吧！", ]; } else if (hour >= 12 && hour < 18) { greetings = [ "下午好 ☀️ 休息一下，充充电吧！", "午后好 🍵 希望你心情愉快！", "下午好 🌸 今天过得顺利吗？", ]; } else if (hour >= 18 && hour < 23) { greetings = [ "晚上好 🌙 劳累一天，好好放松吧！", "夜晚好 ✨ 享受美好的夜晚时光！", "晚安前的问候 🌌 记得早点休息哦！", ]; } else { greetings = [ "深夜好 🌌 夜深人静，注意休息！", "夜深了 🌠 别熬夜哦！", "凌晨好 🌙 世界安静了，你也放松一下吧！", ]; }

  window.$notify({
    title: greetings[Math.floor(Math.random()*greetings.length)],
    message: `本次加载耗时 ${duration} 毫秒`,
    type: "success",
    duration: 4000,
    showClose: true
  });
}

window.addEventListener("load", showLoadNotify);
