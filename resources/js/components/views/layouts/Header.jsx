import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

export default function Header() {
  const menuItems = [
    { key: "home", label: <Link to="/">Home</Link> },
    { key: "about", label: <Link to="/about">About Us</Link> },
    // Uncomment if needed
    // { key: "login", label: <Link to="/login">Log In</Link> },
    // { key: "users", label: <Link to="/users">Users</Link> }
  ];

  return (
    <Layout.Header
      style={{
        background: "#001529",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        opacity: "80%",
      }}
    >
      <div style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
        BlueHeights
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ flex: 1, justifyContent: "flex-end" }}
        items={menuItems} // Use the updated structure
      />
    </Layout.Header>
  );
}