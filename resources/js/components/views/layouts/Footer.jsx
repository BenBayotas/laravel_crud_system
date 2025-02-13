import { Layout } from "antd";


export default function Footer() {
    return (
    <Layout.Footer style={{ textAlign: "center" }}>
        BlueHeights ©{new Date().getFullYear()} Created by Elijah Ben Bayotas
    </Layout.Footer>
    );
};
