import axios from "axios";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  //const session = await getSession({ req });
  if (req.method === "POST") {
    try {
        const {data} = req.body;
        const {token} = req.body
        console.log(data,token,'data and token is here!!')
      var config = {
        method: "post",
        url: "http://3.136.7.3:5000/api/v1/adminAuth/changePassword",data,
        headers: {
          Authorization: `Bearer ${token} `,
         },
      };
      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}

