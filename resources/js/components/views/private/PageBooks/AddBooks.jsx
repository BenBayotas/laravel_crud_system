import DefaultRenderEmpty from "antd/es/config-provider/defaultRenderEmpty";
import axios from "axios";

const AddBooks = async (bookData) => {

    try {
        const response = await axios.post('api/book', {
            title: bookData.title,
            author: bookData.author,
        });
    
        console.log("Book Added: ", response.data);
        window.location.reload();
    } catch(error) {
        console.error("Error displaying entry:", error.response?.data || error.message);
    }
};

export default addBooks;