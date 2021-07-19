<script>
import Social from "./Social.svelte"

const year = new Date()
</script>

<footer class="bg-turquoise mt-28 w-full h-36 flex justify-center flex-col items-center">
    <div>
        <ul>
            <Social/>
        </ul>
    </div>
    <p class="text-white">galandtristan.be © {year.getFullYear()} // <a target="_blank" href="https://geets.dev">{"<geets.dev/>"}</a></p>
</footer>