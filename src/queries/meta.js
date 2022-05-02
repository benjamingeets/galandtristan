const GetMeta = async (token) => {
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
