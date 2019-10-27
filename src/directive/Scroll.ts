import Vue from "vue";

Vue.directive('scroll', {
    inserted: function (el) {
        el.addEventListener("scroll", onScroll);
        scrollToBottom(el);
    },

    unbind: function (el) {
        el.removeEventListener("scroll", onScroll);
    },

    update: function (el, binding) {
        if (binding.value !== binding.oldValue) {            
            resetState(el);
        }
    },

    componentUpdated: function(el) {
        if (isScrolled(el)) {
            setUnseen(el);
        } else {
            scrollToBottom(el);
        }
    }
});

function scrollToBottom(el: HTMLElement): void {
    el.scrollTop = el.scrollHeight;
}

function onScroll(e: Event): void {
    const el: HTMLElement = e.srcElement as HTMLElement;
    updateState(el);
}

function updateState(el: HTMLElement): void {
    const scrollBottom = el.scrollHeight - el.offsetHeight;
    const isBottom = el.scrollTop >= scrollBottom;

    if (isBottom) {
        el.dataset["scrolled"] = "0";        
        el.dataset["unseen"] = "0";
    } else {
        el.dataset["scrolled"] = "1";
    }

    updateStyles(el);
}

function resetState(el: HTMLElement): void {
    el.dataset["scrolled"] = "0";        
    el.dataset["unseen"] = "0";
    updateStyles(el);
}

function setUnseen(el: HTMLElement): void {
    el.dataset["unseen"] = "1";
    updateStyles(el);
}

function isScrolled(el: HTMLElement): boolean {
    return el.dataset["scrolled"] === "1";
}

function isUnseen(el: HTMLElement): boolean {
    return el.dataset["unseen"] === "1";
}

function updateStyles(el: HTMLElement): void {
    el.classList.toggle("scrolled", isScrolled(el));
    el.classList.toggle("unseen", isUnseen(el));
}
