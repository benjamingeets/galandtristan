
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

<Head title="A propos // Galand Tristan" lien="a-propos"/>

<section class="max-w-screen-xl mx-auto px-4">
    <h1 class="text-5xl custom-font text-center my-16">A propos</h1>
    <div class="flex flex-wrap justify-between">
        <p class="lg:w-5/12 w-12/12">
            <img src="/media/galandtristan.webp" alt="Galand Tristan" title="Galand Tristan">
        </p>
        <div class="lg:w-6/12 w-12/12">
            <p class="lg:text-xl text-lg lg:mt-0 mt-10">
                Depuis maintenant plusieurs années, ce qui me fait vibrer, c’est le design. Que ça soit pour la réalisation d’une identité graphique, d’une carte de restaurant ou bien du design d’un site web, chaque projet confirme mon envie de faire de cette passion mon métier.<br/>
                Je me suis aussi passionné pour la randonnée légère et je réalise des temps à autre des vidéo qui en parle.
                En ce qui concerne le graphisme, j’ai un <a class="text-turquoise" target="_blank" href="https://instagram.com/galandtristan.graphisme">compte Intagram dédié</a>, n’hésitez pas à aller jeter un coup d’œil. 
            </p>
            <div class="flex items-center mt-4">
                <Button target="_blank" href="/CV_Galand_Tristan.pdf">Mon CV</Button>
                <Social color="#78E4CA"/>
            </div>
        </div>
    </div>
</section>