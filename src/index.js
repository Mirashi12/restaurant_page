const content_div = (() => {

    const div = document.createElement('div');

    const create_div_content = () => {
        div.setAttribute('id', 'content');
        document.querySelector('body').appendChild(div);
    }

    const select_div_content = () => {
        const div_content = document.getElementById('content');
        return div_content;
    }

    return {create_div_content, select_div_content};
})();

const navbar = (() => {
    const create_navbar_div = () => {
        const div_navbar = document.createElement('div');
        div_navbar.setAttribute('id', 'navbar_div');
        content_div.select_div_content().appendChild(div_navbar);
    }
    const add_ul_navbar = () => {
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'navbar_ul');
        document.querySelector('#navbar_div').appendChild(ul);
    }

    const add_items_navbar = () => {
        const navbar_items = ['Home', 'Menu', 'Contact'];

        navbar_items.forEach( item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.classList.add('navbar_link')
            a.textContent = item;
            li.insertAdjacentElement('beforeend', a);
            document.querySelector('#navbar_ul').appendChild(li);
        });
    }

    const build_navbar = () => {
        create_navbar_div();
        add_ul_navbar();
        add_items_navbar()
    }
    return {build_navbar};
})();

function render_page () {
    content_div.create_div_content();
    navbar.build_navbar();
}

render_page();