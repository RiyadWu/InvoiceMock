const Mock = require('mockjs')
const Random = Mock.Random


let summary = Mock.mock({
  'code': 50,
  'msg': '请求成功',
  'data': {
    "orderId": Random.string('number', 11),
    'group|1': ['广汽丰田', '上海大众'],
    'tradeDate|1': "@now",
    "tradeAmount|1-1000.1-3": 1,
  },
})

module.exports = {

  [`GET /summary`] (req, res) {
    const { query } = req
    console.log(query)
    res.status(200).json(summary)
  },

}
