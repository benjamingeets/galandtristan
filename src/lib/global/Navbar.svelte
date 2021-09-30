<script>
    import { page } from '../../store.js';
    import Hamburger from '$lib//icons/Hamburger.svelte'
    let current_page
    let isMobileMenu = false
    const toggleMenu = ()=>{
        isMobileMenu= !isMobileMenu
    }
        page.subscribe(value => {
            current_page = value;
        });
    const routes = [
        {name:"Accueil",href:"/"},
        {name:"Portfolio",href:"/portfolio"},
       {name:"À propos", href:"/a-propos"} 
    ]
    
	import { blur } from 'svelte/transition';

</script>

<header class="flex lg:justify-between justify-center items-center bg-turquoise text-white px-10 py-6">
<h1 class="text-2xl custom-font"><a href="/">Galand Tristan</a></h1>
<nav class="lg:w-5/12 absolute right-10">
    <ul class="justify-end mt-2 lg:flex hidden">
        {#each routes as route}
            <li class="flex items-center mx-8">
                {#if route.href == `/${current_page}`}
                  <a class="menu-item menu-item-selected" href="{route.href}">{route.name}</a>
                
                {:else}
                    <a class="menu-item" href="{route.href}">{route.name}</a>
                {/if}
            </li>
        {/each}
    </ul>
    <div class="block lg:hidden cursor-pointer">
        <p on:click={toggleMenu}>
            <Hamburger open={isMobileMenu}/>
        </p>
    </div>
</nav>
</header>

    {#if isMobileMenu}
<div transition:blur="{{duration: 300}}" id="mobile-menu" class="bg-turquoise shadow-md absolute w-full text-white pl-10 block lg:hidden overflow-hidden rounded-b-lg z-10">
    <ul class="mb-10">
        {#each routes as route}
            <li class="py-2">
                <a on:click={toggleMenu} class="text-lg" href="{route.href}">{route.name}</a>
            </li>
        {/each}
    </ul>
</div>
{/if}
<style>
   
    .menu-item::after{
        content:'';
        background:white;
        height: 2px;
        display: block;
        border-radius: 1px;
        margin-top:5px;
        transition: width 0.3s;
        width:0%;

        margin-left:-10%;
    }
    .menu-item:hover::after{
        width: 120%;
    }
    .menu-item-selected::after{
        width: 120%;
    }
</style>