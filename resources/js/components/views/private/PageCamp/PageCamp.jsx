import { Button, Card, Layout } from "antd";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import BreadCrumb from "../../layouts/BreadCrumb";
import React from "react";
import CampTable from "./CampTable";
import { Link } from "react-router-dom";


export default function PageCamp() {
    return(
        <Layout>
            <Header />
            <Card>
            <Button style={{fontSize: "1.2em", padding: "20px"}} >
                <Link to={"/camp/add"}>Add New Entry</Link>
            </Button>
            </Card>
            <Layout.Content style={{ padding: "20px", background: "#fff", minHeight: "87vh" }}>
            <CampTable />
            </Layout.Content>
            <Footer />
        </Layout>
    );
}