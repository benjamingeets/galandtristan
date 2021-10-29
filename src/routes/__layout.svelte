<script context="module">
	export async function load({page}) {
		return{
            props:{
                page:page.path
            }
        }
	}
</script>


<script>
import Navbar from "$lib/Navbar.svelte";
import "../app.css";
export let page
</script>
<div class="flex flex-col min-h-screen">
        <Navbar currentLocation={page}/>
        <slot></slot>

        <footer class="mt-auto text-center text-white pb-4 font-barlow">
            Développé par Benjamin Geets // <a rel="noreferrer" target="_blank" class="text-orange" href="https://geets.dev">{`<geets.dev/>`}</a>
        </footer>
</div>