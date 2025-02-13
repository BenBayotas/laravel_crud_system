import { Button, Card, Form, Input, Layout, Typography } from "antd";
import Header from "../../layouts/Header";
import React from "react";
import Footer from "../../layouts/Footer";



const {Paragraph} = Typography;

export default function PageLogin() {
    return (    
        <Layout>
          <Header />
          <Layout.Content style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "87vh",
            
            }}>
            <Card title="Login" style={{ width: 400 }}>
              <Form layout="vertical">
                <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }]}> 
                  <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }]}> 
                  <Input.Password placeholder="Enter your password" />
                </Form.Item>
                <Button type="primary" block>Login</Button>
              </Form>
              {/* <Paragraph style={{ marginTop: 10 }}>Don't have an account? <Link to="/register">Register here</Link></Paragraph> */}
            </Card>
          </Layout.Content>
          <Footer />
        </Layout>
      );
    }
