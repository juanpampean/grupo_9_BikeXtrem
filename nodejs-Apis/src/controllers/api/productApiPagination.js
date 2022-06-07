// video tutorial para paginación: https://morioh.com/p/a536952f3383 //

const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const fetch = require('node-fetch');
const { response } = require('express');
const { count } = require('console');
const product = require("../../database/models/product")

exports.productsPag = (req, res) => {
  const { page, size, title } = req.query;
  
const { limit, offset } = getPagination(page, size);

db.product.findAndCountAll({
    limit,
    offset,
    attributes: ["id","nombre"],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;
return { limit, offset };
};
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: modelos } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  const nextpage = (currentPage < totalPages-1) ? "http://localhost:3001/api/productsPag?page="+(currentPage+1) : "Ultima Pagina";
  const previouspage = (currentPage > totalPages-totalPages) ? "http://localhost:3001/api/productsPag?page="+(currentPage-1) : "Primer Pagina";

return { totalItems, modelos, totalPages, currentPage,nextpage,previouspage}};
