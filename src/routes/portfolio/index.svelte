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
    import Head from "../../components/Head.svelte"
    import { onMount } from "svelte";
    import { page } from '../../store';
    import ExternalIcon from "../../components/icons/ExternalIcon.svelte";
        onMount(()=>{
            page.update(n => "portfolio")
        })
    export let data

    const projets = data.portfolio
    const categories = data.categories
    let selector =""
    let projetsToDisplay = projets
    let currentCategorie = "tout"
    const setProjets = (cat)=>{
        projetsToDisplay = []
        currentCategorie = cat
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

<Head title="Portfolio // Galand Tristan" lien="portfolio"/>

<!-- Sélection desktop -->
<div class="max-w-screen-xl hidden md:block mx-auto my-16">
    <p class="text-center">
        {#if currentCategorie == "tout"}
         <span class="mx-4 cursor-pointer cat-selected" on:click={()=>{setProjets("tout")}}>Tout</span>
        {:else}
          <span class="mx-4 cursor-pointer" on:click={()=>{setProjets("tout")}}>Tout</span>
        {/if}

        {#each categories as categorie}
            {#if currentCategorie == categorie.nom}
               <span class="mx-4 cursor-pointer cat-selected" on:click={()=>{setProjets(categorie.nom)}}>{categorie.nom}</span>
            {:else}
             <span class="mx-4 cursor-pointer" on:click={()=>{setProjets(categorie.nom)}}>{categorie.nom}</span>
            {/if}
        {/each}

        <span class="mx-4 cursoir-pointer"><a target="_blank" href="https://instagram.com/galandtristan.graphisme">Graphisme <ExternalIcon/> </a></span>
    </p>
</div>

<!-- Sélection mobile -->

<div class="mx-4 md:hidden my-20">
    <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={selector} on:change={setProjets(selector)} class="w-full border-2 border-turquoise rounded-md mx-auto block h-16" name="" id="">
        <option value="tout">Tout</option>
        {#each categories as categorie}
            <option value="{categorie.nom}">{categorie.nom}</option>
        {/each}
    </select>
</div>

<!-- Affichage -->

<div class="flex flex-wrap max-w-screen-xl mx-auto mt-2">
    {#each projetsToDisplay as projet}
     <PortfolioThumbnail titre="{projet.titre}" link="/portfolio/{projet.slug}" image="https://api.galandtristan.be{projet.image.url}"/>
    {/each}
</div>

<style>
    .cat-selected{
        border-bottom: 2px solid #78E4CA;
        padding-bottom:4px;
    }
</style>