const db = require("../db/connection");

exports.getTopicsMod = () => {
  return db.query(`SELECT * FROM topics;`).then((topics) => {
    return topics.rows;
  });
};
