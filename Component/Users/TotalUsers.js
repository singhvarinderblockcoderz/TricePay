import React, { useRef, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import SideBar from "../SideBar";
import Navbar from "../ui/Navbar";
import Loader from 'react-dots-loader'
import 'react-dots-loader/index.css'

const TotalUsers = (props) => {
  const [usersData, setUsersData] = useState(null);
  const [mounted,setMounted] = useState(false)
  const router = useRouter();

  async function totalUsers() {
    try {
      const token = localStorage.getItem("token");
      console.log(token, "for api");
      let res = await axios.post("/api/users/totalUsers", { token: token });
      const response = res.data;
      console.log(response.data.user, "to get the response from the api to get the user list");
      setUsersData(response.data.user);
    } catch (err) {
      console.log(err, err);
    }
  }
  useEffect(() => {
    setMounted(true)
    totalUsers();
  }, []);

  function clickHandler(e) {
    e.preventDefault();
    console.log(e.target.value, "to check the value");
    // const id = e.target.value;
    // localStorage.setItem("id", e.target.value);
    // router.push("/users/userDetails");
    router.push({
      pathname: "/usersDetails/"+e.target.value,
      // query: {id: e.target.value},
    })
  }

  // function changeUsersPasswordFn(e) {
  //   e.preventDefault();
  //   console.log(e.target.value,"to get the value of the target")
  //   console.log(e.target.value.slice(0, 1), "to check the value to change   ");
  //   console.log(e.target.value.slice(1, e.target.value.length));
  //   localStorage.setItem("id", e.target.value.slice(0, 1));
  //   localStorage.setItem(
  //     "email2",
  //     e.target.value.slice(1, e.target.value.length)
  //   );
  //   router.push("/users/changeUsersPassword");
  // }

  return (
    <>
      <div className="new-dashboard">
        <SideBar />
        <section className="profile-sec profile-sects">
          <div className="container">
            <div className="row justify-content-center">
              <Navbar />
              <form className="input-sec" id="ref-code">
                {/* {/ <div className="line profile-line" id="ch-line"></div> /} */}
                <h3 className="heading-text pink-text mt-2 ">
                  USERS LIST
                  <Link href={"/dashboard"}>
                    <span
                      className="arr-icon"
                      style={{
                        position: "relative",
                        left: "-48%",
                        cursor: "pointer",
                      }}
                    >
                      <img src="" className="icon-width" />
                    </span>
                  </Link>
                </h3>
                <div
                  className="me-2"
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    marginTop: "2rem",
                    marginBottom: "-2rem",
                  }}
                >
                  <input
                    type="search"
                    placeholder="search"
                    onChange={(e) => {
                      match(e);
                    }}
                  ></input>
                </div>

                <table className="table funds-table mt-5" id="funds-color">
                  <thead>
                    <tr className="">
                      <th id="fuds" scope="col">
                        Sr. No.
                      </th>
                      <th id="fuds" scope="col">
                        First Name
                      </th>
                      {/* <th id="fuds" scope="col">
                        userId
                      </th> */}
                      <th id="fuds" scope="col">
                        Email
                      </th>
                      <th id="fuds" scope="col">
                        
                      </th>
                      <th id="fuds" scope="col">
                        
                      </th>
                      {/* <th id="fuds" scope="col">
                        Position
                      </th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {mounted ? !usersData &&    <tr>
                      <td>

                      </td>
                      <td>
                      <Loader color="black"/>
                      </td>
                      <td>
                      
                      </td>
                    </tr> : null}
                    { usersData?.map((item, id) => {
                      console.log(item, "fghjkjhgfdfghj");
                      return (
                        <tr key={id}>
                          <td className="total-account">{id + 1}</td>
                          <td className="total-account">{item.name}</td>
                          <td className="total-account">{item.email}</td>
                          {/* <td>
                            <button
                              style={{
                                width: "200px",
                                borderRadius: "100px",
                                color: "black",
                              }}
                              value={item.id + item.emailId}
                              onClick={(e) => changeUsersPasswordFn(e)}
                            >
                              Change Password
                            </button>
                          </td> */}
                          <td>
                            <button
                              style={{
                                width: "100px",
                                borderRadius: "100px",
                                color: "black",
                              }}
                              value={item.id}
                              onClick={(e) => clickHandler(e)}
                            >
                              Detail
                            </button>
                          </td>
                          <td></td>
                        </tr>
                      );
                    })
                  

       }
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
  
};

export default TotalUsers;
