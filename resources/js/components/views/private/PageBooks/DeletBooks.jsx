import axios from "axios";

const DeleteBook = async (bookID) => {
    try {
        await axios.delete(`api/book/${bookID}`);
        window.location.reload();
    } catch(error) {
        console.error('Error! Cannot delete selected book', error);
        throw error
    }
};

export default DeleteBook;