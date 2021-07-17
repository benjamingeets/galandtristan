<script context="module">
export const load = async ({fetch}) =>{
        const res = await fetch ("/api")
        const data = await res.json()

        return {
            props:{
                data
            }
        }
    }
    
</script>

<script>
    import PortfolioThumbnail from "../../components/PortfolioThumbnail.svelte";
    import { onMount } from "svelte";
    import { page } from '../../store';
        onMount(()=>{
            page.update(n => "portfolio")
        })
    export let data
    const projets = data.portfolio
    </script>

<svelte:head>
    <title>Portfolio // Galand Tristan</title>
</svelte:head>

<div class="flex flex-wrap max-w-screen-xl mx-auto mt-2">
    {#each projets as projet}
     <PortfolioThumbnail titre="{projet.titre}" link="/portfolio/{projet.slug}" image="https://api.galandtristan.be{projet.image.url}"/>
    {/each}
</div>