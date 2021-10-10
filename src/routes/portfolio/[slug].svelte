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
    import {onMount} from "svelte"
import { displayMd } from "$lib/markdown";
export let projet
import {CMS} from "$lib/env.js"
onMount(()=>{
    document.querySelector("body").style.backgroundPositionY = "bottom -250px"
})
let width
</script>

<Head title="{projet.titre}"/>
<svelte:window bind:innerWidth="{width}"/>

<div class="max-w-5xl w-full mx-auto mt-20 px-4">
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
<img class="rounded-md mx-auto" src="{CMS}/{projet.mockup.path}" alt={projet.mockup.meta.title != undefined ? projet.mockup.meta.title : projet.titre}/>
{/if}
<article class="markdown text-white text-lg mb-40">
    {@html displayMd(projet.contenu)}
</article>
</div>

