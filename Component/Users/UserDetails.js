import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import SideBar from "../SideBar";
import Navbar from "../ui/Navbar";
import { Router, useRouter } from "next/router";
import Link from "next/link";

function EditUser({id}) {
  console.log(id,"to see whether props are running or not")
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function getUserDetails() {
    try {
      const token = localStorage.getItem("token")
      console.log(token,"to send the token to api to get user detials")
      let res = await axios.post("/api/users/userDetails", { id: id, token:token });
      const response = res.data;
      console.log(
        response.data._user,
        "to get the response from api to show user Details"
      );
      setData(response.data._user)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="new-dashboard " style={{marginTop:"200px"}}>
      <SideBar />
      <section className="profile-sec profile-sects">
        <div className="container">
          <div className="row justify-content-center">
            <Navbar />
            <ToastContainer />

            <form
              className="input-sec input-top p-0"
              id="form-setup"
              // onSubmit={formSubmitHandler}
            >
              <div className="input-line" id="index-line"></div>

              <div className="padding-set">
                <img className="stier-logo" src="/logo.png"></img>

                <div className="input-item" style={{ marginTop: "50px" }}>
                  <h5 className="item-text"> First Name:- {data?.name}</h5>
                  {/* <div
                    className="input-group height-set flex-nowrap mt-0 "
                    id="mb-set"
                  >
                    <input
                      // ref={firstNameInputRef}
                      type="text"
                      className="form-control form-border"
                      defaultValue={data?.name}
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      // onChange={(e)=>setFirstName(e.currentTarget.value)}
                      onChange={(e) =>
                        setData({ ...data, firstName: e.currentTarget.value })
                      }
                    />
                  </div> */}
                </div>

                <div className="input-item" style={{ marginTop: "50px" }}>
                  <h5 className="item-text">Email:- {data?.email}</h5>
                  {/* <div
                    className="input-group height-set flex-nowrap mt-0 "
                    id="mb-set"
                  >
                    <input
                      // ref={lastNameInputRef}
                      type="text"
                      className="form-control form-border"
                      defaultValue={data?.lastName}
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                      // onChange={(e)=>setLastName(e.currentTarget.value)}
                      onChange={(e) =>
                        setData({ ...data, lastName: e.currentTarget.value })
                      }
                    />
                  </div> */}
                </div>

                <div className="input-item " style={{ marginTop: "50px", marginLeft:"auto" }}>
                  <h6 className="item-text">Transaction Id:- {data?.transactionId}</h6>
                  {/* <div
                    className="input-group height-set flex-nowrap mt-0"
                    id="mb-set"
                  >
                    <input
                      // ref={userNameInputRef}
                      type="text"
                      className="form-control form-border"
                      defaultValue={data?.userName}
                      autoComplete="none"
                      onChange={(e) =>
                        setData({ ...data, userName: e.currentTarget.value })
                      }
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div> */}
                </div>
                <Link href="/users/totalUsers">
                <Button
                  variant="primary"
                  className="btn btn-round btn-warning w-100 "
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                  type="submit"
                  // disabled={isLoading}
                >
                  Back
                  {/* {isLoading ? "Loading…" : "     UPDATE"} */}
                </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditUser;

// export async function getServerSideProps(context){
//   let {params} = await context;
//   let id = await params;
//   console.log(id,"to check the id of the user")
//   return {
//     props:{
//       id
//     }
//   }
// }
