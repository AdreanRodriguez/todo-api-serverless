const { successResponse } = require("../../responses/successResponse/index.js");
const todos = [
  {
    id: 1,
    task: "Starta en kampanj för att införa obligatoriska siestapauser i riksdagen.",
    done: false,
  },
  {
    id: 2,
    task: "Föreslå att alla politiska debatter ska avgöras genom en spontan dans-off.",
    done: false,
  },
  {
    id: 3,
    task: "Skriv en motion för att göra kanelbullar till Sveriges officiella valuta.",
    done: false,
  },
  {
    id: 4,
    task: "Övertyga statsministern att byta ut hela regeringen mot en reality-tv-show där svenska folket röstar fram ministrarna.",
    done: false,
  },
  {
    id: 5,
    task: "Organisera en folkomröstning om att förbjuda måndagar och ersätta dem med en extra fredag.",
    done: false,
  },
];

exports.handler = async (event) => {
  const pathParam = event.pathParameters.id;
  const indexPosition = todos.findIndex(
    (item) => item.id === parseInt(pathParam)
  );
  return successResponse(200, todos[indexPosition]);
};
