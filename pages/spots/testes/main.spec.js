import chai, {expect} from "chai"
import sinon from "sinon"
import sinonchai from "sinon-chai"
import sinonstubpromisse from "sinon-stub-promise"
import { afterEach, beforeEach, describe, it } from "node:test"
global.fetch =require ("node-fetch")
chai.use(sinonchai)
sinonstubpromisse(sinon)
describe("smoketest",()=>{

it("should exist the search method",()=>{ expect(search).to.existe;})
 
}

)
describe("generice search",()=>{
  beforeEach(()=>{  let fetchedstub})

  it("should call back function",()=>{ const fetchedstub =sinonstub(global,'fetch') 
  afterEach(()=>{fetchedstub.restore})
    const artista=search()
  expect(fetchedstub).to.have.been.calledonce})
},)

describe("generice search",()=>{
  it("should call back function",()=>{ const fetchedstub =sinonstub(global,'fetch') 
    const artista=search("incubs,artista")

  expect(fetchedstub).to.have.been.calledwitch("https://api.spotify.com/v1/search?q=incubus")})
},)

describe("generice search",()=>{
  it("should call back function",()=>{ const fetchedstub =sinonstub(global,'fetch') 
    const album=search("incubs,album")

  expect(fetchedstub).to.have.been.calledwitch("spotify:track:6rqhFgbbKwnb9MLmUQDhG6")})
},)


//é pra dar erro nao está com nem metade criado ainda se nao der erro melhor
// depois trocar o endreço
