import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Addpage = () => {
    const [ID, setID] = useState("");
    const [Name, setName] = useState("");
    const [Gender, setGender] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");

    const navigate = useNavigate();
    async function handleClick(e) {
        e.preventDefault();
        try {
            const newItem = {
                id: Number(ID),
                name: Name,
                gender: Gender,
                mobile_phone: Phone,
                email_address: Email,
            };
            const res = await axios.put(
                "https://m4f8il67ud.execute-api.ap-southeast-1.amazonaws.com/v1/items",
                newItem
            );
            return res;
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-y-3">
            <h2 className="text-4xl font-bold">Add New Information</h2>
            <form className="flex flex-col gap-5 p-4 mt-2 rounded-lg bg-slate-700">
                <input
                    type="text"
                    className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                    placeholder="ID"
                    onChange={(e) => {
                        setID(e.target.value);
                    }}
                />
                <input
                    type="text"
                    className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                    placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />

                <input
                    type="text"
                    className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                    placeholder="Gender"
                    onChange={(e) => setGender(e.target.value)}
                />

                <input
                    type="text"
                    className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                    placeholder="Mobile Phone"
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="text"
                    className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    className="w-full py-3 text-lg font-semibold bg-purple-600 rounded-lg"
                    onClick={async (e) => {
                        await handleClick(e);
                        navigate("/");
                    }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Addpage;
