<script>
    export let services
</script>


<section id="contact" class="w-full max-w-6xl px-4 mx-auto text-white md:p-16 md:bg-loakgrey-dark rounded-2xl mt-36">
    <div class="bg-gradient rounded-2xl">
        <form action="" class="flex flex-col p-12 text-lg bg-background rounded-2xl xl:gap-7">
         <h2 class="text-3xl ">Me contacter</h2>
            <div class="flex flex-col items-start xl:items-center xl:flex-row">
                <label for="name">Bonjour, je m'appelle</label>
                <input required id="name" name="name" type="text" placeholder="Nom Prenom">      
                <label for="service">et je suis souhaite</label>
                <div class="px-5 py-4 mx-1 bg-loakgrey-dark rounded-xl">
                    <select required name="service" id="service">
                        <option value="" disabled>Séléctionner</option>
                        {#each services as {element}}
                            <option value="">{element}</option>
                        {/each}
                    </select>
                </div>
            </div>
            <div>
                <label for="email">Vous pouvez me recontactez à </label>
                <input required placeholder="nom.prenom@gmail.com" type="email" name="email" id="email">
            </div>
        </form>
    </div>
</section>

<style>
    input, select{
        @apply  text-lg mx-1 bg-loakgrey-dark;
    }
    option{
        @apply font-sans;
    }
    input{
        @apply  border-b-2 border-white py-1 px-2 ;
    }
    input:focus{
        @apply outline-none border-[#37ECBA] ;
    }
</style>