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
                    navigation {
                      liens {
                        lien
                        texte
                        bouton
                      }
                    }
                  }
            `
            }),
        }
    ).then((response) => response.json());

    return data.data;
}
export default GetPortfolio;
  