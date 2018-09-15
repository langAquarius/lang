import axios from "axios";
import mockAdapter from "axios-mock-adapter";

let mock = new mockAdapter(axios);

import products from "./data/products";

mock.onGet('/products').reply(200, products);
