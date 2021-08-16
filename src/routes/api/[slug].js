export const get = async (page) =>{
    const slug = page.params.slug
    const projet = await fetch(`https://api.galandtristan.be/projets?slug=${slug}`)
    const res = await projet.json()
    return{
        body:res[0]
    }
}