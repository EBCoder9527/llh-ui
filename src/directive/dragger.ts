export default {
  // mounted(el) {
  //   let isDragging = false;
  //   let offsetX = 0;
  //   let offsetY = 0;
  //   let animationFrameId = 0;
  //   // 鼠标按下事件
  //   const onMouseDown = (e) => {
  //       console.log('onMouseDown-----')
  //     isDragging = true;
  //     offsetX = e.clientX - el.getBoundingClientRect().left;
  //     offsetY = e.clientY - el.getBoundingClientRect().top;
  //     document.addEventListener("mousemove", onMouseMove);
  //     document.addEventListener("mouseup", onMouseUp);
  //   };

  //   // 鼠标移动事件
  //   const onMouseMove = (e) => {
  //       console.log('move-----')
  //     if (isDragging) {
  //       // 使用 requestAnimationFrame 优化性能，避免丢帧
  //       if (animationFrameId) {
  //         cancelAnimationFrame(animationFrameId);
  //       }
  //       // 计算新的位置并更新元素的位置
  //       animationFrameId = requestAnimationFrame(() => {
  //         const x = e.clientX - offsetX;
  //         const y = e.clientY - offsetY;
  //         el.style.position = "absolute";
  //         el.style.left = `${x}px`;
  //         el.style.top = `${y}px`;
  //       });
  //     }
  //   };

  //   // 鼠标松开事件
  //   const onMouseUp = () => {
  //       console.log('onMouseUp-----')
  //     isDragging = false;
  //     document.removeEventListener("mousemove", onMouseMove);
  //     document.removeEventListener("mouseup", onMouseUp);
  //   };

  //   // 绑定鼠标按下事件
  //   document.addEventListener("mousedown", onMouseDown);
  // },
  // unmounted(el) {
   
  //   // 清理事件监听器
  //   // el.removeEventListener("mousedown", onMouseDown);
  // },

  mounted: function (el, binding) {
    el.style.cursor = 'move';
    el.style.position = 'absolute';
    el.onmousedown = function (e) {
      let disX = e.pageX - el.offsetLeft;
      let disY = e.pageY - el.offsetTop;

      if (binding.value === 'father') {
        disX = e.pageX - el.parentNode.offsetLeft;
        disY = e.pageY - el.parentNode.offsetTop;
      } else {
        disX = e.pageX - el.offsetLeft;
        disY = e.pageY - el.offsetTop;
      }

      document.onmousemove = function (e) {
        let x = e.pageX - disX;
        let y = e.pageY - disY;
        let maxX;
        let maxY;

        if (binding.value === 'father') {
          maxX =
            el.parentNode.parentNode.offsetWidth - el.parentNode.offsetWidth;
          maxY =
            el.parentNode.parentNode.offsetHeight - el.parentNode.offsetHeight;
        } else {
          maxX = el.parentNode.offsetWidth - el.offsetWidth;
          maxY = el.parentNode.offsetHeight - el.offsetHeight;
        }

        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }

        if (binding.value === 'father') {
          el.parentNode.style.left = x + 'px';
          el.parentNode.style.top = y + 'px';
        } else {
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        }
      };
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    };
    el.ontouchstart = function (e) {
      let disX = e.pageX - el.offsetLeft;
      let disY = e.pageY - el.offsetTop;

      if (binding.value === 'father') {
        disX = e.pageX - el.parentNode.offsetLeft;
        disY = e.pageY - el.parentNode.offsetTop;
      } else {
        disX = e.pageX - el.offsetLeft;
        disY = e.pageY - el.offsetTop;
      }

      document.ontouchmove = function (e) {
        let x = e.pageX - disX;
        let y = e.pageY - disY;
        let maxX;
        let maxY;

        if (binding.value === 'father') {
          maxX =
            el.parentNode.parentNode.offsetWidth - el.parentNode.offsetWidth;
          maxY =
            el.parentNode.parentNode.offsetHeight - el.parentNode.offsetHeight;
        } else {
          maxX = el.parentNode.offsetWidth - el.offsetWidth;
          maxY = el.parentNode.offsetHeight - el.offsetHeight;
        }

        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }

        if (binding.value === 'father') {
          el.parentNode.style.left = x + 'px';
          el.parentNode.style.top = y + 'px';
        } else {
          el.style.left = x + 'px';
          el.style.top = y + 'px';
        }
      };
      document.ontouchend = function () {
        document.ontouchmove = document.ontouchend = null;
      };
    };
  }
};
