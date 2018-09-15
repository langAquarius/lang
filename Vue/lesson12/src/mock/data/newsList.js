import mock from "mockjs"

let newsList = [];
for (let i = 0; i < 10; i++) {
  let temp = i + 1;
  newsList.push(mock.mock({
    id: i,
    title: "@ctitle",
    content: "@cparagraph",
    ptime: "@datetime",
    ctime: "@time",
    url: `./static/news${temp}.jpg`
  }));
}

export default newsList;
