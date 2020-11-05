import EditItemForm from "../../components/EditItemForm/EditItemForm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function EditFormPage() {
    const { id, listid } = useParams();
    const [editData, setEditData] = useState({})
    const [collectionData, setCollectionData] = useState({})
    let token = localStorage.token;

    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}item/${id}/`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            }
        })
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                console.log(data)
                setEditData(data);
            })
    }, [id]);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}collection/${listid}/`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            }
        })
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                console.log(data)
                setCollectionData(data);
            })
    }, [listid]);




    return (
        <div>
            {token !== null && (
                <div>
                    <EditItemForm itemData={editData} collectionData={collectionData} />
                </div>
            )}


        </div>
    );
}

export default EditFormPage;