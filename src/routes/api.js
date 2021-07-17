export const get = async () =>{
    const res = await fetch('https://api.galandtristan.be/projets?_sort=date:DESC', { 
        method: 'get'
      });
    const portfolio = await res.json()
    return{
        body:{
            portfolio
        }
    }
}