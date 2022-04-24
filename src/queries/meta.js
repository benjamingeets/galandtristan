const GetMeta = async () => {
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
                query: `query MyQuery {
                _site {
                  favicon {
                    url
                    tags
                    title
                    responsiveImage {
                      src
                    }
                  }
                  globalSeo {
                    siteName
                    titleSuffix
                    facebookPageUrl
                    twitterAccount
                    fallbackSeo {
                        description
                        title
                        image {
                            url
                        }
                    }
                  }
                }
              }
              
            `
            }),
        }
    ).then((response) => response.json());

    return data.data._site;
}

export default GetMeta;
