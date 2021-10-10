<script>
    import {page} from '../store.js'
    let currentPage
    page.subscribe(value=>{
        currentPage = value;
    })
    const links = [
        {link:'',text:'Accueil'},
        {link:'portfolio',text:'Portfolio'},
        {link:'a-propos',text:'A propos'}
    ]
</script>

<nav class="flex  mt-10 mx-10 text-white md:justify-between justify-center md:flex-row flex-col items-center">
    <a href="/" class="font-barlow font-bold md:text-4xl text-xl md:mb-0 mb-4">Galand Tristan</a>
    <ul class="flex md:gap-20 sm:gap-10 gap-4">
        {#each links as link}
            <li class="w-20 text-center">
                <a class="{link.link == currentPage ? 'text-orange font-bold' : ''} focus:text-orange focus:font-bold hover:text-orange" href="/{link.link}">{link.text}</a>
            </li>
        {/each}
    </ul>
</nav>