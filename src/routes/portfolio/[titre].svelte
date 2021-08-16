<script context="module">
  import marked from "marked"
  import Button from "$lib/global/Button.svelte";
  import { onMount } from "svelte";
  import { page } from '../../store';
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
      const link = marked.Renderer.prototype.link.call(this, href, title, text);
      return link.replace("<a","<a target='_blank' ");
  };
  marked.setOptions({
    baseUrl:"https://api.galandtristan.be",
    renderer: renderer
  })
  
  export const load = async ({fetch,page}) => {
    const slug = page.params.titre
    const res = await fetch(`/api/${slug}`)
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
  export let projet
  const titre = projet.titre
  onMount(()=>{
    page.update(n => "portfolio") 
  })
  const description = marked(projet.description);
</script>

<Head title="{titre} // Galand Tristan" lien="portfolio/{projet.slug}" description="{projet.meta_description}" image="https://api.galandtristan.be{projet.image.url}"/>

<article class="max-w-screen-md mx-auto mt-2 px-4">
  {#if projet.figma != null}
  <iframe
    class="md:block hidden"
    title={projet.titre}
    height="450"
    width="800"
    style="max-width: 100%;"
    src="https://www.figma.com/embed?embed_host=galandtristan&url={projet.figma}"
    allowfullscreen
  />
  {/if}
  {#if projet.mockup != null}
    <div class="md:hidden block">
      <img loading="lazy" src="https://api.galandtristan.be{projet.mockup.url}" alt="{titre}">
    </div>
  {/if}
    {@html description}

  <div class="flex mt-4">
    {#if projet.bouton != null}
    <Button target="_blank" href="{projet.bouton.lien}" >{projet.bouton.texte}</Button>
  {/if}
  </div>
</article>

