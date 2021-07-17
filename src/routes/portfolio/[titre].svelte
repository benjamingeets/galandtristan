<script context="module">
export async function load(ctx) {
  let slug = ctx.page.params.titre
  return { props: { slug }}
}
</script>

<script>
       import { onMount } from "svelte";
    import { page } from '../../store';
        onMount(()=>{
            page.update(n => "portfolio")
        })
        export let slug
</script>

<div>{slug}</div>