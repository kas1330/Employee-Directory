import axios from "axios";

const APIURL = "https://randomuser.me/api/?results=10&nat=us,gb,au";

const randomUserGen = {
  getRandEmpInfo: () => axios.get(APIURL).then((res) => res.data.results),
};

export default randomUserGen;
