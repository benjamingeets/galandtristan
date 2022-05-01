const GetPortfolio = async () => {
    const data = await fetch(
        import.meta.env.ENDPOINT,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${import.meta.env.TOKEN}`,
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
  