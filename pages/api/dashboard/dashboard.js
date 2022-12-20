import axios from "axios";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  //const session = await getSession({ req });
  
  if (req.method === "POST") {
    try {
      const {token} = req.body;
      console.log(token,"to send the token to api")
      var config = {
        method: "post",
        url: "http://192.168.1.95:5000/api/v1/admin/dashboard",
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

