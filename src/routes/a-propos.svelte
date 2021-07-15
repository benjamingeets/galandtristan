<script>
import { onMount } from "svelte";
import { page } from '../store';
import Footer from '../components/Footer.svelte'
    onMount(()=>{
        page.update(n => "a-propos")
    })
</script>

<svelte:head>
    <title>A propos // Galand Tristan</title>
</svelte:head>

<Footer/>