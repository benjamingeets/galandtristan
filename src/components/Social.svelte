<script>
    export let color = "white"
    import Instagram from "./icons/Instagram.svelte"
    import Linkedin from "./icons/Linkedin.svelte"
    import Youtube from "./icons/Youtube.svelte"
    import Mail from "./icons/Mail.svelte"
</script>

<div class="flex">
    <Linkedin colorIcon="{color}"/>
    <Instagram colorIcon="{color}"/>
    <Youtube colorIcon="{color}"/>
    <Mail colorIcon="{color}"/>
</div>