import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import '../styles/CategoriesStyles.css'
const Categories = () => {
    const categories = useCategory();
    return (
        <Layout title={"All Categories"}>
            <div className="container">
                <div className="row">
                    {categories.map((c) => (
                        <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
                            <Link to={`/category/${c.slug}`} className="btn1">
                                {c.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout >
    );
};

export default Categories;