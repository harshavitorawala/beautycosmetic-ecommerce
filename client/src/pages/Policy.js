import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/policy.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p>BelleBliss Cosmetix and its affiliates collect, use, and protect personal information through their website, primarily stored and processed in India. Visitors implicitly agree to the Privacy Policy, Terms of Use, and Indian laws governing data protection by using the platform or availing services. While browsing without registration is possible, services are limited to India. Users must consent to these terms; otherwise, access is prohibited.
                    </p>

                </div>
            </div>
        </Layout>
    );
};

export default Policy;