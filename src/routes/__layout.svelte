<script>
import Navbar from "$lib/Navbar.svelte";
import "../app.css";</script>
<div class="flex flex-col min-h-screen">
        <Navbar/>
        <slot></slot>

        <footer class="mt-auto text-center text-white pb-4 font-barlow">
            Développé par Benjamin Geets // <a target="_blank" class="text-orange" href="https://geets.dev">{`<geets.dev/>`}</a>
        </footer>
</div>