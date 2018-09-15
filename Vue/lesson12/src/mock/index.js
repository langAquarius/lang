import axios from "axios"
import mockAdapter from "axios-mock-adapter"

let mock = new mockAdapter(axios);

import products from "./data/products";
import newsList from "./data/newsList";

mock.onGet("/newsDetail").reply((config) => {
  let newsId = config.params.newsid;
  return new Promise((resolve, reject) => {
    newsList.map((item, index) => {
      if (item.id == newsId) {
        resolve([200, item]);
      }
    });
  });

});
mock.onGet("/newsList").reply(200, newsList);
mock.onGet("/products").reply(200, products);
