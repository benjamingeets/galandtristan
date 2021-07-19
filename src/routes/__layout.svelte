<script>
import Footer from "../components/global/Footer.svelte";
import "../app.postcss";
import Navbar from "../components/global/Navbar.svelte"
</script>
<div class="flex flex-col justify-between min-h-screen">
    <div>
        <Navbar/>
<slot></slot>
    </div>
<Footer/>
</div>