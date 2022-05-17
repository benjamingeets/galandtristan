<script>
import Button from "./Button.svelte";

    export let skills;
    let pickedSkills = skills[0]
</script>

<section class="hidden xl:block mt-36">
    <h2 class="mb-20 text-3xl text-center text-white">Mes compétences</h2>
    <div class="grid w-full max-w-6xl grid-cols-4 grid-rows-2 gap-12 mx-auto">
        <div class="col-span-2 row-span-2 pt-24 text-white bg-loakgrey-dark rounded-2xl">
            <div id="current-skill" class="w-full max-w-sm mx-auto space-y-7">
                <h3 class="text-3xl">{skills[0].nom}</h3>
                <p class="leading-[186.9%] ">{skills[0].texte}</p>
                <Button href="#contact" outline={true} className="">Me contacter</Button>
            </div>
        </div>
        {#each skills as skill}
            <div class={"cursor-pointer skill overflow-hidden aspect-square rounded-2xl" + " " + (pickedSkills == skill ? 'bg-gradient' :'')}>
                <figure class="flex flex-col items-center justify-center w-full h-full transition p-7 gap-7 bg-loakgrey-dark hover:bg-[#313131] rounded-2xl">
                    <figcaption class="text-xl text-center text-white">{skill.nom}</figcaption>
                    <img  class=" w-28" src={skill.image.url} alt={skill.image.alt} width={skill.image.width} height={skill.image.height}>
                </figure>
                <p class="sr-only">{skill.texte}</p>
            </div>
        {/each}
    </div>
</section>
