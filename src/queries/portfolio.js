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
                query: `
                query MyQuery {
                  allProjets {
                    titre
                    description
                    slug
                    role
                    portfolioContenu
                    date
                    icone {
                      url
                    }
                    typeDeProjet
                    mockup {
                      url
                    }
                  }
                  allProjets {
                    id
                  }
                }
                
            `
            }),
        }
    ).then((response) => response.json());

    return data.data;
}
export default GetPortfolio;
  