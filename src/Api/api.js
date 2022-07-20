
import { GlobalVariable } from "../util/GlobaleVariable";

const axios = require("axios");
/**
 *
 * @param {apiEndpoint} endpoint
 * @param {value} data
 * @param {get,post,patch,delete,put} type
 */
const productUrl = GlobalVariable.apiUrl.productUrl;

export const api = async (endpoint, data, type) => {
  var res;
  //   var token = await store.getState().login.values.token;
  switch (type) {
    case "post":
      await axios({
        data: data,
        method: "post",
        headers: {
          "Content-Type": "application/json",
          //   'x-auth': token,
        },
        url: productUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          console.log(err);

          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503 ||
            err.response.status === 500
          ) {
            res = err.response;
          }
        });
      break;
    case "get":
      await axios({
        method: "get",
        headers: {
          "Content-Type": "application/json",
          //   'x-auth': token,
        },
        url: productUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          console.log(err);
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503 ||
            err.response.status === 500
          ) {
            res = err.response;
          }
        });
      break;
    case "put":
      await axios({
        method: "put",
        data: data,
        headers: {
          "Content-Type": "application/json",
          //   'x-auth': token,
        },
        url: productUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            res = err.response;
          }
        });
      break;
    case "patch":
      await axios({
        method: "patch",
        data: data,
        headers: {
          "Content-Type": "application/json",
          //   'x-auth': token,
        },
        url: productUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            res = err.response;
          }
        });
      break;
    case "delete":
      await axios({
        data: data,
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          //   'x-auth': token,
        },
        url: productUrl + endpoint,
      })
        .then(function (response) {
          res = response;
        })
        .catch((err) => {
          if (
            err.response.status === 401 ||
            err.response.status === 403 ||
            err.response.status === 503
          ) {
            res = err.response;
          }
        });
      break;

    default:
      return true;
  }
  return res;
};
