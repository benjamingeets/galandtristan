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
    const categories = data.categories

    let projetsToDisplay = projets

    const setProjets = (cat)=>{
        projetsToDisplay = []
        if(cat == "tout"){
            projetsToDisplay = projets
        }else{
            projets.forEach((projet) =>{
                projet.categories.forEach((categorie) =>{
                    if(categorie.nom == cat){
                        projetsToDisplay.push(projet)
                    }
            })
        })
        }
        console.log(projetsToDisplay)
    }
    </script>

<svelte:head>
    <title>Portfolio // Galand Tristan</title>
</svelte:head>
<div class="max-w-screen-xl mx-auto mt-2">
    <p class="text-center">
        <span class="cursor-pointer" on:click={()=>{setProjets("tout")}}>Tout</span>
        {#each categories as categorie}
            <span class="cursor-pointer" on:click={()=>{setProjets(categorie.nom)}}> | {categorie.nom} </span>
        {/each}
    </p>
</div>
<div class="flex flex-wrap max-w-screen-xl mx-auto mt-2">
    {#each projetsToDisplay as projet}
     <PortfolioThumbnail titre="{projet.titre}" link="/portfolio/{projet.slug}" image="https://api.galandtristan.be{projet.image.url}"/>
    {/each}
</div>