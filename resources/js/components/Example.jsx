import { createRoot } from "react-dom/client";
import { Card } from "antd";

export default function Example() {
    return <Card> WELCOME </Card>;

}

createRoot(document.getElementById('root')).render(<Example/>);