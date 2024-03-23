import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          {/* <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p> */}
          <h1>Privacy Policy</h1>
<p>If you have any questions about this Privacy Policy, You can contact us:</p>
<ul>
<li>By email: vish.chouhan60@gmail.com</li>
</ul>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;