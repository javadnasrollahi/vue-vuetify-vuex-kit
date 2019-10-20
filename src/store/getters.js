
export default  {
  axios : state => require('axios').create({
    baseURL: HttpProtc + BaseURL,
    withCredentials: true,
  }),
}
