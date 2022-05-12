import unpoly from 'unpoly'



up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.link.config.instantSelectors.push('a[href]')
up.link.config.preloadSelectors.push('a[href]')

up.compiler('#services',()=>{
    const items = document.querySelectorAll(".service-item")
    items[0].classList.add("bg-gradient")
    items.forEach(item=>{
        item.addEventListener('click',()=>{
            document.querySelector('#services-text').querySelector('p').textContent = item.querySelector('p').textContent
            document.querySelector('#services-text').querySelector('h2').textContent = item.querySelector('h3').textContent
            items.forEach(item2=>{
                if(item2.classList.contains('bg-gradient')){
                    item2.classList.remove('bg-gradient')
                }
            })
            item.classList.toggle('bg-gradient')
        })
    })
})