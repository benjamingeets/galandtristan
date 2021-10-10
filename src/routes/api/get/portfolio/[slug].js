import {CMS} from '$lib/env.js'
import {TOKEN} from '$lib/env.js'

export async function get({params}) {
    let {slug} = params
    let req = await fetch(`${CMS}/api/collections/get/portfolio`,{
        method:'POST',
        headers:{
            'Cockpit-Token':`${TOKEN}`,
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            filter:{
                slug:slug
            }
        })
    })
    let res = await req.json()
	return {
        body:{
            ...res.entries[0]
        }
    }
}