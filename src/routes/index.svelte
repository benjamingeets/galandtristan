<script context="module">
export const load = async ({fetch}) =>{
    const reqIndex = await fetch("/api/get/index")
    const reqSocial = await fetch("/api/get/social")
    return{
        props:{
            content : await reqIndex.json(),
            social: await reqSocial.json()
        }
    }
}
</script>

<script>
    import Head from "$lib/Head.svelte"
    import {displayMd} from "$lib/markdown"
import Linkedin from "$lib/Linkedin.svelte"
import Instagram from "$lib/Instagram.svelte"
import Youtube from "$lib/Youtube.svelte"
import Mail from "$lib/Mail.svelte"
    import {onMount} from "svelte"
    onMount(()=>{
        document.querySelector("body").style.backgroundPositionY = "bottom"
    })
    export let content
    export let social
</script>

<Head/>

<div class="text-white font-barlow max-w-2xl mx-auto flex flex-col items-center md:mt-40 mt-20 px-4" >
    <h1 class="md:text-8xl text-4xl ">{content.titre}</h1>
    <p class="md:text-2xl text-lg text-center my-10">{@html displayMd(content.texte)}</p>
    <div class="flex flex-row items-center justify-center flex-wrap">
        <a class="border rounded-md border-2 hover:border-orange hover:text-orange px-3 py-1 sm:mr-4 mt-4 transition duration-200 ease-in-out" href="/portfolio"><span class="text-xl">Mes projets</span></a>
        <div class="flex justify-center gap-2 mt-4">
            {#if social.linkedin != ""}<a title="Linkedin" rel="noreferrer" class="hover:text-orange transition duration-200 ease-in-out" target="_blank" href="{social.linkedin}"><Linkedin size="50"/></a>{/if}
            {#if social.instagram != ""}<a title="Instagram" rel="noreferrer" class="hover:text-orange transition duration-200 ease-in-out" target="_blank" href="{social.instagram}"><Instagram size="50"/></a>{/if}
            {#if social.youtube != ""}<a title="Youtube" rel="noreferrer" class="hover:text-orange transition duration-200 ease-in-out" target="_blank" href="{social.youtube}"><Youtube size="50"/></a>{/if}
            {#if social.email != ""} <a title="E-mail" rel="noreferrer" class="hover:text-orange transition duration-200 ease-in-out" target="_blank" href="{social.email}"> <Mail size="50"/> </a>{/if}
        </div>
    </div>
</div>