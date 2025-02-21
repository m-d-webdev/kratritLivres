export const _onClickOutELement = (elem, func) => {
    let fancLickOut = e => {
        if (!elem.contains(e.target)) {
            document.removeEventListener("mousedown", fancLickOut)
            func();
        }
    }
    document.addEventListener("mousedown", fancLickOut)
}