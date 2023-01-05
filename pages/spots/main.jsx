import { type } from "os";

export const search=(query,type)
fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
.then(data=>data.json)
console.log(fetch)

const searchartista=()=>{}
const searchalbum=()=>{}
const searchtrack=()=>{}
const searchplaylist=()=>{}







