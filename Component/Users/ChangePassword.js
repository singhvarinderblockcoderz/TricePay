import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import SideBar from "../SideBar";
import Navbar from "../ui/Navbar";
import { Router, useRouter } from "next/router";

function ChangeUsersPassword() {
  const router = useRouter();
  const passwordRef = useRef();

  const [email, setEmail] = useState(false);
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setEmail(localStorage.getItem('email2'));
  }, []);

  async function changePassword(data) {
    try {
     const token = localStorage.getItem('token')
        console.log(token)
      let res = await axios.post("/api/users/changeUsersPasswordApi",{token:token,data});
      const response = res.data;
      console.log(
        response,
        "to get the response from api to update the profile"
        );
        toast.success("Password updated successfully")
        setTimeout(()=>{
            router.push("/dashboard");
        },2000)
    } catch (err) {
      console.log(err);
      toast.error("can't update user")
    }
  }

 
  async function formSubmitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    console.log(data);
    const password = passwordRef.current.value;

    const data = {
      password,
      id,
    };
    console.log(data, "data entered by the use to update the profile");
    changePassword(data)
  }

  return (
    <div className="new-dashboard ">
      <SideBar />
      <section className="profile-sec profile-sects">
        <div className="container">
          <div className="row justify-content-center">
            <Navbar />
            <ToastContainer />
            <form
              className="input-sec input-top p-0"
              id="form-setup"
              onSubmit={formSubmitHandler}
            >
              <div className="input-line" id="index-line"></div>

              <div className="padding-set">
                <img className="stier-logo" src="/tcxlogo.pak.png"></img>

                <div className="input-item" style={{ marginTop: "50px" }}>
                  <h6 className="item-text"> Email Id</h6>
                  <div
                    className="input-group height-set flex-nowrap mt-0 "
                    id="mb-set"
                  >
                    <input
                      type="text"
                      className="form-control form-border"
                      value={email}
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      onChange={(e) =>
                        setData({ ...data, firstName: e.currentTarget.value })
                      }
                    />
                  </div>
                </div>

                <div className="input-item" style={{ marginTop: "50px" }}>
                  <h6 className="item-text"> New Password</h6>
                  <div
                    className="input-group height-set flex-nowrap mt-0 "
                    id="mb-set"
                  >
                    <input
                      ref={passwordRef}
                      type="text"
                      className="form-control form-border"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                   
                    />
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="btn btn-round btn-warning w-100 "
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading…" : "     UPDATE"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChangeUsersPassword;
