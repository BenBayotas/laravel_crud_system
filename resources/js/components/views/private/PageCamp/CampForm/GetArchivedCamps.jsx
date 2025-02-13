import { useState, useEffect } from "react";
import axios from "axios";

export const useArchivedCamps = () => {
    const [camp, setCamp] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCamp = async () => {
            try {
                const response = await axios.get ("/api/camps?only_trashed=1");
                console.log("Fetched camps:", response.data);
                setCamp(response.data.camp || []);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching camps:", error);
            }
        };
        fetchCamp();
    }, []); 
    return {camp, error};
};