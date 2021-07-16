<script>
import Social from "./Social.svelte"
const socials = [
    {icon:"linkedin",url:"https://linkedin.com/in/galandtristan"},
    {icon:"youtube",url:"https://youtube.com"},
    {icon:"insta",url:"https://instagram.com/galandtristan.graphisme"},
    {icon:"mail", url:"mailto:galandtristan@gmail.com"}
]
</script>

<footer class="bg-turquoise absolute bottom-0 w-full h-36 flex justify-center flex-col items-center">
    <div>
        <ul>
            <Social/>
        </ul>
    </div>
    <p class="text-white">Développé par <a target="_blank" class="border-b-2" href="https://geets.dev">Benjamin Geets</a></p>
</footer>