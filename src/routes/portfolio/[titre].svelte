<script context="module">

  import marked from "marked"
  marked.setOptions({
    baseUrl:"https://api.galandtristan.be"
  })
  export const load = async (context) => {
    const slug = context.page.params.titre
    const projet = await fetch(`https://api.galandtristan.be/projets?slug=${slug}`)
    const res = await projet.json()
    return { 
      props: { 
        res
      }
    }
  }
  
  </script>

<script>
import Button from "../../components/Button.svelte";
import { onMount } from "svelte";
import { page } from '../../store';
export let res
const projet = res[0]
const titre = projet.titre
onMount(()=>{
  page.update(n => "portfolio") 

})
const description = marked(res[0].description);
</script>

<svelte:head>
    <title>{titre} // Galand Tristan</title>
</svelte:head>

<article class="max-w-screen-md mx-auto mt-2 px-4">
  {#if projet.figma != null}
  <iframe
  height="450"
  width="800"
  src="https://www.figma.com/embed?embed_host=astra&url={projet.figma}"
  allowfullscreen
/>
  {/if}
    {@html description}

  <div class="flex mt-4">
    {#if projet.bouton != null}
    <Button target="_blank" href="{projet.bouton.lien}" >{projet.bouton.texte}</Button>
  {/if}
  </div>
</article>

