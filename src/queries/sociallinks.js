const GetSocialLinks = async () => { 
    const data = await fetch(
      import.meta.env.ENDPOINT ?? process.env.ENDPOINT,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${import.meta.env.TOKEN ?? process.env.TOKEN}`,
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