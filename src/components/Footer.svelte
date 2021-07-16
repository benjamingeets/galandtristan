<script>
import { getStores } from "$app/stores";

import Social from "./Social.svelte"
const socials = [
    {icon:"linkedin",url:"https://linkedin.com/in/galandtristan"},
    {icon:"youtube",url:"https://youtube.com"},
    {icon:"insta",url:"https://instagram.com/galandtristan.graphisme"},
    {icon:"mail", url:"mailto:galandtristan@gmail.com"}
]
const year = new Date()
</script>

<footer class="bg-turquoise mt-10 w-full h-36 flex justify-center flex-col items-center">
    <div>
        <ul>
            <Social/>
        </ul>
    </div>
    <p class="text-white">galandtristan.be © {year.getFullYear()} // <a href="https://geets.dev">{"<geets.dev/>"}</a></p>
</footer>