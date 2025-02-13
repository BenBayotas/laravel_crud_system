import React, { userState } from "react";
import { useArchivedCamps } from "./GetArchivedCamps";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";

const ArchivedCampTable = () => {
    const {camp, error } =useArchivedCamps ();
    const navigate = useNavigate();

    if (error) {
        return <div> Error: {error} </div>
    }

    return (
        <div>
            <h1> Archived Camps </h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Ratings</th>
                    </tr>
                </thead>
                <tbody>
                    {camp.map((camps) => (
                        <tr key={camps.id}>
                            <td>{camps.name}</td>
                            <td>{camps.location}</td>
                            <td>{camps.ratings}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default ArchivedCampTable;