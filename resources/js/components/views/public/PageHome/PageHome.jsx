import React from "react";
import { Layout, Menu, Typography, Button } from "antd";
import Header  from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Link } from "react-router-dom";


const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function PageHome() {
  return (
    <Layout>
      <Header />
      <Content
        style={{
          padding: "0 48px",
          minHeight: "87vh",
          textAlign: "center",
          backgroundImage: "url('/images/blueheights.jpg')", // replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <div>
        <Title style={{ paddingTop: "15%", color: "white", fontSize:"4em"}}>Welcome to BlueHeights</Title>
        <Paragraph style={{color: "whitesmoke", fontSize:"2.3em"}}>A Catalogue of Amazing Campsites and Hiking Trails.</Paragraph>
        <Paragraph style={{color: "whitesmoke", fontSize:"1.5em"}}>Join our Community Today.</Paragraph>
        <Button
          type="primary"
          size="large"
          style={{ fontSize: '1.1rem', padding: '10px 20px' }}
        >
        <Link to={'/camp'}> Explore Catalogues </Link>
          
        </Button>
      </div>
      </Content>
      <Footer />
    </Layout>
  );
}