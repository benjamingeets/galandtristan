const GetSocialLinks = async (token) => { 
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
              liensSociaux {
                liens {
                  lien
                }
              }
            }
            `
        }),
        }
    ).then((response) => response.json());
    
    return data.data.liensSociaux.liens;
}

export default GetSocialLinks;