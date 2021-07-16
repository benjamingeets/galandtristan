<script>
import { onMount } from "svelte";
import { page } from '../store';
import Footer from '../components/Footer.svelte'
import Social from "../components/Social.svelte";
import Button from "../components/Button.svelte";
    onMount(()=>{
        page.update(n => "a-propos")
    })
</script>

<svelte:head>
    <title>A propos // Galand Tristan</title>
</svelte:head>

<section class="max-w-screen-xl mx-auto px-4">
    <h1 class="text-4xl custom-font text-center my-10">A propos</h1>
    <div class="flex flex-wrap justify-between">
        <p class="lg:w-5/12 w-12/12">
            <img src="/media/galandtristan.webp" alt="Galand Tristan" title="Galand Tristan">
        </p>
        <div class="lg:w-6/12 w-12/12">
            <p class="text-xl">
                Depuis maintenant plusieurs années, ce qui me fait vibrer, c’est le design. Que ça soit pour la réalisation d’une identité graphique, d’une carte de restaurant ou bien du design d’un site web, chaque projet confirme mon envie de faire de cette passion mon métier.<br/>
                Je me suis aussi passionné pour la randonnée légère et je réalise des temps à autre des vidéo qui en parle.
                En ce qui concerne le graphisme, j’ai un <a class="text-turquoise" target="_blank" href="https://instagram.com/galandtristan.graphisme">compte Intagram dédié</a>, n’hésitez pas à aller jeter un coup d’œil. 
            </p>
            <div class="flex items-center mt-4">
                <Button target="_blank" href="https://cv.geets.dev">Mon CV</Button>
                <Social color="#78E4CA"/>
            </div>
        </div>
    </div>
</section>
<Footer/>