import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:8848";

export default function http(url, data = {}, type = 'get') {
  return new Promise((resolve, reject) => {
    //resolve（值1）把值1传给promise，然后再由promise把值1传给then（function（值1））；reject（值2）把值2给promise，然后再由promise把值2传给catch（function（值2））。
    axios({url: url, data: data, method: type}).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err)
    });

  })
}
