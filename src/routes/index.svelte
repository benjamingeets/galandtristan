<script>
import { onMount } from "svelte";
import { page } from '../store';
import Tristan from '../images/Tristan.svelte'
onMount(()=>{page.update(n => "")})//Update the store value to change CSS in navbar
</script>

<svelte:head>
    <title>Galand Tristan // Web design, Infographie,... // Tournai (Belgique)</title>
</svelte:head>

<div class="bg-turquoise">
    <main class="text-white flex max-w-screen-xl mx-auto flex-wrap pt-20">
        <section class="flex flex-col items-start justify-center w-5/12">
            <h2 class="text-7xl custom-font">Galand Tristan</h2>
            <p class="mr-20 text-2xl">Je m’appelle Galand Tristan. Je suis étudiant en e-business et passionné par le graphisme et le Web design. </p>
            <button>Mon travail</button>
        </section>
        <Tristan style="relative -bottom-28"/>
    </main>
</div>