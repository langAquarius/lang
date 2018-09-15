import axios from "axios"
import mockAdapter from "axios-mock-adapter"

import Tabs from "./data/tabs";
import User from "./data/user";
import Product from "./data/product";
import Login from "./data/login"
import LoginCallback form "./login"

const mock = new mockAdapter(axios);

mock.onGet("/tabs").reply(200, Tabs);
mock.onGet("/user").reply(200, User);
mock.onGet("/product").reply(200, Product);
mock.onGet("/login").reply(LoginCallback);