// CrudServices.js
//import { CreateRecord} from "./../Configuration/Configuration";

import { CreateInformation } from "./../Configuration/Configuration";
import AxiosServices from "./AxiosServices"

const axios = new AxiosServices();  

  export default class CrudServices {
    CreateInformation(data) {
      console.log("Data: ", data, "Url: ", CreateInformation()); // Call the function to get the URL
      return axios.post(CreateInformation(), data, false);
    }
  }
  