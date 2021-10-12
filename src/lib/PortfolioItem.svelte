<script>
    export let titre = "err"
    export let image = "#"
    export let link = "#"
</script>

<div class="lg:w-3/12 md:w-6/12 w-12/12 p-4">
    <a class="relative flex justify-center items-center rounded-md" href="{link}">
        <p class="text-2xl absolute z-20 text-white w-full h-full flex justify-center items-center bg-grey-900 bg-opacity-40 rounded-md">{titre}</p>
        <img loading="lazy" class="rounded-md" src="{image}" alt="{titre}" title="{titre}">
    </a>
</div>

<style>
    a p{
        opacity: 0;
        background-color: rgba(200,200,200,0.5);
        transition: all ease-in-out 0.2s;
    }
    a:hover p{
        opacity: 1;
    }
    div a:hover img{
        filter:blur(10px);
        transition: all ease-in-out 300ms;
    }
    a{
        overflow: hidden;
    }
</style>