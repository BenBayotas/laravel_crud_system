import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

export default function BreadCrumb() {
    return(
        <Breadcrumb style={{

            fontSize: '1.2em',
            padding: '5px 20px '
        }}>
            <Breadcrumb.Item> <Link to={'/'}> ADD NEW ENTRY </Link></Breadcrumb.Item>
        </Breadcrumb>
    );
};