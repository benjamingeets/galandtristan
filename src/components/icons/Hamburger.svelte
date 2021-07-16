
<script>
    export let open
</script>
{#if open}

    <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="23" width="33" height="3" rx="1.5" transform="rotate(-45 4 23)" fill="white"/>
        <rect x="6" width="33" height="3" rx="1.5" transform="rotate(45 6 0)" fill="white"/>
        </svg>
        
{:else}
<svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16.5" cy="2.5" r="2.5" fill="white"/>
    <circle cx="16.5" cy="20.5" r="2.5" fill="white"/>
    <circle cx="16.5" cy="11.5" r="2.5" fill="white"/>
    </svg>
{/if}