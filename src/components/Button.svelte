<script>
    export let href
</script>

<svelte:element on:click this={href ? 'a' : 'button'} href={href} class="relative group block text-black hover:text-white transition-all overflow-hidden rounded">
<div class="absolute left-0 top-0 w-full h-full bg-gradient z-0 group-hover:opacity-60 transition"></div>
    <span class="block relative z-10 px-5 py-3"><slot/></span>
</svelte:element>