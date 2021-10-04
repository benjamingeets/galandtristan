
<script>
import { onMount } from "svelte";
import { page } from '../store';
import Social from "$lib/global/Social.svelte";
import Button from "$lib/global/Button.svelte";
import Head from "$lib/Head.svelte"
    onMount(()=>{
        page.update(n => "a-propos")
    })
</script>

<Head title="À propos // Galand Tristan" lien="a-propos"/>

<section class="max-w-screen-xl mx-auto px-4">
    <h1 class="text-5xl custom-font text-center my-16">À propos</h1>
    <div class="flex flex-wrap justify-between">
        <p class="lg:w-5/12 w-12/12">
            <img src="/media/galandtristan.webp" alt="Galand Tristan" title="Galand Tristan">
        </p>
        <div class="lg:w-6/12 w-12/12">
            <p class="lg:text-xl text-lg lg:mt-0 mt-10">
                Je suis étudiant à la HEPH Condorcet en e-Business. Depuis plusieurs années maintenant, j'ai réalisé de nombreux projets ce qui m'a permis de gagner en expérience et ce qui fait de moi une personne polyvalente et pluridisciplinaire.
                Je me suis formé au fil du temps dans l'UX design par le biais de projets et de formations.
                J'ai aussi réalisé plusieurs illustrations graphiques disponibles sur un compte <a class="text-turquoise" href="https://instagram.com/galandtristan.graphisme">Instagram</a> dédié.
            </p>
            <div class="flex items-center mt-4">
                <Button target="_blank" href="/CV_Galand_Tristan.pdf">Mon CV</Button>
                <Social color="#78E4CA"/>
            </div>
        </div>
    </div>
</section>