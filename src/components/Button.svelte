<script>
    export let href
    export let className
</script>

<svelte:element on:click this={href ? 'a' : 'button'} href={href} class={"relative group inline-block text-black hover:text-white transition-all overflow-hidden rounded" + " " +className}>
<div class={"absolute top-0 left-0 z-0 w-full h-full transition bg-gradient group-hover:opacity-60"}></div>
    <span class="relative z-10 block px-5 py-3"><slot/></span>
</svelte:element>