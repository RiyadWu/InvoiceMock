const Mock = require('mockjs')
const Random = Mock.Random


const summary = function () {
  const res = Mock.mock({
    'code': 50,
    'msg': '请求成功',
    'data': {
      "orderId": Random.string('number', 11),
      'group|1': ['广汽丰田', '上海大众'],
      'tradeDate|1': "@now",
      "tradeAmount|1-1000.1-3": 1,
    },
  })

  return res
}

const detail = function () {
  const res = Mock.mock({
    'code': 50,
    'msg': '请求成功',
    "data|1-10": [
      {
        "name|1": [
          "取送车",
          "代检",
          "代驾",
        ],
        "amount|1-1000.1": 1,
        "taxRate|0.2": 1,
      }
    ],
  })

  return res
}


module.exports = {

  [`GET /summary`] (req, res) {
    const { query } = req
    console.log(query)
    res.status(200).json(summary())
  },

  [`GET /detail`] (req, res) {
    const { query } = req
    console.log(query)
    res.status(200).json(detail())
  },

}
