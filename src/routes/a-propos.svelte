<script context="module">
    export const load = async ({fetch}) =>{
        const reqAbout = await fetch("/api/get/apropos")
        const reqSocial = await fetch("/api/get/social")
        const reqCv = await fetch("/api/get/cv")
        return{
            props:{
                content : await reqAbout.json(),
                social:await reqSocial.json(),
                cv:await reqCv.json()
            }
        }
    }
</script>

<script>
import Head from "$lib/Head.svelte";
import { displayMd } from "$lib/markdown";
import {CMS} from "$lib/env"
import CV from "$lib/CV.svelte"
import Linkedin from "$lib/Linkedin.svelte"
import Instagram from "$lib/Instagram.svelte"
import Youtube from "$lib/Youtube.svelte"
import Mail from "$lib/Mail.svelte"
export let content
export let social
export let cv

</script>
<Head title="{content.titre}"/>

<div class="max-w-5xl mx-auto w-full text-white px-4 py-20">
    <h1 class="font-barlow text-center text-4xl mb-20 md:block hidden">{content.titre}</h1>
    <div class="flex justify-between md:flex-row flex-col">
        <div class="md:w-6/12 w-12/12 flex items-center">
            <img class="rounded-md" src="{CMS}/{content.image.path}" alt="{content.image.meta.title}">
        </div>
        <div class=" md:w-5/12 w-12/12">
            <div class="markdown md:text-xl text-lg"> 
                {@html displayMd(content.texte)}
            </div>
            <div class="text-white flex justify-center sm:gap-6 gap-1">
                <a class="hover:text-orange transition duration-200 ease-in-out" target="_blank" href="{CMS}/{cv.fichier}"><CV size=50/></a>
                {#if social.linkedin != ""}<a href="{social.linkedin}" class="hover:text-orange transition duration-200 ease-in-out"><Linkedin size="50"/></a>{/if}
                {#if social.instagram != ""}<a href="{social.instagram}" class="hover:text-orange transition duration-200 ease-in-out"><Instagram size="50"/></a>{/if}
                {#if social.youtube != ""}<a href="{social.youtube}" class="hover:text-orange transition duration-200 ease-in-out"><Youtube size="50"/></a>{/if}
                {#if social.email != ""}<a href="{social.email}" class="hover:text-orange transition duration-200 ease-in-out"><Mail size="50"/></a>{/if}
            </div>
        </div>
    </div>
</div>