import Mock from 'mockjs'
import {getRandomImg} from "../utils/random_img.ts"
import {get} from "../utils/local_storage.ts"

const url = {
  admin_user: 'http://test.com/admin/user',
  admin_category: 'http://test.com/admin/category',
  admin_rule: 'http://test.com/admin/rule',
  admin_books: 'http://test.com/admin/books',
  admin_chapter: 'http://test.com/admin/chapter',
  admin_menu: 'http://test.com/admin/menu',
  admin_remark: 'http://test.com/admin/remark',
  admin_friends: 'http://test.com/admin/friends',
  admin_group: 'http://test.com/admin/group',
  admin_tags: 'http://test.com/admin/tags',
  admin_addr: 'http://test.com/admin/addr',
};


Mock.mock(url.admin_category + '/category_list', 'get', {
  message: 'array',
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


Mock.mock(url.admin_user + '/user_list', 'get', {
  message: 'user_list',
  code: 200,
  data: {
    "user_list|8": [
      {
        "id": "@guid()",
        "name": '@ctitle(3)',
        "sex": '@boolean',
        "age": "@natural(1, 100)",
        "birthday": "@date" + '@time',
        "constellation": '@cword(3)',
        "is_admin": '@boolean',
        "image": getRandomImg('@natural(1,82)'),
        "email": '@email',
        "phone": '@phone',
        "address": `${Mock.Random.province()}-${Mock.Random.city()}-${Mock.Random.county()}`,
        "zip": 'number|6',
        "confidentiatity": '@sentence',
        "answer": '@word',
        "role": '@word',
      }
    ]
  }
});


Mock.mock(url.admin_rule + '/rule_list', 'get', {
  message: 'rule_list',
  code: 200,
  data: {
    "rule_list|8": [
      {
        "id": "@guid()",
        "name": '@ctitle(3)',
      }
    ]
  }
});

Mock.mock(url.admin_books + '/books_list', 'post', {
  message: 'books',
  code: 200,
  data: {
    "books|8": [{
      "id": "@guid()",
      "name": '@cword(3, 8)',
      "chapter": '@cword(3, 8)',
      "author": '@cname(2,4)',
      "updatetime": Mock.Random.now('day', 'yyyy-MM-dd HH:mm:ss SS'),
      "image": getRandomImg('@natural(1,82)'),
    }]
  }
});

Mock.mock(url.admin_books + '/chapter_list', 'post', {
  message: 'chapterlist',
  code: 200,
  data: {
    'chapterlist|40': [{
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

Mock.mock(url.admin_rule + '/rule_list', 'get', {
  message: 'array',
  code: 200,
  data: {
    "array|15": [
      {
        "id": "@guid()",
        "name": '@ctitle(3)',
        "category": "@guid()",
      }
    ]
  }
});


Mock.mock(url.admin_friends + '/friends_list', 'get', {
  message: 'user_list',
  code: 200,
  data: {
    "user_list|8": [
      {
        "id": "@guid()",
        "name": '@ctitle(3)',
        "sex": '@boolean',
        "age": "@natural(1, 100)",
        "birthday": "@date" + '@time',
        "constellation": '@cword(3)',
        "is_admin": '@boolean',
        "image": getRandomImg('@natural(1,82)'),
        "email": '@email',
        "phone": '@phone',
        "address": `${Mock.Random.province()}-${Mock.Random.city()}-${Mock.Random.county()}`,
        "zip": 'number|6',
        "confidentiatity": '@sentence',
        "answer": '@word',
        "role": '@word',
      }
    ]
  }
});

Mock.mock(url.admin_group + '/groups_list', 'get', {
  message: 'groups_list',
  code: 200,
  data: {
    "groups_list|8": [
      {
        "id": "@guid()",
        "name": '@ctitle(3)',
        "times": "@date" + '@time',
        "image": getRandomImg('@natural(1,82)')
      }
    ]
  }
});
Mock.mock(url.admin_addr + '/addrs_list', 'get', {
  message: 'addrs_list',
  code: 200,
  data: {
    "addrs_list|15": [
      {
        "id": "@guid()",
        "name": '@ctitle(3)',
        "addr": '@county(true)',
        "addr_info": '@ctitle(12)',
        "zip": '@zip',
        "phone": /\d{11}/
      }
    ]
  }
});

Mock.mock(url.admin_tags + '/tags_list', 'get', {
  message: 'tags_list',
  code: 200,
  data: {
    "tags_list|15": [
      {
        "id": "@guid()",
        "name": '@ctitle(3)',
      }
    ]
  }
});
