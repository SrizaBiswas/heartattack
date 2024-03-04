import React, { useEffect, useState } from "react";
import axios from "axios";
const Payments = () => {
  const [paymentdata, setPaymentdata] = useState();
  const fetchpayments = async () => {
    const paymentColl = "payments";
    try {
      axios
        .post("http://localhost:3001/get-payment", paymentColl)
        .then((res) => {
          const databook = res.data.data; //data.data??
          // console.log(databook);
          setPaymentdata(databook);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!paymentdata) {
      fetchpayments();
    }
  }, []);
  console.log(paymentdata);
  return (
    <div className="main-book relative overflow-hidden flex flex-col">
      <h1 className="tbhead text-3xl -mb-10">Payment Details</h1>
      <div className="scrollDi">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>User Id</th>
                <th>Payment Id</th>
                <th>Plan</th>
                <th>Date</th>
                <th>Premium</th>
                <th>Expiry Date</th>
                {/* <th>Magazine Content</th> */}
                {/* <th>Manage</th> */}
              </tr>
            </thead>
            <tbody>
              {paymentdata == undefined && <span>undefined</span>}
              {paymentdata != undefined &&
                //  do both the line above will work
                paymentdata.map((i) => (
                  <tr key={i._id}>
                    {/* <BooksCard i={i} /> */}
                    {/* what i is doing?? */}
                    <td>{i.userId}</td>
                    <td>{i.paymentId}</td>
                    <td>{i.plan}</td>
                    <td>{i.date}</td>
                    <td className="Mtbim">{i.isPremium ? "True" : "False"}</td>
                    <td className="ptbdesp">{i.expiryDate}</td>
                    {/* <td className="Mtbcon">{i.magCon}</td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
