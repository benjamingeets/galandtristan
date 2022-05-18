import unpoly from 'unpoly'
import { animate,stagger } from "motion"
up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.link.config.instantSelectors.push('a[href]')
up.link.config.preloadSelectors.push('a[href]')

up.compiler('body', () => {
    sendFrom()
    toggleNav()
    setSkill()
})

up.compiler('#hero', () => {
    animate(
        "#hero figure img",
        {
          rotate:[0,-10,10,0]
        },
        { duration:0.8, easing:"ease-in-out" }
      )
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
    const menuItems= document.querySelectorAll('header nav ul li')

    const toggleMenu = ()=>{
        nav.classList.toggle('-translate-x-full')
        button.children[0].classList.toggle('rotate-45')
        button.children[1].classList.toggle('hidden')
        button.children[2].classList.toggle('-rotate-45')
        button.children[2].classList.toggle('-mt-[6px]')
        document.querySelector('body').classList.toggle('overflow-hidden')
    }

    menuItems.forEach(item=>{
        item.addEventListener('click',()=>{
            toggleMenu()
        })
    })
    button.addEventListener('click', () => {
        toggleMenu()
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