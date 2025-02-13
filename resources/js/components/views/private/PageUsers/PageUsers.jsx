import { Card, Layout } from "antd";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";


export default function PageUsers() {
    return (
        <Layout>
            <Header />
            <Layout.Content 
            style={{
                padding: "0 48px",
                minHeight: "83vh",
                textAlign: "center",
            }}>
             <div>

                Table here
             </div>   


            </Layout.Content>
            <Footer />
        </Layout>
    );
}
