
import {CMS} from '$lib/env.js'
import {TOKEN} from '$lib/env.js'

export async function get({params}) {
    const {singleton} = params
    let req = await fetch(`${CMS}singletons/get/${singleton}`,{
        method:'GET',
        headers:{
            'Cockpit-Token':`${TOKEN}`
        }
    })
    let res = await req.json()
    console.log(res)
	return {
        body:{
            ...res
        }
    }
}