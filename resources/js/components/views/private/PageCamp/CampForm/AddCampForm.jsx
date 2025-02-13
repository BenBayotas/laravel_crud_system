import React from "react";
import { Form, Input, Button, message, Layout } from "antd";
import { AddCamp } from "../CampManager";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";
import { useNavigate } from "react-router-dom";

const AddCampForm = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            await AddCamp(values);
            message.success("New Entry Added.");
            navigate("/camp");
        }catch (error) {
            message.error("Failed to add Entry");
        }
    };

    return (
    
        <Layout>
            <Header/>
            <Layout.Content style={{minHeight:"87vh"}}>
                    <div style={{maxWidth: "400px", margin: "20px auto"}}>
                    <h2>Add New Entry</h2>
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <Form.Item 
                        label="Name" 
                        name="name"
                        rules={[{ required: true, message: "Please enter the name" }]}
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
                            <Button type="primary" htmlType="submit">Add Camp</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Layout.Content> 
        <Footer />
        </Layout>
        
    );
};


export default AddCampForm;
