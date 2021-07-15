<script>
    import { page } from '../store.js';
    let current_page
    let isMobileMenu = false
    let menuHeight = "0"
    const toggleMenu = ()=>{
        isMobileMenu= !isMobileMenu
    }
        page.subscribe(value => {
            current_page = value;
        });
    const routes = [
        {name:"Accueil",href:"/"},
        {name:"Portfolio",href:"/portfolio"},
       {name:"A propos", href:"/a-propos"} 
    ]
    
	import { blur } from 'svelte/transition';

</script>

<header class="flex lg:justify-between justify-center items-center bg-turquoise text-white px-10 py-6">
<h1 class="text-2xl">Galand Tristan</h1>
<nav class="lg:w-5/12 absolute right-10">
    <ul class="justify-evenly mt-2 lg:flex hidden">
        {#each routes as route}
            <li class="flex items-center">
                {#if route.href == `/${current_page}`}
                  <a class="menu-item menu-item-selected" href="{route.href}">{route.name}</a>
                
                {:else}
                    <a class="menu-item" href="{route.href}">{route.name}</a>
                {/if}
            </li>
        {/each}
    </ul>
    <div class="block lg:hidden cursor-pointer">
        <p on:click={toggleMenu}>X</p>
    </div>
</nav>
</header>

<div class="bg-turquoise">
    {#if isMobileMenu}
<div  transition:blur="{{duration: 300}}" id="mobile-menu" class="bg-turquoise text-white pl-10 block lg:hidden overflow-hidden">
    <ul>
        {#each routes as route}
            <li class="py-2">
                <a on:click={toggleMenu} class="text-lg" href="{route.href}">{route.name}</a>
            </li>
        {/each}
    </ul>
</div>
{/if}
</div>
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