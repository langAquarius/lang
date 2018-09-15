import axios from "axios"
import list from "./data/data.js"
import mockAdapter from "axios-mock-adapter"


let mock = new mockAdapter(axios)

mock.onGet("/shopping").reply(200, list)