const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated_bg_text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1634149538380-ab8fe8bd35aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80" alt="">';
    title.innerHTML = 'Lorem ipsum';
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor non autem magnam dicta corrupti, facere, quas officia tempora laboriosam exercitationem in et eligendi mollitia labore dignissimos soluta sapiente incidunt iure.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/37.jpg" alt="" />';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach(bg => {
        bg.classList.remove('animated-bg');
    });
    animated_bg_texts.forEach(bg => {
        bg.classList.remove('animated-bg');
    });
}

