import chai, {expect} from "chai"
import sinon from "sinon"
import sinonchai from "sinon-chai"
import sinonstubpromisse from "sinon-stub-promise"
import { describe, it } from "node:test"
global.fetch =require ("node-fetch")
chai.use(sinonchai)
sinonstubpromisse(sinon)
describe("smoketest",()=>{

it("should exist the search method",()=>{ expect(search).to.existe;})
 
}

)
describe("generice search",()=>{
  it("should call back function",()=>{ const fetchedstub =sinonstub(global,'fetch') 
    const artista=search()
  expect(fetchedstub).to.have.been.calledonce})
})
//é pra dar ero nao está com nem metade criado ainda
