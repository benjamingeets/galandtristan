<script>
    export let icon;
    export let currentUrl;
    const links = [
        {
            label: "Accueil",
            href: "/",
            button: false,
        },
        {
            label: "Réalisations",
            href: "/realisations",
            button: false,
        },
        {
            label: "Me contacter",
            href: "#contact",
            button: true,
        },
    ];
    let displayNav = false
    const toggleNav = () =>{
        displayNav=!displayNav;
    }
</script>

<header class="text-white flex justify-between pt-3 md:pt-12 max-w-6xl w-full mx-auto px-4 lg:px-0">
    <figure class="flex gap-6 relative">
        <img class="w-8 h-8" src={icon} alt="" />
        <figcaption class="text-white text-2xl">
            <a href="/" class="before:absolute before:inset-0">Galand Tristan</a>
        </figcaption>
    </figure>
    <button on:click={toggleNav} class="md:hidden relative z-30 flex justify-center flex-col gap-1">
        <div class={"h-[2px] bg-white w-6 transition" + " " + (displayNav ? 'rotate-45':'')}></div>
        <div class={"h-[2px] bg-white w-6 transition" + " " + (displayNav ? 'hidden':'')}></div>
        <div class={"h-[2px] bg-white w-6 transition" + " " + (displayNav ? '-rotate-45 -mt-[6px]':'')}></div>
        <span class="sr-only">Menu</span>
    </button>
    <nav class={"absolute flex flex-col items-center justify-center  md:relative top-0 pt-3 md:pt-0 left-0 md:translate-x-0 w-screen h-screen bg-black md:bg-transparent bg-opacity-80 z-20 md:w-auto md:h-auto transition " + " " + (displayNav ? '':' -translate-x-full ')}>
        <ul class="flex flex-col md:flex-row gap-14">
            {#each links as link}
                <li>
                    <a href={link.href} class={"transition text-3xl md:text-lg rounded hover:bg-loakgrey-dark px-5 py-2" + " " + (currentUrl.pathname == link.href ? "text-gradient": null)}>{link.label}</a>
                </li>
            {/each}
        </ul>
    </nav>
</header>
