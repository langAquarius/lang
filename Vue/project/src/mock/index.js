import axios from "axios"
import mockAdapter from "axios-mock-adapter"

const mock = new mockAdapter(axios);

import Tabs from "./data/tabs";
import User from "./data/user";

mock.onGet("/tabs").reply(200, Tabs);
mock.onGet("/user").reply(200, User);

