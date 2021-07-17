<script context="module">
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
import { onMount } from "svelte";
import { page } from '../../store';
export let res
const projet = res[0]
onMount(()=>{
  page.update(n => "portfolio") 

})

  

</script>

<article class="max-w-screen-xl mx-auto mt-2">
  <img src="https://api.galandtristan.be{projet.image.url}" alt="">
  <h2 class="custom-font text-4xl">{projet.titre}</h2>
</article>