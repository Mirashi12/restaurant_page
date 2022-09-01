const body = document.querySelector('body');
body.style.background = 'rgb(24, 26, 27)';
body.style.margin = '0';
body.style.padding = '0';

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
        ul.style.listStyle = 'none';
        ul.style.display = 'flex';
        ul.style.justifyContent = 'center';
        ul.style.gap = '30px';
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
            a.style.fontSize = '30px';
            a.style.textDecoration = 'none';
            a.style.color = 'rgb(178, 177, 149)';
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

const header = (() => {
    const create_header_section = () => {
        const section_header = document.createElement('section');
        section_header.setAttribute('id', 'header_section');
        content_div.select_div_content().appendChild(section_header);
    }

    const add_image_header = () => {
        const img = document.createElement('img');
        img.setAttribute('src', './header_img.jpg');
        img.style.width = '100vw';
        img.style.height = '90vh';
        img.style.objectFit = 'cover';
        img.style.opacity = '0.5';
        document.querySelector('#header_section').appendChild(img);
    }

    const add_banner_header = () => {
        const banner_header = document.createElement('h1');
        banner_header.textContent = 'Your Restaurant';
        banner_header.style.color = 'white';
        banner_header.style.font = '80px Arial';
        banner_header.style.position = 'Absolute';
        banner_header.style.top = '20%';
        banner_header.style.left = '35%';
        banner_header.style.textAlign = 'center';
        banner_header.style.textShadow = '3px 3px 2px black';
        document.querySelector('#header_section').appendChild(banner_header);
    }

    const add_banner_paragraph = () => {
        const banner_paragraph = document.createElement('p');
        banner_paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur quis tellus sed blandit.';
        banner_paragraph.style.color = 'white';
        banner_paragraph.style.font = '50px Arial';
        banner_paragraph.style.position = 'Absolute';
        banner_paragraph.style.top = '50%';
        banner_paragraph.style.left = '10%';
        banner_paragraph.style.textAlign = 'center';
        banner_paragraph.style.width = '30em';
        banner_paragraph.style.textShadow = '3px 3px 2px black';
        document.querySelector('#header_section').appendChild(banner_paragraph);
    }

    const build_header = () => {
        create_header_section();
        add_image_header();
        add_banner_header();
        add_banner_paragraph();
    }

    return{build_header}
})();

function render_page () {
    content_div.create_div_content();
    navbar.build_navbar();
    header.build_header()
}

render_page();