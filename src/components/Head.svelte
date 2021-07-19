<script>
    export let title = "Galand Tristan // Web design, infographie,... // Tournai (Belgique)"
    export let description = "Je m’appelle Galand Tristan, Je suis étudiant en e-business et passionné par le graphisme et le Web design."
    export let image = "https://galandtristan.be/share.png"
</script>

<svelte:head>
    <title>{title}</title>
    <meta
    name="description"
    content={description}
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://galandtristan.be/" />
  <meta property="og:title" content={title} />
  <meta
    property="og:description"
    content={description}
  />
  <meta
    property="og:image"
    content={image}
  />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://galandtristan.be/" />
  <meta property="twitter:title" content={title} />
  <meta
    property="twitter:description"
    content={description}
  />
  <meta
    property="twitter:image"
    content={image}
  />
</svelte:head>