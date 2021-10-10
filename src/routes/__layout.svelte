<script>
import Navbar from "$lib/Navbar.svelte";
import "../app.css";</script>
<div class="flex flex-col min-h-screen">
        <Navbar/>
        <slot></slot>
</div>