<script>
    import { onMount } from "svelte";
    import { page } from '../../store';
import Footer from "../../components/Footer.svelte"
        onMount(()=>{
            page.update(n => "portfolio")
        })
    </script>

<svelte:head>
    <title>Portfolio // Galand Tristan</title>
</svelte:head>
<Footer/>