<script>
    export let style =""
    export let href = "#"
    export let target = ""
</script>

{#if style == "outline"}
<a target={target} href="{href}" class="border-2 border-turquoise rounded-md">
    <p class="mx-4 my-2 text-lg text-turquoise"><slot></slot></p>
</a>
{:else}
<a target={target} href="{href}" class="border-2 bg-white border-turquoise rounded-md">
    <p class="mx-4 my-2 text-lg text-turquoise"><slot></slot></p>
</a>
{/if}