<script>
import Footer from "../components/Footer.svelte";
import "../app.postcss";
import Navbar from "../components/Navbar.svelte"
</script>
<div class="flex flex-col justify-between min-h-screen">
    <div>
        <Navbar/>
<slot></slot>
    </div>
<Footer/>
</div>