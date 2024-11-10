const values = document.querySelectorAll(".w-value");

window.addEventListener("scroll", checkValues);

checkValues()

function checkValues() {
    const trigger = window.innerHeight / 5 * 4;

    values.forEach(el => {
        const valueTop = el.getBoundingClientRect().top;

        if(valueTop < trigger) {
            el.classList.add('show')
        } else {
            el.classList.remove('show');
        }

    });
    
}