<script context="module">
    export const load = async ({fetch}) =>{
        const reqPortfolio = await fetch("/api/get/portfolio/all")
        return{
            props:{
                content : await reqPortfolio.json()
            }
        }
    }
</script>

<script>
    import Head from "$lib/Head.svelte";
    import {CMS} from "$lib/env.js"
import PortfolioItem from "$lib/PortfolioItem.svelte";
    import {onMount} from "svelte"
        onMount(()=>{
            document.querySelector("body").style.backgroundPosition="bottom -250px center"
        })
    export let content
    </script>
    <Head title="Portfolio" lien="portfolio"/>

<div class="max-w-7xl mx-auto w-full text-white px-4 pt-20">
    <h1 class="font-barlow text-center text-4xl mb-20 md:block hidden">Portfolio</h1>
    <div class="flex flex-wrap mb-20">
        {#each content.projets as lien}
            <PortfolioItem titre="{lien.titre}" image="{CMS}/{lien.image.path}" link="/portfolio/{lien.slug}"/>
        {/each}
    </div>
</div>