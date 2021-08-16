<script>
import { onMount } from "svelte";
import { page } from '../store';
import Tristan from '$lib/images/Tristan.svelte'
import Button from "$lib/global/Button.svelte";
import Social from "$lib/global/Social.svelte";
import Head from "$lib/Head.svelte";

onMount(()=>{page.update(n => "")})//Update the store value to change CSS in navbar
</script>


<Head/>
<div class="bg-turquoise">
    <main class="text-white flex max-w-screen-xl px-4 mx-auto flex-wrap pt-20">
        <section class="flex flex-col items-start justify-center lg:w-5/12 w-12/12">
            <h2 class="text-7xl lg:block hidden custom-font">Galand Tristan</h2>
            <p class="lg:mr-20 md:mr-10 mr-0 text-2xl my-6">Je m’appelle Galand Tristan. Je suis étudiant en e-business et passionné par le graphisme et le Web design. </p>
            <div class="flex items-center mb-6">
                <Button href="/portfolio" >Mon travail</Button>
                <div class="lg:block hidden ml-2">
                    <Social/>
                </div>
            </div>
        </section>
        <div class="-mb-14 lg:mt-0 lg:-mb-28 mt-20 lg:w-7/12 w-full">
            <Tristan />
        </div>
    </main>
</div>