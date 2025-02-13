import { Layout, Typography, Card } from "antd";
import Header from "../../layouts/Header";
import React from "react";
import Footer from "../../layouts/Footer";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function PageAbout() {
  return (
    <Layout>
      <Header />
      <Content
        style={{
          padding: "50px",
          textAlign: "center",
          minHeight: "87vh",
          backgroundImage: "url('/images/blueheights.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Title level={1} style={{ color: "whitesmoke", fontSize: "3rem" }}>
          About Us
        </Title>

        <div>
          <Paragraph style={{ fontSize: "1.5rem", color: "whitesmoke" }}>
            Welcome to BlueHeights, a community dedicated to providing the best collection
            of camping sites and highland hiking experiences. Our mission is to create a 
            centralized catalogue for the best recreational locations.
          </Paragraph>
        </div>

        <div>
          <Card
            title={<span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Our Vision</span>}
            style={{
              marginTop: 20,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Paragraph style={{ fontSize: "1.3rem" }}>
              Our vision is to become the premier online community for outdoor enthusiasts,
              where adventurers can discover and share the hidden gems of camping and highland hiking.
            </Paragraph>
          </Card>
        </div>

        <div>
          <Card
            title={<span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Our Mission</span>}
            style={{
              marginTop: 20,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Paragraph style={{ fontSize: "1.3rem" }}>
              Our mission is to curate a comprehensive catalogue of top recreational locations,
              making it effortless for you to plan and embark on your next outdoor adventure.
            </Paragraph>
          </Card>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}
