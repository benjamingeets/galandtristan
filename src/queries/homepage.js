const GetHomepage = async (token) => { 
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
                index {
                  composants {
                    ... on ContactformRecord {
                      _modelApiKey
                      contactFormServices {
                        element
                      }
                    }
                    ... on HeroRecord {
                      _modelApiKey
                      image {
                        url
                        alt
                      }
                    markdown
                      _modelApiKey
                    }
                    ... on PortfolioRecord {
                     _modelApiKey
                      nombreDeProjetsAfficher
                    }
                    ... on QuiSuisJeRecord {
                      _modelApiKey
                      photo {
                        url
                        alt
                      }
                      texte {
                        links
                        value
                        blocks
                      }
                    }
                    ... on ServiceRecord {
                      _modelApiKey
                      item {
                        texte
                        nom
                        image {
                          url
                          alt
                        }
                      }
                    }
                  }
                }
              }`
        }),
        }
    ).then((response) => response.json());
    
    return data.data.index;
}

export default GetHomepage;