import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        Welcome to BelleBliss Cosmetix, your ultimate destination for all things beauty and
                        grooming. At BelleBliss, we believe that everyone deserves to look and feel their best,
                        which is why we offer an extensive range of high-quality products across makeup,
                        skincare, haircare, bath & bodycare, and salon essentials. Whether you're seeking to
                        enhance your natural beauty, indulge in luxurious self-care rituals, or elevate your
                        salon experience, BelleBliss has you covered. With a commitment to excellence and
                        innovation, we curate only the finest products from trusted brands, ensuring that you
                        can confidently explore and discover new favorites. Transform your beauty routine and
                        unleash your inner radiance with BelleBliss Cosmetix.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;