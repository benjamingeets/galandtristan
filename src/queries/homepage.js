const GetHomepage = async (token) => {
    const data = await fetch(
        "https://graphql.datocms.com/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: `query MyQuery {
                index {
                  description
                  image {
                    url
                    alt
                    width
                    height
                  }
                  photoDeTristan {
                    url
                    alt
                    width
                    height
                  }
                  services {
                    nom
                    texte
                    image {
                      url
                      alt
                      width
                      height
                    }
                  }
                  servicesDuFormulaire {
                    element
                  }
                  texte
                }
                _site {
                  favicon {
                    url
                    alt
                    width
                    height
                  }
                }
              }
              `
            }),
        }
    ).then((response) => response.json());

    return data.data;
}

export default GetHomepage;