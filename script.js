const observer =new IntersectionObserver((entries) => {
    entries.forEach((entry) => { /*this will run when visibility changes */
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const HiddenElement = document.querySelectorAll('.hidden')
HiddenElement.forEach((el) => observer.observe(el)) /* observer to observe every element */