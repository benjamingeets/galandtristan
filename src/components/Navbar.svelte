<script>
import Button from "./Button.svelte";
import Social from "./Social.svelte";

    export let icon;
    export let currentUrl;
    export let socialLinks;
    const links = [
        {
            label: "Accueil",
            href: "/",
            button: false,
        },
        {
            label: "Réalisations",
            href: "/realisations/",
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
        if(displayNav){

            document.querySelector('body').classList.remove('overflow-hidden')
        }else{
            window.scrollTo(0,0)
            
            document.querySelector('body').classList.add('overflow-hidden')
        }
        displayNav=!displayNav;
    }
</script>

<header class="flex justify-between w-full max-w-6xl px-4 pt-3 mx-auto text-white md:pt-12 xl:px-0">
    <figure class="relative flex gap-6">
        <img class="w-8 h-8" src={icon} alt="" />
        <figcaption class="text-2xl text-white">
            <a href="/" class="before:absolute before:inset-0">Galand Tristan</a>
        </figcaption>
    </figure>
    <button on:click={toggleNav} class="relative z-50 flex flex-col justify-center gap-1 md:hidden">
        <div class={"h-[2px] bg-white w-6 transition"}></div>
        <div class={"h-[2px] bg-white w-6 transition"}></div>
        <div class={"h-[2px] bg-white w-6 transition"}></div>
        <span class="sr-only">Menu</span>
    </button>
    <nav class={"fixed flex flex-col items-center justify-center  md:relative top-0 pt-3 md:pt-0 left-0 md:translate-x-0 w-screen h-screen bg-black md:bg-transparent bg-opacity-80 z-40 md:w-auto md:h-auto transition -translate-x-full"}>
        <ul class="flex flex-col items-center md:flex-row gap-14 mb-14 lg:mb-0">
            {#each links as link}
                {#if link.button}
                    <Button on:click={toggleNav} href={link.href}>
                        <span class="text-3xl group-hover:opacity-100 md:text-lg ">
                            {link.label}
                        </span>
                    </Button>
                {:else}
                <li>
                    <a on:click={toggleNav} href={link.href} class={"transition text-3xl md:text-lg rounded hover:bg-loakgrey-dark px-5 py-2" + " " + (currentUrl.pathname.split('/')[1] == link.href.split('/')[1] ? "text-gradient": null)}>{link.label}</a>
                </li>
                {/if}
            {/each}
        </ul>
        <Social position="menu" links={socialLinks}/>
    </nav>
</header>
