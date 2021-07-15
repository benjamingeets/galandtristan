<script>
    import { onMount } from "svelte";
    import { page } from '../store.js';
    let current_page
    page.subscribe(value => {
            current_page = value;
        });
        onMount(()=>{
            page.update(n => "portfolio")
        })
    const routes = [
        {name:"Accueil",href:"/"},
        {name:"Portfolio",href:"/portfolio"},
       {name:"A propos", href:"/a-propos"} 
    ]

</script>

<header class="flex lg:justify-between justify-center items-center bg-turquoise text-white px-10 py-6">
<h1 class="text-2xl">Galand Tristan</h1>
<nav class="lg:w-5/12 absolute right-10">
    <ul class="justify-evenly mt-2 lg:flex hidden">
        {#each routes as route}
            <li class="flex items-center">
                {#if route.href == `/${current_page}`}
                  <a class="selected" href="{route.href}">{route.name}</a>
                
                {:else}
                    <a class="" href="{route.href}">{route.name}</a>
                {/if}
            </li>
        {/each}
    </ul>
    <div class="block lg:hidden">
        X
    </div>
</nav>
</header>

<style>
    .selected::after{
        width: 100%;
    }
    a::after{
        content:'';
        background:white;
        height: 2px;
        display: block;
        border-radius: 1px;
        margin-top:5px;
        transition: width 0.3s;
        width:0%;
    }
    a:hover::after{
        width: 100%;
    }
</style>