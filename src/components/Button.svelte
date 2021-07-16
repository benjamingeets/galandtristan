<script>
    export let color = "turquoise"
    export let href = "#"
    export let target = "_self"
</script>

{#if target == "_blank"}
<a target="_blank" href="{href}" class="border-2 border-{color} rounded-md">
    <p class="mx-4 my-2 text-lg text-{color}"><slot></slot></p>
</a>
{:else}
<a href="{href}" class="border-2 border-{color} rounded-md">
    <p class="mx-4 my-2 text-lg text-{color}"><slot></slot></p>
</a>
{/if}