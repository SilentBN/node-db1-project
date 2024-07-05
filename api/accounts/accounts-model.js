const db = require("../data/db-config");

const getAll = () => {
  return db("accounts");
};

const getById = (id) => {
  return db("accounts").where({ id }).first();
};

const create = (account) => {
  return db("accounts")
    .insert(account, ["id", "name", "budget"])
    .then(([newAccount]) => newAccount);
};

const updateById = (id, account) => {
  return db("accounts")
    .where({ id })
    .update(account)
    .then(() => getById(id));
};

const deleteById = (id) => {
  return getById(id).then((account) => {
    return db("accounts")
      .where({ id })
      .del()
      .then(() => account);
  });
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
