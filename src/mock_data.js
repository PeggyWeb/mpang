const Mock = require('mockjs');
const Random = Mock.Random;
let good_name = ['忘情巴黎-33枝红玫瑰','一往情深-19枝红玫瑰','一心一意-11枝粉玫瑰','不变得承诺-99朵玫瑰','甜美公主-白玫瑰22枝，粉玫瑰22枝','我只钟情你----香槟玫瑰11枝、白色小雏菊3枝']

Mock.mock('/shop',{
  "seller": {
    "name": "花云",
    "description": "同城2小时送达",
    "deliveryTime": 38,
    "score": 4.2,
    "serviceScore": 4.1,
    "foodScore": 4.3,
    "rankRate": 69.2,
    "minPrice": 20,
    "deliveryPrice": 4,
    "ratingCount": 24,
    "sellCount": 90,
    "bulletin": "和造物者比脑洞，我们还年轻，但是我们希望和你一样保持对生活的热情，以自然之名打动离自然越来越远的人们",
    "supports": [
      {
        "type": 0,
        "description": "同城2小时送达"
      },
      {
        "type": 1,
        "description": "新客享满100减10活动"
      },
      {
        "type": 2,
        "description": "每日新鲜，全部当天采摘"
      },
      {
        "type": 3,
        "description": "200%退赔承诺"
      }
    ],
    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    "pics": [
      "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
      "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
    ],
    "infos": [
      "支持发票,请下单写好发票抬头",
      "广东省广州市天河区观置业大厦底商B座102单元1340",
      "营业时间:8:00-20:00"
    ]
  },
});
Mock.mock("/goods",{
  "goods|6":[
    {
      "name|+1": ["鲜花精选","浪漫宣言","问候长辈","探病慰问","婚庆鲜花","商务鲜花"],
      "type": -1,
      "foods|20-30": [
        {
          "name|+1": good_name,
          "price|100-600": 180,
          "oldPrice|200-900": 260,
          "description": "鲜花",
          "sellCount|100-300": 229,
          "rating|50-600": 100,
          "info": Random.cparagraph(2),
          "ratings|3-15": [
            {
              "username": "3******c",
              "rateTime": Random.date('yyyy-MM-dd'),
              "rateType|0-1": 0,
              "text": Random.csentence(1,3),
              "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
            },
          ],
          "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
          "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
        },
      ]
    },
  ]
});
Mock.mock('/rating',{
  "ratings|50-100":[
    {
      "username":Random.cname(),
      "rateTime":Random.now(),
      "deliveryTime|20-60":30,
      "score|1-5":4,
      "rateType|0-1":1,
      "text":Random.cparagraph(3),
      "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png",
      "recommend|1-3":["玫瑰","红玫瑰","粉玫瑰"]
    }
  ]
});






