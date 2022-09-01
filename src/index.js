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
        img.style.width = '100%';
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

const section1 = (() => {
    const create_section1 = () => {
        const section1 = document.createElement('section');
        section1.setAttribute('id', 'section1');
        section1.style.display = 'flex';
        section1.style.width = '100%'
        content_div.select_div_content().appendChild(section1);
    }

    const add_section1_img = () => {
        const img = document.createElement('img');
        img.setAttribute('src', './section1_img.jpg');
        img.setAttribute('id', 'section1_img');
        img.style.width = '49.1vw';
        img.style.height = '80vh';
        img.style.objectFit = 'cover';
        document.querySelector('#section1').appendChild(img);
    }

    const add_section1_txt = () => {
        const div = document.createElement('div');
        div.setAttribute('id', 'section1_txt_div');
        const section1_header = document.createElement('h2');
        section1_header.textContent = 'Integer ut dictum massa. Cras nec tortor in nunc lacinia scelerisque a et sapien.'
        const section1_paragraph = document.createElement('p');
        section1_paragraph.innerHTML = `Nam luctus facilisis nulla, a fermentum lacus pellentesque eget. Donec varius, massa in elementum rutrum, purus sapien mattis ex, eget auctor quam massa eget lectus. In et placerat ex, vitae tempus sapien. Donec pretium nisl ut enim pretium accumsan at ut libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nisi quis venenatis vehicula. Quisque bibendum enim vitae vulputate ullamcorper. Integer ut dictum massa.<br>
        <br>Cras nec tortor in nunc lacinia scelerisque a et sapien. Phasellus et felis laoreet, gravida neque id, commodo sem. Aliquam efficitur ullamcorper hendrerit. Vivamus vitae volutpat velit. Mauris in venenatis velit, at mollis risus. Phasellus viverra commodo tortor eu euismod. Phasellus consectetur, tellus non pretium tincidunt, dui libero congue nunc, rutrum condimentum est libero quis dui.`
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'center';
        div.style.padding = '0px 50px 0px 50px';
        section1_header.style.textAlign = 'center';
        section1_header.style.fontSize = "45px";
        section1_header.style.color = 'white';
        section1_paragraph.style.textAlign = 'justified';
        section1_paragraph.style.fontSize = '20px';
        section1_paragraph.style.color = 'grey';
        div.appendChild(section1_header);
        div.appendChild(section1_paragraph);
        document.querySelector('#section1').appendChild(div);
    }

    const build_section1 = () => {
        create_section1();
        add_section1_img();
        add_section1_txt();
    }

    return{build_section1}
})();

const section2 = (() => {
    const create_section2 = () => {
        const section2 = document.createElement('section');
        section2.setAttribute('id', 'section2');
        section2.style.display = 'flex';
        section2.style.width = '100%'
        content_div.select_div_content().appendChild(section2);
    }

    const add_section2_img = () => {
        const img = document.createElement('img');
        img.setAttribute('src', './section2_img.jpg');
        img.setAttribute('id', 'section2_img');
        img.style.width = '50vw';
        img.style.height = '80vh';
        img.style.objectFit = 'cover';
        document.querySelector('#section2').appendChild(img);
    }

    const add_section2_txt = () => {
        const div = document.createElement('div');
        div.setAttribute('id', 'section2_txt_div');
        const section2_header = document.createElement('h2');
        section2_header.textContent = 'Integer ut dictum massa. Cras nec tortor in nunc lacinia scelerisque a et sapien.'
        const section2_paragraph = document.createElement('p');
        section2_paragraph.innerHTML = `Nam luctus facilisis nulla, a fermentum lacus pellentesque eget. Donec varius, massa in elementum rutrum, purus sapien mattis ex, eget auctor quam massa eget lectus. In et placerat ex, vitae tempus sapien. Donec pretium nisl ut enim pretium accumsan at ut libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor nisi quis venenatis vehicula. Quisque bibendum enim vitae vulputate ullamcorper. Integer ut dictum massa.<br>
        <br>Cras nec tortor in nunc lacinia scelerisque a et sapien. Phasellus et felis laoreet, gravida neque id, commodo sem. Aliquam efficitur ullamcorper hendrerit. Vivamus vitae volutpat velit. Mauris in venenatis velit, at mollis risus. Phasellus viverra commodo tortor eu euismod. Phasellus consectetur, tellus non pretium tincidunt, dui libero congue nunc, rutrum condimentum est libero quis dui.`
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.justifyContent = 'center';
        div.style.padding = '0px 50px 0px 50px';
        section2_header.style.textAlign = 'center';
        section2_header.style.fontSize = "45px";
        section2_header.style.color = 'white';
        section2_paragraph.style.textAlign = 'justified';
        section2_paragraph.style.fontSize = '20px';
        section2_paragraph.style.color = 'grey';
        div.appendChild(section2_header);
        div.appendChild(section2_paragraph);
        document.querySelector('#section2').appendChild(div);
    }

    const build_section2 = () => {
        create_section2();
        add_section2_txt();
        add_section2_img();
    }

    return{build_section2}
})();

const footer = (() => {
    const create_footer_div = () => {
        const div_footer = document.createElement('div');
        div_footer.setAttribute('id', 'footer_div');
        div_footer.style.height = '30vh';
        div_footer.style.background = 'rgb(57, 62, 65)';
        content_div.select_div_content().appendChild(div_footer);
    }
    const add_ul_footer = () => {
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'footer_ul');
        ul.style.listStyle = 'none';
        ul.style.display = 'flex';
        ul.style.margin = '0'
        ul.style.justifyContent = 'center';
        ul.style.gap = '30px';
        document.querySelector('#footer_div').appendChild(ul);
    }

    const add_items_footer = () => {
        const footer_items = ['Home', 'Menu', 'Contact'];

        footer_items.forEach( item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.classList.add('footer_link')
            a.textContent = item;
            a.style.fontSize = '30px';
            a.style.textDecoration = 'none';
            a.style.color = 'rgb(178, 177, 149)';
            li.insertAdjacentElement('beforeend', a);
            document.querySelector('#footer_ul').appendChild(li);
        });
    }

    const build_footer = () => {
        create_footer_div();
        add_ul_footer();
        add_items_footer()
    }

    return {build_footer};
})();


function render_page () {
    content_div.create_div_content();
    navbar.build_navbar();
    header.build_header();
    section1.build_section1();
    section2.build_section2();
    footer.build_footer();
}

render_page();