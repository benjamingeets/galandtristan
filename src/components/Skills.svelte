<script>
    export let skills;
    let pickedSkills = skills[0]
    console.log(skills)
</script>

<section class="hidden xl:block">
    <h2 class="text-center text-white">Mes compétences</h2>
    <div class="grid w-full max-w-6xl grid-cols-4 grid-rows-2 gap-12 mx-auto">
        <div class="col-span-2 row-span-2 pt-24 text-white bg-loakgrey-dark rounded-2xl">
            <h3 class="max-w-sm mx-auto text-3xl">{pickedSkills.nom}</h3>
            <p class="max-w-sm mx-auto ">{pickedSkills.texte}</p>
        </div>
        {#each skills as skill}
            <div on:click={()=>{pickedSkills = skill}} class={"cursor-pointer overflow-hidden aspect-square rounded-2xl" + " " + (pickedSkills == skill ? 'bg-gradient' :'')}>
                <figure class="flex flex-col items-center justify-center w-full h-full p-7 gap-7 bg-loakgrey-dark rounded-2xl">
                    <figcaption class="text-xl text-center text-white">{skill.nom}</figcaption>
                    <img  src={skill.image.url} alt={skill.image.alt} width={skill.image.width} height={skill.image.height}>
                </figure>
            </div>
        {/each}
    </div>
</section>
