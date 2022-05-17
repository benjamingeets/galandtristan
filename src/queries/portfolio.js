const GetPortfolio = async (token) => { 
    const data = await fetch(
      "https://graphql.datocms.com/",
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            query: `query MyQuery {
                allProjets(orderBy: _updatedAt_DESC) {
                  date
                  description
                  icone {
                    alt
                    height
                    url
                    title
                    width
                  }
                  mockup {
                    url
                    alt
                  }
                  slug
                  titre
                  typeDeProjet
                  role
                  portfolioContenu
                }
              }
              
            `
        }),
        }
    ).then((response) => response.json());
    
    return data.data;
}

export default GetPortfolio;