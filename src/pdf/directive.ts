// 拖拽指令
const dragDirective = {
    mounted(el: HTMLElement) {
        el.style.cursor = 'move';
        el.onmousedown = function(e: MouseEvent) {
            const disX = e.pageX - el.offsetLeft;
            const disY = e.pageY - el.offsetTop;
            
            document.onmousemove = function(e: MouseEvent) {
                let x = e.pageX - disX;
                let y = e.pageY - disY;
                
                // 防止拖出屏幕
                const maxX = document.body.clientWidth - el.offsetWidth;
                const maxY = document.body.clientHeight - el.offsetHeight;
                
                if (x < 0) x = 0;
                if (y < 0) y = 0;
                if (x > maxX) x = maxX;
                if (y > maxY) y = maxY;
                
                el.style.left = x + 'px';
                el.style.top = y + 'px';
            };
            
            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            };
            
            return false;
        };
    }
};

export default dragDirective; 