<script context="module">
    export const load = async ({fetch}) =>{
        const res = await fetch ("/api/portfolio")
        const data = await res.json()
            return {
                props:{
                    data
                }
            }
    }
    
</script>

<script>
    import PortfolioThumbnail from "$lib/PortfolioThumbnail.svelte";
    import ExternalIcon from "$lib/icons/ExternalIcon.svelte";
    import Head from "$lib/Head.svelte"
    
    import { onMount } from "svelte";
    import { page } from '../../store';
        onMount(()=>{
            page.update(n => "portfolio")
        })
    export let data

    const projets = data.portfolio
    const categories = data.categories

    </script>

<Head title="Portfolio // Galand Tristan" lien="portfolio"/>


<div class="max-w-screen-xl hidden md:block mx-auto my-16">
    <p class="text-center">

        {#each categories as categorie}
               <span class="mx-4 cursor-pointer cat-selected">{categorie.nom}</span>

        {/each}

        <span class="mx-4 cursoir-pointer"><a target="_blank" href="https://instagram.com/galandtristan.graphisme">Graphisme <ExternalIcon/> </a></span>
    </p>
</div>



<div class="flex flex-wrap max-w-screen-xl mx-auto mt-2">
    {#each projets as projet}
     <PortfolioThumbnail titre="{projet.titre}" link="/portfolio/{projet.slug}" image="https://api.galandtristan.be{projet.image.url}"/>
    {/each}
</div>

<style>
    .cat-selected{
        border-bottom: 2px solid #78E4CA;
        padding-bottom:4px;
    }
</style>