<script>
    const links = [
        {link:'/',text:'Accueil'},
        {link:'/portfolio',text:'Portfolio'},
        {link:'/a-propos',text:'A propos'}
    ]
</script>

<nav class="flex justify-between mt-10 mx-10 text-white">
    <p class="font-barlow font-bold text-4xl">Galand Tristan</p>
    <ul class="flex gap-20">
        {#each links as link}
            <li>
                <a href="{link.link}">{link.text}</a>
            </li>
        {/each}
    </ul>
</nav>