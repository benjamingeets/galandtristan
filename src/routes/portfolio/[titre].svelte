<script context="module">
  import marked from "marked"
  import Button from "../../components/global/Button.svelte";
  import { onMount } from "svelte";
  import { page } from '../../store';
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
import Head from "../../components/Head.svelte"

export let res
const projet = res[0]
const titre = projet.titre
onMount(()=>{
  page.update(n => "portfolio") 

})
const description = marked(res[0].description);
</script>

<Head title="{titre}" description="{projet.meta_description}" image="https://api.galandtristan.be{projet.image.url}"/>

<article class="max-w-screen-md mx-auto mt-2 px-4">
  {#if projet.figma != null}
  <iframe
  title={projet.titre}
  height="450"
  width="800"
  style="max-width: 100%;"
  src="https://www.figma.com/embed?embed_host=galandtristan&url={projet.figma}"
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

