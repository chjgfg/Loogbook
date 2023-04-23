import Mock from 'mockjs'
import {data} from "./json/data.json"
import {getRandomImg} from "../utils/random_img"
import {get} from "../utils/local_storage.ts"

const url = {
  user: 'http://test.com/user',
  category: 'http://test.com/category',
  books: 'http://test.com/books',
  chapter: 'http://test.com/chapter',
  menu: 'http://test.com/menu',
  remark: 'http://test.com/remark',
  friends: 'http://test.com/friends',
};
Mock.mock(url.category + '/category_list', 'get', {
  message: 'category_list',
  code: 200,
  data: {
    "array|8": [
      {
        "id": "@guid()",
        "name": '@ctitle(3)',
        "category": "@guid()",
      }
    ]
  }
});

Mock.mock(url.user + '/user_info', 'post', {
  message: 'user',
  code: 200,
  data: {
    "user": {
      "id": "@guid()",
      "name": '@cname()',
      "pass": "",
      "sex": '@boolean()',
      "age": '@natural(1, 100)',
      "birthday": '@date("yyyy-MM-dd")',
      "constellation": "金牛座",
      "is_admin": '@boolean()',
      "image": "src/assets/touxiang.jpg",
      "email": '@email()',
      'phone': /\d{11}/
    }
  }
});

Mock.mock(url.user + '/user_img', 'post', {
  message: 'image',
  code: 200,
  data: {
    "id": "@guid()",
    "image": "src/assets/touxiang.jpg"
  }
});

Mock.mock(url.menu + '/list', 'post', {
  message: 'list',
  code: 200,
  data: {
    "list": [
      // {},
      // {
      //   "id": "",
      //   "name": '',
      //   "url": ''
      // },
      {
        "id": "@guid()",
        "name": '我的',
        "url": 'mine'
      },
      {
        "id": "@guid()",
        "name": '好友',
        "url": 'friends'
      },
      {
        "id": "@guid()",
        "name": '图书',
        "url": 'mine_book'
      },
      {
        "id": "@guid()",
        "name": '设置',
        "url": 'setting'
      },
      {
        "id": "@guid()",
        "name": '管理',
        "url": 'admin_login'
      },
      {
        "id": "@guid()",
        "name": get("user") === null ? "登录" : "退出",
        "url": 'login'
      },
    ]
  }
});

Mock.mock(url.books + '/six_books', 'post', {
  message: 'sixbooks',
  code: 200,
  data: {
    "sixbooks|6": [
      {
        "id": "@guid()",
        "name": '@cword(3, 8)',
        "author": '@cname()',
        "updatetime": '@date("yyyy-MM-dd hh:MM:dd")',
        "image": getRandomImg('@natural(1,82)'),
        "info": Mock.Random.cparagraph(4)
      }
    ]
  }
});

Mock.mock(url.books + '/books_list', 'post', {
  message: 'books',
  code: 200,
  data: {
    "books|30": [{
      "id": "@guid()",
      "name": '@cword(3, 8)',
      "chapter": '@cword(3, 8)',
      "author": '@cname(2,4)',
      "updatetime": Mock.Random.now('day', 'yyyy-MM-dd HH:mm:ss SS'),
      "image": getRandomImg('@natural(1,82)'),
    }]
  }
});

Mock.mock(url.books + '/sider_books_list', 'post', {
  message: 'siderbooks',
  code: 200,
  data: {
    "siderbooks_list|3": [{
      "siderbooks|15": [{
        "id": "@guid()",
        "name": '@csentence(5,6)',
        "author": '@cname()'
      }]
    }]
  }
});


Mock.mock(url.books + '/bookinfo', 'post', {
  message: 'bookinfo',
  code: 200,
  data: {
    "id": '@guid()',
    "title": '@cword(3, 20)',
    "intro": '@cparagraph(10, 20)',
    "author": '@cname(2,4)',
    "update_time": '@date("yyyy-MM-dd")',
    "image": getRandomImg('@natural(1,82)'),
    "sort": '@natural(1, 100)',
    "popularity": '@increment(9999999)',
    "state": '@boolean()',
    "category_book_id": '@guid()',
    "is_delete": '@boolean()'
  }
});


