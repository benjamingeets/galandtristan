
export const TOKEN = import.meta.env.VITE_TOKEN;
export const get = async () =>{
    const res = await fetch('https://api.notion.com/v1/databases/6bc64d27-866b-45fe-a00f-6bac586f0e30', { 
        method: 'get', 
        headers: new Headers({
          'Authorization': `${TOKEN}`, 
          'Notion-Version': '2021-05-13'
        })
      });
    const data = await res.json()
    return{
        body:{
            data
        }
    }
}