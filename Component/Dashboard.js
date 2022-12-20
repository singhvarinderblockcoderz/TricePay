import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { signOut } from "next-auth/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import SideBar from "./SideBar";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "./ui/Navbar";
import ProgressBar from 'react-bootstrap/ProgressBar';


const NewDashboard = () => {
  const [totalData, setTotalData] = useState();
  const router = useRouter();
  const [amounts, setAmounts] = useState();;
  const [isLoadingRef, setLoadingRef] = useState(false);

  async function getDashboardData() {
    try {
      const token=localStorage.getItem('token')
      let res = await axios.post("/api/dashboard/dashboard", {token:token});
      const response = res.data
      console.log(response,"to get the response from api to show the dashboard data")
      setTotalData(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDashboardData();
  }, []);

  function logoutHandler() {
    window.localStorage.clear();
    signOut();
  }
  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  async function popSubmit() {
    // router.push("/activateWallet")
  }

  return (
    <div className="new-dashboard">
      <SideBar />
      <section className="profile-sec profile-sects">
        <div className="container">
          <div className="row">
            <Navbar />
            <form className="funds-sec">
              <h3>
                {" "}
                {/* <span
                  style={{
                    color: "#04031c!important",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  Welcome {userInfo?.firstName} !{" "}
                </span>{" "} */}
              </h3>

              {/* <div
                className="left-dashboard  first-set mt-1"
                id="leftt-section"
                style={{marginBottom:"30px"}}
              >
                {" "}
                <h5>TCX Admin Panel</h5>
              </div> */}

              {/* {/ <Link href={"/withdrawInfo"}> /} */}

              {/* {/ </Link> /} */}

              <ToastContainer />

              <div className="col-head mt-1" id="col-head">
                <h6 className="mt-2 mb-4" style={{ fontSize: "14px" }}>
                  {" "}
                </h6>

                <div className="col-md-12 left-headSec">
                  <div
                    className="link-head  "
                    id="first-sec"
                    style={{ justifyContent: "space-between" }}
                  >
                    {/* <Link href={"/activateWallet"}> */}
                    {/* {trueStatus?( */}

                    {/* <div className="link-dashboard  first-set" id="first-item" >
                        {" "}
                        <h6 className="dashboard-txt "> ACTIVATED</h6>
                         <p className="dashboard-txts"> {amounts}</p>
                      </div> */}

                    {/* ):  */}

                    <Link href={"/users/totalUsers"}>
                      <div
                        className="link-dashboard  first-set"
                        id="lr-section"
                      >
                        {" "}
                        <i
                          className="fa-sharp fa-solid fa-sack-dollar"
                          id="dashboard-icons"
                        ></i>
                       
                            <p className="dashboard-txts">
                          {" "}
                            {totalData?.totalUser?.totalUser}
                        </p>
                         
                       
                        <h6 className="dashboard-txt">  COUNTER OF USERS</h6>
                      </div>
                    </Link>

                    {/* <Link href='/reports/buyRequest' data-toggle="modal" data-target="#exampleModalCenter">
                    <div
                      onClick={popSubmit}
                      className="link-dashboard  first-set"
                      id="firstet-item"
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                    >
                      <i
                        className="fa-solid fa-arrow-up-from-ground-water"
                        id="dashboard-icons"
                      ></i>
                       
                            <p className="dashboard-txts">
                          {" "}
                            {totalData?.totalBuyRequest?.totalBuyRequest}
                        </p>
                         
                      <p className="dashboard-txts"> {}</p>
                      <h6 className="dashboard-txt "> Buy Request</h6>
                    </div>
                    </Link> */}

                    {/* <Link href="/reports/deposits">
                      <div
                        className="link-dashboard first-set"
                        id="invest-item"
                      >
                        <i
                          className="fa-solid fa-wallet"
                          id="dashboard-icons"
                        ></i>
                        <p className="dashboard-txts">
                          {}
                        </p>
                        <h6 className="dashboard-txt">Deposit</h6>
                      </div>
                    </Link> */}

                    {/* <Link href="/merchantCount">
                      <div
                        className="link-dashboard first-set"
                        id="faquery-item"
                      >
                        <i
                          className="fa-solid fa-money-bill-transfer"
                          id="dashboard-icons"
                        ></i>
                        <p className="dashboard-txts">
                          {" "}
                          {}
                        </p>
                        <h6 className="dashboard-txt">Transer </h6>
                      </div>
                    </Link> */}

                    {/* <Link href="/totalWithdraws">
                      <div className="link-dashboard" id="teams-item">
                        <i
                          className="fa fa-filter-circle-dollar"
                          id="dashboard-icons"
                        ></i>
                        <p className="dashboard-txts"> ${totalWithdraw}</p>
                        <h6 className="dashboard-txt">MERCHANT COUNT </h6>
                        {/* <p className="dashboard-txts"> {income?.balance.amount}</p> */}
                      {/* </div>
                    </Link>  */}
                     {/* <Link href={"/directIncome"}>
                       <div className="link-dashboard  first-set" id="teams-item" >
                         {" "}
                      <i className="fa-solid fa-users" id="dashboard-icons"></i>
                       <p className="dashboard-txts">${directIncome}</p>
                      <h6 className="dashboard-txt "> DIRECT INCOME</h6>
                      </div>
                      </Link> */}

                      {/* <Link href={"/allMatchingIncome"}>
                       <div className="link-dashboard  first-set" id="teams-item" >
                         {" "}
                      <i className="fa-solid fa-users" id="dashboard-icons"></i>
                       <p className="dashboard-txts">${matchingIncome}</p>
                      <h6 className="dashboard-txt "> MATCHING INCOME</h6>
                      </div>
                      </Link> */}

                    {/* <Link href={"/totalRocMatchingIncome"}>
                      <div className="link-dashboard  first-set" id="teams-item" >
                        {" "}
                        <i className="fa-solid fa-users" id="dashboard-icons"></i>
                        <p className="dashboard-txts">${rocMatchingIncome}</p>
                        <h6 className="dashboard-txt "> ROC MATCHING INCOME</h6>
                      </div>
                    </Link> */}
{/* 
                    <Link href="/allTickets">
                      <div className="link-dashboard" id="third-itemes">
                        <i
                          className="fa-solid fa-users-between-lines"
                          id="dashboard-icons"
                        ></i>
                         <p className="dashboard-txts">{totalTickets}</p>
                        <h6 className="dashboard-txt">  SUPPORTED TICKET</h6>
                      </div>
                      </Link> */}
                  </div>
                </div>

                <div className="col-md-3"></div>
              </div>
            </form>

        
      </div>
    </div>
    </section>
    </div>
  )}
export default NewDashboard;


  /* <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form
              className="input-sec  payment-form "
              id="form-pay"
              style={{ width: "35%", padding: "30px" }}
            >
              <div className="heading-parts">
                <h3
                  className="order-text"
                  style={{ textAlign: "left !important", paddingLeft: "25px" }}
                >
                  DASHBOARD
                </h3>
              </div>

              <div className="input-line   link-line"></div>
              <div className="link-head ">
                <Link href={"/userProfile"}>
                  <div className="link-item">PROFILE</div>
                </Link>

                <div className="link-item" id="first-item">
                  ENABLE 2FA
                </div>
                <Link href={"/funds"}>
                  <div className="link-item" id="first-item">
                    FUNDS
                  </div>
                </Link>

                <div className="link-item" id="second-item">
                  CHANGE PASSWORD
                </div>
                <Link href={"/buy"}>
                  <div className="link-item" id="third-item">
                    BUY TOKEN
                  </div>
                </Link>
                <div className="link-item" id="third-item">
                  TOKEN
                </div>
              </div>
            </form>
          </div>
        </div>
      </section> */
                      
