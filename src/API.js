import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=10&nat=us,gb,au";

const randomUserGen = {
  getRandEmpInfo: () => axios.get(APIURL),
};

export default randomUserGen;
