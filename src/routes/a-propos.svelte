<script>
import { onMount } from "svelte";
import { page } from '../store';
import Footer from '../components/Footer.svelte'
import Social from "../components/Social.svelte";
    onMount(()=>{
        page.update(n => "a-propos")
    })
</script>

<svelte:head>
    <title>A propos // Galand Tristan</title>
</svelte:head>

<section class="max-w-screen-xl mx-auto">
    <h1 class="text-4xl custom-font text-center mt-10">A propos</h1>
    <div class="flex justify-between mt-20">
        <p class="w-5/12">
            <img src="/media/galandtristan.webp" alt="Galand Tristan" title="Galand Tristan">
        </p>
        <div class="w-6/12">
            <p class="text-xl">
                Depuis maintenant plusieurs années, ce qui me fait vibrer, c’est le design. Que ça soit pour la réalisation d’une identité graphique, d’une carte de restaurant ou bien du design d’un site web, chaque projet confirme mon envie de faire de cette passion mon métier.<br/>
                Je me suis aussi passionné pour la randonnée légère et je réalise des temps à autre des vidéo qui en parle.
                En ce qui concerne le graphisme, j’ai un compte Intagram dédié, n’hésitez pas à aller jeter un coup d’œil. 
            </p>
            <div>
                <button>CV</button>
                <Social color="#78E4CA"/>
            </div>
        </div>
    </div>
</section>
<Footer/>