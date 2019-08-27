const express = require("express");
const app = express();
var cors = require("cors");
const data = require("../data/data");

app.use(cors());

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/:query", (req, res) => {
  const criteria = sanitizeCriteria(req.params.query);
  const newData = sortData(criteria);
  res.send(newData);
});

const sanitizeCriteria = criteria => {
  const array = criteria.split(" ");
  const sanitizedCriteria = array
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
  return sanitizedCriteria;
};

const sortData = criteria => {
  return data.sort((a, b) => {
    if (
      criteria.toLowerCase() === "city" ||
      criteria.toLowerCase() === "country"
    ) {
      if (a[criteria] < b[criteria]) {
        return -1;
      } else if (a[criteria] > b[criteria]) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (a[criteria] < b[criteria]) {
        return 1;
      } else if (a[criteria] > b[criteria]) {
        return -1;
      } else {
        return 0;
      }
    }
  });
};
