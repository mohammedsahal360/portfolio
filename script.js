const rightbtn = document.getElementById('right');
const leftbtn = document.getElementById('left');
const projects = document.querySelectorAll('.project');
const mobbtn = document.getElementById('mobbtn');
const menucontents = document.getElementById('mobmenu');

rightbtn.addEventListener('click', function () {
    for (let i = 0; i < projects.length; i++) {
        if (!projects[i].classList.contains('hide')) {
            projects[i].classList.add('animateout');
            projects[i].addEventListener('animationend', function handleOut() {
                projects[i].classList.remove('animateout');
                projects[i].classList.add('hide');
                projects[i].removeEventListener('animationend', handleOut);

                const nextIndex = (i + 1) % projects.length;
                projects[nextIndex].classList.remove('hide');
                projects[nextIndex].classList.add('animatein');
                projects[nextIndex].addEventListener('animationend', function handleIn() {
                    projects[nextIndex].classList.remove('animatein');
                    projects[nextIndex].removeEventListener('animationend', handleIn);
                });
            });
            break;
        }
    }
});

leftbtn.addEventListener('click', function () {
    for (let i = 0; i < projects.length; i++) {
        if (!projects[i].classList.contains('hide')) {
            projects[i].classList.add('animateoutleft');
            projects[i].addEventListener('animationend', function handleOutLeft() {
                projects[i].classList.remove('animateoutleft');
                projects[i].classList.add('hide');
                projects[i].removeEventListener('animationend', handleOutLeft);

                const prevIndex = (i - 1 + projects.length) % projects.length;
                projects[prevIndex].classList.remove('hide');
                projects[prevIndex].classList.add('animateinleft');
                projects[prevIndex].addEventListener('animationend', function handleInLeft() {
                    projects[prevIndex].classList.remove('animateinleft');
                    projects[prevIndex].removeEventListener('animationend', handleInLeft);
                });
            });
            break;
        }
    }
});

mobbtn.addEventListener('click', function(event) {
    event.stopPropagation();
        if(menucontents.classList.contains("hide")){
            menucontents.classList.add('loadmenu');
            menucontents.classList.remove("hide");
            menucontents.classList.remove('removing')
        }else{
            menucontents.classList.remove('loadmenu');
            menucontents.classList.add('removing')
            setTimeout(() => {
                menucontents.classList.add('hide');
                menucontents.classList.remove('removing');
            }, 500); 
        }
});

menucontents.addEventListener('click', function (event) {
    event.stopPropagation();
});

document.addEventListener('click', function () {
    if (!menucontents.classList.contains('hide')) {
        menucontents.classList.remove('loadmenu');
        menucontents.classList.add('removing');
        setTimeout(() => {
            menucontents.classList.add('hide');
            menucontents.classList.remove('removing');
        }, 500);
    }
});
