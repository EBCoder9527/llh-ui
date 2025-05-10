function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        let self = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(self, args);
        }, delay);
    }
}

function throttle(fn, delay) {
    let timer;
    return function(...args) {
        if (timer) return;
        const context = this;
        timer = setTimeout(() => {
            fn.apply(context, args);
            timer = null;
        }, delay);
    }
}