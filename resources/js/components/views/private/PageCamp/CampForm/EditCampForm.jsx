// src/views/private/PageCamp/EditCampForm.jsx
import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Layout } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PutCamp } from "../CampManager";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";

const EditCampForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCamp = async () => {
      try {
        const { data } = await axios.get(`/api/camp/${id}`);
        console.log("Camp data received:", data);
        
        // Adjust according to your API response structure:
        // If your API returns the camp data inside a "camp" property:
        const campData = data.camp || data; 
        
        form.setFieldsValue({
          name: campData.name || "",
          location: campData.location || "",
          ratings: campData.ratings || "",
        });
        setLoading(false);
      } catch (error) {
        message.error("Failed to load camp data");
        setLoading(false);
      }
    };

    fetchCamp();
  }, [id, form]);

  const onFinish = async (values) => {
    try {
      await PutCamp(id, values);
      message.success("Camp updated successfully");
      navigate("/camp");
    } catch (error) {
      message.error("Failed to update camp");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <Layout>
    <Header />
      <Layout.Content style={{minHeight:"87vh"}}>
        <div style={{ maxWidth: "400px", margin: "20px auto" }}>
          <h2>Edit Camp</h2>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter the camp name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Location"
              name="location"
              rules={[{ required: true, message: "Please enter the location" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Ratings"
              name="ratings"
              rules={[{ required: true, message: "Please enter the ratings" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Camp
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Layout.Content>
      <Footer/>
    </Layout>    
        
    
    
  );
};

export default EditCampForm;