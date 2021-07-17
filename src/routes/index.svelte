<script>
import { onMount } from "svelte";
import { page } from '../store';
import Tristan from '../images/Tristan.svelte'
import Button from "../components/Button.svelte";
import Social from "../components/Social.svelte";

onMount(()=>{page.update(n => "")})//Update the store value to change CSS in navbar
</script>

<svelte:head>
    <title>Galand Tristan // Web design, Infographie,... // Tournai (Belgique)</title>
</svelte:head>

<div class="bg-turquoise">
    <main class="text-white flex max-w-screen-xl px-4 mx-auto flex-wrap pt-20">
        <section class="flex flex-col items-start justify-center lg:w-5/12 w-12/12">
            <h2 class="text-7xl lg:block hidden custom-font">Galand Tristan</h2>
            <p class="mr-20 text-2xl my-6">Je m’appelle Galand Tristan. Je suis étudiant en e-business et passionné par le graphisme et le Web design. </p>
            <div class="flex items-center mb-6">
                <Button href="/portfolio" >Mon travail</Button>
                <div class="lg:block hidden">
                    <Social/>
                </div>
            </div>
        </section>
        <div class="-mb-14 lg:mt-0 lg:-mb-28 mt-20 lg:w-7/12 w-full">
            <Tristan />
        </div>
    </main>
</div>