<script>
import Footer from "$lib/global/Footer.svelte";
import "../app.postcss";
import Navbar from "$lib/global/Navbar.svelte"
</script>
<div class="flex flex-col justify-between min-h-screen">
    <div>
        <Navbar/>
<slot></slot>
    </div>
<Footer/>
</div>