Mock.mock(url.books + '/chapter_list', 'post', {
  message: 'chapterlist',
  code: 200,
  data: {
    'chapterlist|60': [{
      "id": '@guid()',
      "title": '@csentence(5,6)',
      "book_list_id": '@guid()',
      "page": '@integer(1, 20)',
      "num": '@integer(1, 60)',
      "remark_num": '@integer(0, 30)',
      "is_delete": '@boolean()'
    }]
  }
});


Mock.mock(url.books + '/chapter', 'post', {
  message: 'chapter',
  code: 200,
  data: {
    "id": '@guid()',
    "title": '@csentence(5,6)',
    "book_list_id": '@guid()',
    "page": 'number',
    "num": 'number',
    "remark_num": 'number',
    "is_delete": '@boolean()',
    "author": '@cname(2,4)',
    "content": data,
  }
});

let random = Math.floor(Math.random() * 82) + 1;

Mock.mock(url.remark + '/remark_list', 'post', {
  message: 'remark_list',
  code: 200,
  data: {
    "remark_list|5-10": [
      {
        "id": '@guid()',
        "user": '@cname(2,4)',
        "img": getRandomImg('@natural(1,82)'),
        "father": '0',
        "son": '@guid()',
        "content": '@cparagraph(5,6)',
        "children|3-6": [
          {
            "id": '@guid()',
            "user": '@cname(2,4)',
            "img": getRandomImg('@natural(1,82)'),
            "father": '@guid()',
            "son": '@guid()',
            "content": '@cparagraph(5,6)',
          }
        ]
      }
    ]
  }
});


Mock.mock(url.friends + '/recends', 'post', {
  message: 'recends',
  code: 200,
  data: {
    "recends|10-20": [
      {
        "id": '@guid()',
        "name": '@cname(2,4)',
        "updatetime": '@date("yyyy-MM-dd hh:MM:dd")',
        "content": '@csentence(10,20)',
        "img": getRandomImg('@natural(1,82)'),
      }
    ]
  }
});


Mock.mock(url.friends + '/chat', 'post', {
  message: 'chat',
  code: 200,
  data: {
    "chat|20-40": [
      {
        "id": '@guid()',
        "name": '@cname(2,4)',
        "time": '@date("yyyy-MM-dd hh:MM:dd")',
        "content": '@csentence(10,20)',
        "mine": '@boolean()',
        "img": getRandomImg('@natural(1,82)'),
      }
    ]
  }
});

Mock.mock(url.friends + '/friends_list', 'post', {
  message: 'friends_list',
  code: 200,
  data: {
    "friends_list|20-40": [
      {
        "id": '@guid()',
        "name": '@cname(2,4)',
        "time": '@date("yyyy-MM-dd hh:MM:dd")',
        "content": '@csentence(10,20)',
        "mine": '@boolean()',
        "img": getRandomImg('@natural(1,82)'),
      }
    ]
  }
});

Mock.mock(url.friends + '/group_list', 'post', {
  message: 'group_list',
  code: 200,
  data: {
    "group_list|20-40": [
      {
        "id": '@guid()',
        "name": '@cname(2,4)',
        "time": '@date("yyyy-MM-dd hh:MM:dd")',
        "content": '@csentence(10,20)',
        "mine": '@boolean()',
        "img": getRandomImg('@natural(1,82)'),
      }
    ]
  }
});


Mock.mock(url.books + '/mine_books_list', 'post', {
  message: 'mine_books_list',
  code: 200,
  data: {
    "mine_books_list|15": [{
      "id": "@guid()",
      "name": '@cword(3, 8)',
      "updatetime": Mock.Random.now('day', 'yyyy-MM-dd HH:mm:ss SS'),
      "image": getRandomImg('@natural(1,82)'),
    }]
  }
});

Mock.mock(url.books + '/history', 'post', {
  message: 'history',
  code: 200,
  data: {
    "history|40": [{
      "id": '@guid()',
      "title": '@cword(3, 20)',
      "intro": '@cparagraph(10, 20)',
      "author": '@cname(2,4)',
      "update_time": Mock.Random.now('day', 'yyyy-MM-dd HH:mm:ss SS'),
      "image": getRandomImg('@natural(1,82)'),
      "sort": '@natural(1, 1000)',
      "popularity": '@increment(9999999)',
      "state": '@boolean()',
      "category_book_id": '@guid()',
      "is_delete": '@boolean()'
    }]
  }
});
