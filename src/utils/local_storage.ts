function set(token, obj) {
  const user = {
    flag: obj.flag,
    name: obj.name,
    pass: obj.pass
  };
  localStorage.setItem(token, JSON.stringify(user));
}

function get(token) {
  return JSON.parse(localStorage.getItem(token))
}


function remove(token) {
  localStorage.removeItem(token)
}

export {set, get, remove}