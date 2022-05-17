<script>
    export let links;
    export let position;
    const getHostname = (url) => {
        const currentUrl = new URL(url);
        const hostname = currentUrl.host.split(".")[0];
        return hostname;
    };
    const isInMenu =  position == "menu"
</script>

<nav class={isInMenu ? "md:hidden" : "fixed lg:left-4 top-0 hidden lg:flex h-screen items-center"}>
    <ul class={"flex" + " " + (isInMenu ? null : "flex-col gap-5")}>
        {#each links as link}
            <li>
                <a target="_blank" href={link.lien}>
                    <figure class="relative group">

                        <img class="absolute w-16 h-16 transition opacity-0 md:w-9 md:h-9 group-hover:opacity-100" src={"/assets/images/social/" + getHostname(link.lien) + "_hover.svg"} alt="">
                        <img class="w-16 h-16 md:w-9 md:h-9" src={"/assets/images/social/" + getHostname(link.lien) + ".svg"} alt="">
                        <figcaption class="sr-only">
                            {getHostname(link.lien)}
                        </figcaption>
                    </figure>
                </a>
            </li>
        {/each}
    </ul>
</nav>
