import unpoly from 'unpoly'
up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.link.config.instantSelectors.push('a[href]')
up.link.config.preloadSelectors.push('a[href]')

up.compiler('body', () => {
    sendFrom()
    toggleNav()
    setSkill()
})

const setSkill = () => {
    const skills = document.querySelectorAll('.skill')
    const currentSkill = document.querySelector('#current-skill')
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            skills.forEach(s => {
                if (s.classList.contains('bg-gradient')) {
                    s.classList.remove('bg-gradient')
                }
            })
            skill.classList.add('bg-gradient')

            const title = skill.querySelector('figcaption').textContent
            const text = skill.querySelector('p').textContent
            currentSkill.querySelector('p').textContent = text
            currentSkill.querySelector('h3').textContent = title
        })

    })
}

const toggleNav = () => {
    const button = document.querySelector('header button')
    const nav = document.querySelector('header nav')
    button.addEventListener('click', () => {
        if (nav.classList.contains('-translate-x-full')) {
            nav.classList.remove('-translate-x-full')
        } else {
            nav.classList.add('-translate-x-full')
        }

        button.children[0].classList.toggle('rotate-45')
        button.children[1].classList.toggle('hidden')
        button.children[2].classList.toggle('-rotate-45')
        button.children[2].classList.toggle('-mt-[6px]')
    })
}

const sendFrom = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = new FormData(form);
        fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(formData).toString(),
            })
            .then(() => {
                const elt = document.querySelector('#validation')
                elt.classList.remove('opacity-0')
                setTimeout(() => {
                    elt.classList.add('opacity-0')
                }, 5000)
            })
            .catch((error) => alert(error));


    })
}