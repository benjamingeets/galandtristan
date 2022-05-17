<script>
    import Button from "./Button.svelte";
    export let services
</script>


<section id="contact" class="w-full max-w-6xl px-4 mx-auto text-white md:p-16 md:bg-loakgrey-dark rounded-2xl mt-36">
    <div class="bg-gradient rounded-2xl">
        <form netlify action="" class="flex flex-col p-4 text-lg lg:p-12 bg-background rounded-2xl xl:gap-7">
         <h2 class="text-3xl ">Me contacter</h2>
            <div class="flex flex-col items-start xl:items-center xl:flex-row">
                <label for="name" class="my-4 xl:my-0">Bonjour, je m'appelle</label>
                <input required id="name" name="name" type="text" placeholder="Nom Prenom">      
                <label for="service"class="my-4 xl:my-0">et je suis souhaite</label>
                <div class="px-5 py-4 mx-1 bg-loakgrey-dark rounded-xl">
                    <select required name="service" id="service">
                        <option value="" disabled>Séléctionner</option>
                        {#each services as {element}}
                            <option value="">{element}</option>
                        {/each}
                    </select>
                </div>
            </div>
            <div class="flex flex-col items-start xl:items-center xl:flex-row">
                <label class="my-4 xl:my-0" for="email">Vous pouvez me recontactez à </label>
                <input required placeholder="nom.prenom@gmail.com" type="email" name="email" id="email">
            </div>
            <div class="flex flex-col mt-4 lg:flex-row">
                <Button className="self-start">Envoyer mon message</Button>
                <span id="validation" class="flex items-center gap-4 mt-4 ml-4 transition opacity-0 cursor-default lg:mt-0">
                    
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.41421 2.90217L8.01703 9.50499L6.60282 10.9192L0 4.31638L1.41421 2.90217Z" fill="url(#paint0_linear_2101_59018)"/>
                    <path d="M5.18861 9.50499L13.9497 0.743896L15.3639 2.15811L6.60282 10.9192L5.18861 9.50499Z" fill="url(#paint1_linear_2101_59018)"/>
                    <defs>
                    <linearGradient id="paint0_linear_2101_59018" x1="0" y1="10.925" x2="9.37399" y2="-3.22896" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#72AFD3"/>
                    <stop offset="1" stop-color="#37ECBA"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2101_59018" x1="0" y1="10.925" x2="9.37399" y2="-3.22896" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#72AFD3"/>
                    <stop offset="1" stop-color="#37ECBA"/>
                    </linearGradient>
                    </defs>
                    </svg>                
                    Message envoyé, je vous recontacte dès que possible</span>
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
        @apply  border-b-2 border-white py-1 px-2  w-64;
    }
    input:focus{
        @apply outline-none border-[#37ECBA] ;
    }
</style>