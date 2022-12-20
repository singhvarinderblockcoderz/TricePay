import axios from "axios";
// import { getSession } from "next-auth/react";

export default async function handler(req, res) {
//   const session = await getSession({req})
  console.log("USER")
  if (req.method === "POST") {
    try {
        const data = req.body;
        console.log(data, 'Data for Api')
        var config = {
            method: "post",
            url:  "http://192.168.1.95:5000/api/v1/adminauth/login",data
            // headers: {
            //   Authorization: `Bearer ${session.user.name} `,
            // },data
          };
          await axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            res.status(200).json({ data: response.data.data });
          });
   
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
