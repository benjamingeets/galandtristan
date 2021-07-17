<script context="module">
export const load = async ({fetch}) =>{
        const res = await fetch ("/api")
        const data = await res.json()

        return {
            props:{
                data
            }
        }
    }
    
</script>

<script>
    import { onMount } from "svelte";
    import { page } from '../../store';
        onMount(()=>{
            page.update(n => "portfolio")
        })
    export let data
    </script>

<svelte:head>
    <title>Portfolio // Galand Tristan</title>
</svelte:head>

{JSON.stringify(data)}