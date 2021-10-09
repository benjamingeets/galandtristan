<script context="module">
export const load = async ({fetch}) =>{
    const req = await fetch("/api/get/index")
    return{
        props:{
            content : await req.json()
        }
    }
}
</script>

<script>
    export let content
    let title = "oui"
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div>
    <h1>{content.titre}</h1>
</div>