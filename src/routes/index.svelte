<script>
import { onMount } from "svelte";
import { page } from '../store';
import Tristan from '../images/Tristan.svelte'
onMount(()=>{page.update(n => "")})//Update the store value to change CSS in navbar
</script>

<svelte:head>
    <title>Galand Tristan // Web design, Infographie,... // Tournai (Belgique)</title>
</svelte:head>

<main class="bg-turquoise text-white flex px-60">
    <section class="flex flex-col items-start justify-center w-6/12">
        <h2 class="text-7xl">Galand Tristan</h2>
        <p class="mr-20 text-2xl">Je m’appelle Galand Tristan. Je suis étudiant en e-business et passionné par le graphisme et le Web design. </p>
        <button>Mon travail</button>
    </section>
    <Tristan style="relative -bottom-36"/>
</main>