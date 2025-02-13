import React, { useState } from "react";
import { Button, Modal, message } from "antd";
import { Link } from "react-router-dom";
import { GetCamp, DeleteCamp } from "./CampManager";
import Header from "../../layouts/Header";

const CampTable = () => {
    const { camp, error } = GetCamp();
    const [showConfirm, setShowConfirm] = useState(false);
    const [camptToDelete, setCampToDelete] = useState(null);

    if (error) {
        return <div> Error: {error} </div>
    }

    const handleDeleteClick = (campId) => {
        setCampToDelete(campId);
        setShowConfirm(true);
    };

    const confirmDelete = async () => {
        try {
            await DeleteCamp(camptToDelete);
            message.success("Entry Deleted Successfully");
            setShowConfirm(false);
        } catch (error) {
            message.error("Failed to Deleted Entry");
        }
    };

    const cancelDelete = () => {
        setShowConfirm(false);
        setCampToDelete(null);
    };


    return (
      <>
      
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "16px"}}>
                <thead>
                    <tr style={{ backgroundColor: "#1c76c3", color: "white" }}>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Location</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Ratings</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    

                    {camp.map((camps) => (
                        <tr key={camps.id} style={{ borderBottom: "1px solid #ddd" }}>
                            <td style={{ borderBottom: "1px solid #ddd"}} > {camps.name} </td>
                            <td style={{ borderBottom: "1px solid #ddd"}} > {camps.location} </td>
                            <td style={{ borderBottom: "1px solid #ddd"}} > {camps.ratings} </td>
                                
                            <td style={{ borderBottom: "1px solid #ddd"}} >
                                <Button type="primary" style={{ marginRight: "8px" }}>
                                    <Link to={`/camp/edit/${camps.id}`} style={{ color: "inherit" }}>
                                        Edit
                                    </Link>
                                </Button>
                                <Button type="danger" onClick={() => handleDeleteClick(camps.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                title="Confirm Delete"
                open={showConfirm}
                onOk={confirmDelete}
                onCancel={cancelDelete}
                okText="Yes, Delete"
                okType="danger"
            >
                <p> Are You sure you want to delete this entry?</p>
            </Modal>
      </>
    );

};

export default CampTable;

