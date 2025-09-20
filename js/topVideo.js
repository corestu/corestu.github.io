
(function() {
  // 你的视频地址（直接提供）
  const VIDEO_SRC = "/videos/home.webm"; // <-- 替换为你的实际视频路径

  // 检测是否桌面端
  const isDesktop = window.matchMedia && window.matchMedia("(min-width: 768px)").matches;
  if (!isDesktop) return; // 移动端直接返回，不加载视频

  const container = document.querySelector("[data-hero-box]");
  const image = document.getElementById("hero-image");
  if (!container || !image) {
    console.warn("[heroVideo] container 或 image 未找到");
    return;
  }

  // 创建 video 元素
  const video = document.createElement("video");
  video.src = VIDEO_SRC;
  video.muted = true;       // 必须 muted 才能自动播放
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "auto";

  // 样式覆盖封面
  video.style.position = "absolute";
  video.style.top = "0";
  video.style.left = "0";
  video.style.width = "100%";
  video.style.height = "100%";
  video.style.objectFit = "cover";
  video.style.zIndex = "0";
  video.style.opacity = "0";
  video.style.transition = "opacity 1s ease-in-out";

  // 插入 DOM
  container.appendChild(video);

  // 视频加载完成后淡入，隐藏封面图
  video.addEventListener("loadeddata", () => {
    if (image) {
      image.style.transition = "opacity 0.5s ease-in-out";
      image.style.opacity = "0";
      setTimeout(() => (image.style.display = "none"), 500);
    }
    requestAnimationFrame(() => {
      video.style.opacity = "1";
    });
  });

  // 错误处理：视频无法加载时显示封面
  video.addEventListener("error", () => {
    console.error("[heroVideo] 视频加载失败，保留封面图");
    if (image) {
      image.style.display = "block";
      image.style.opacity = "1";
    }
    video.remove();
  });

})();
