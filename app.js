const sections = document.querySelectorAll('.section');
const sectBtns  = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
    
    //Sections Active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from the others btns
            sectBtn.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active');

            //hide others sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle Theme 
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');
        const interestTexts= document.querySelectorAll('.interest-text-light');
        interestTexts.forEach(text => {
            text.classList.toggle('text-light-on')
        })
        const iconlight= document.querySelectorAll('.icon-light');
        iconlight.forEach(icon => {
            icon.classList.toggle('icon-light-on')
        })
        const bgText = document.querySelectorAll('.bg-text');
        bgText.forEach(bgT => {
            bgT.classList.toggle('bg-light')
            console.log(bgText)
        })
    })
    
}

PageTransitions();