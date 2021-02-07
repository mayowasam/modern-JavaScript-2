menu.onclick = () => {
    menu.classList.toggle('menuopen')
    menu.classList.toggle('menuul')
}
console.log(menu.style)


bord.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>')

bord.onclick = () => bord.remove()


// let selectedTd;
// table.onclick = function(event) {
// let target = event.target;
// if (target.tagName != 'TD') return;
// highlight(target); // highlight it
// };
// function highlight(td) {
// if (selectedTd) { // remove the existing highlight if any
// selectedTd.classList.remove('highlight');
// }
// selectedTd = td;
// selectedTd.classList.add('highlight'); // highlight the new td
// }
let selectedTd;
table.onclick = function (event) {
    let td = event.target.closest('td');
    if (!td) return; // (2)
    if (!table.contains(td)) return; // (3)
    highlight(td); // (4)
};
function highlight(td) {
    if (selectedTd) { // remove the existing highlight if any
        selectedTd.classList.remove('highlight');
    }
    selectedTd = td;
    selectedTd.classList.add('highlight'); // highlight the new td
}

console.log(getComputedStyle(n).backgroundColor)

class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this); // (*)
    }
    save() {
        alert('saving');
    }
    load() {
        alert('loading');
    }
    search() {
        alert('searching');
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

new Menu(medium)

menus.onclick = (e) => {
    console.log(e.target)
    if (e.target.nodeName != 'A') return;
    let href = e.target.getAttribute('href');
    alert(href); // ...can be loading from the server, UI generation etc
    return false; // prevent browser action (don't go to the URL)
};


el.oncontextmenu = function (event) {
    event.preventDefault();
    alert("Button context menu");
};
document.oncontextmenu = function (event) {
    if (event.defaultPrevented) return
    event.preventDefault();
    alert("Document context menu");
};

function myfunc(event) {
    event.preventDefault();

    let ask = confirm('do you want to go to this site')
    if (!ask) return

    let hef = event.target.getAttribute('href')
    return window.open(hef) 
   
}
