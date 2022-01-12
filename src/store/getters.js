
export default  {
  axios : state => require('axios').create({
    baseURL: "http://localhost:9090/",
  }),
}
