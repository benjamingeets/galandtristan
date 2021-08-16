export const get = async () =>{
    const resPortfolio = await fetch('https://api.galandtristan.be/projets?_sort=date:DESC', { 
        method: 'get'
      });
      const resCategories = await fetch('https://api.galandtristan.be/categories', { 
        method: 'get'
      });
    const portfolio = await resPortfolio.json()
    const categories = await resCategories.json()
    return{
        body:{
            portfolio,categories
        }
    }
}