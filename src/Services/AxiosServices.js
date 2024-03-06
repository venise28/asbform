import Axios from 'axios'

export default class AxiosServices {
  post(url, data, IsRequired = false, Header) {
    return Axios.post(url, data, { headers: IsRequired && Header }); // Include headers in the request
  }
}

