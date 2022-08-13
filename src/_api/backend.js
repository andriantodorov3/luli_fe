const axios = require('axios')

const qs = require("qs");

export const searchStocks = async(payload) => {

    const URL = `${process.env.VUE_APP_API_HOST}/api/v1/stocks/search`
    return axios
        .post(URL, qs.stringify(payload))

}