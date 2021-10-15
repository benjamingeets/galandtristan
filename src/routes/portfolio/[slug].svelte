<script context="module">
  export const load = async ({fetch,page}) => {
    const slug = page.params.slug
    const res = await fetch(`/api/get/portfolio/${slug}`)
    const projet = await res.json()
    return { 
      props: { 
        projet
      }
    }
  }
</script>

<script>
    import Head from "$lib/Head.svelte"
    import External from "$lib/External.svelte"
    import {onMount} from "svelte"
import { displayMd } from "$lib/markdown";
export let projet
import {CMS} from "$lib/env.js"
onMount(()=>{
    document.querySelector("body").style.backgroundPosition = "bottom -250px center"
})
let width
</script>

<Head title="{projet.titre}"/>
<svelte:window bind:innerWidth="{width}"/>

<div class="max-w-5xl w-full mx-auto mt-20 px-4 pb-40">
    {#if width > 1000 && projet.figma != null}
<iframe
title={projet.titre}
height="550"
width="100%"
style="max-width: 100%;"
src="https://www.figma.com/embed?embed_host=galandtristan&url={projet.figma}"
allowfullscreen
/>
{:else if width < 1000 && projet.figma != null}
<img class="rounded-md mx-auto" src="{CMS}/{projet.mockup.path}" alt={projet.mockup.meta != undefined ? projet.mockup.meta.title : projet.titre}/>
{/if}
<article class="markdown text-white text-lg">
    {@html displayMd(projet.contenu)}
</article>
<div class="flex justify-center gap-4 flex-wrap">
{#if projet.maquette && width > 1000}
      <a href="{projet.maquette}" target="_blank" class="mt-6 transition text-white border rounded-md hover:border-orange hover:text-orange flex justify-center w-52"><span class="my-2 flex items-center"> Tester la maquette <External size=20/></span> </a>
{/if}
{#if projet.lienbouton}
      <a href="{projet.lienbouton}" target="_blank" class="mt-6 transition text-white rounded-md bg-opacity-40 bg-orange hover:bg-opacity-100 hover:bg-white hover:text-orange flex justify-center w-40"><span class="my-2 flex items-center"> {projet.textebouton ? projet.textebouton : "Voir le site"}<External size=20/></span> </a>
{/if}
</div>
    
</div>

