document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  const toastDiv = document.getElementById('toastDiv');
  const closeBtn = document.querySelector('.close');

  // 显示通知
  function showToast() {
	toastDiv.classList.remove('hidden');
  }

  // 关闭通知
  function closeToast() {
	toastDiv.classList.add('hidden');
  }

  // 添加动画结束事件监听器
  toastDiv.addEventListener('animationend', closeToast);

  // 监听关闭按钮点击事件
  closeBtn.addEventListener('click', closeToast);

  // 在适当的时机调用showToast()函数显示通知
  showToast();
});