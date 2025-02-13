import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, Radio } from "antd";

import CampTable from "../CampTable";

const CampCatalogue = () => {
  const { camp, error } = GetCamp();
  const [showForm, setShowForm] = useState(false);
  const [camps, setCamp] = useState(camp || []);

  useEffect(() => {
    if (camp) {
      setCamp(camp);
    }
  }, [camp]);

  // Handle form submission
  const onFinish = async (values) => {
    // values includes: { name, location, ratings }
    await AddCamp(values);
    setShowForm(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "100%", margin: "auto" }}>
      <h1
        style={{
          fontSize: "24px",
          paddingBottom: "10px",
          textAlign: "center",
        }}
      >
        Camp Listings
      </h1>
      <Button
        onClick={() => setShowForm(!showForm)}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          display: "block",
          margin: "10px auto",
        }}
      >
        {showForm ? "Close Form" : "Create Camp"}
      </Button>
      {showForm && (
        <Card
          title="Add New Camp"
          style={{
            marginTop: "20px",
            background: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Camp Name"
              name="name"
              rules={[
                { required: true, message: "Please input the camp name!" },
              ]}
            >
              <Input placeholder="Enter camp name" />
            </Form.Item>
            <Form.Item
              label="Location"
              name="location"
              rules={[
                { required: true, message: "Please input the location!" },
              ]}
            >
              <Input placeholder="Enter location" />
            </Form.Item>
            <Form.Item
              label="Ratings"
              name="ratings"
              rules={[
                { required: true, message: "Please select a rating!" },
              ]}
            >
              <Radio.Group>
                {[1, 2, 3, 4, 5].map((value) => (
                  <Radio key={value} value={value}>
                    {value}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#48a860",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                Add Camp
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}
      <br />
      <CampTable camps={camps} />
    </div>
  );
};

export default CampCatalogue;