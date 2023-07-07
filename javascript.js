// div拖动 - 首

// 获取所有具有 ggvista1 class 的 div 元素
var vistaDivs = document.querySelectorAll('.ggvista1');

// 为每个 div 元素添加拖动功能
vistaDivs.forEach(function(div) {
  var offsetX = 0;
  var offsetY = 0;
  var isDragging = false;

  function dragStart(e) {
    if (e.type === 'touchstart') {
      // 计算拖动起始位置（触摸设备）
      offsetX = e.touches[0].clientX - div.offsetLeft;
      offsetY = e.touches[0].clientY - div.offsetTop;
    } else {
      // 计算拖动起始位置（鼠标设备）
      offsetX = e.clientX - div.offsetLeft;
      offsetY = e.clientY - div.offsetTop;
    }

    isDragging = true;
    // 禁用用户选择文本
    document.documentElement.style.userSelect = 'none';
  }

  function dragMove(e) {
    e.preventDefault();
    if (isDragging) {
      var clientX, clientY;
      if (e.type === 'touchmove') {
        // 计算拖动中的位置（触摸设备）
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        // 计算拖动中的位置（鼠标设备）
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // 设置 div 的新位置
      div.style.left = (clientX - offsetX) + 'px';
      div.style.top = (clientY - offsetY - 20) + 'px';
    }
  }

  function dragEnd() {
    isDragging = false;
    // 启用用户选择文本
    document.documentElement.style.userSelect = 'auto';
  }

  // 绑定事件
  div.addEventListener('mousedown', dragStart); // 鼠标按下事件
  div.addEventListener('touchstart', dragStart); // 触摸开始事件
  window.addEventListener('mousemove', dragMove); // 鼠标移动事件
  window.addEventListener('touchmove', dragMove); // 触摸移动事件
  window.addEventListener('mouseup', dragEnd); // 鼠标松开事件
  window.addEventListener('touchend', dragEnd); // 触摸结束事件
});

// div拖动 - 尾

// div隐藏 - 首

// 获取按钮和要隐藏的 <div> 元素
var hideBtn = document.getElementById("zxh");
var targetDiv = document.getElementById("ad");

// 添加点击事件监听器
hideBtn.addEventListener("click", function() {
  // 切换显示/隐藏状态
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
});

// div隐藏 - 尾
