// 获取所有具有 ggvista1 class 的 div 元素
var vistaDivs = document.querySelectorAll('.ggvista1');

// 为每个 div 元素添加拖动功能
vistaDivs.forEach(function(div) {
  var offsetX = 0;
  var offsetY = 0;
  var isDragging = false;

  function dragStart(e) {
    // 计算鼠标或触摸点相对于 div 的偏移量
    offsetX = e.clientX - div.offsetLeft;
    offsetY = e.clientY - div.offsetTop;
    isDragging = true;
	document.documentElement.style.userSelect = 'none';
  }

  function dragMove(e) {
    if (isDragging) {
      // 更新 div 的位置
      div.style.left = (e.clientX - offsetX) + 'px';
      div.style.top = (e.clientY - offsetY) + 'px';
    }
  }

  function dragEnd() {
    isDragging = false;
	document.documentElement.style.userSelect = 'auto';
  }

  // 绑定事件
  div.addEventListener('mousedown', dragStart);
  div.addEventListener('touchstart', dragStart);
  window.addEventListener('mousemove', dragMove);
  window.addEventListener('touchmove', dragMove);
  window.addEventListener('mouseup', dragEnd);
  window.addEventListener('touchend', dragEnd);
});
