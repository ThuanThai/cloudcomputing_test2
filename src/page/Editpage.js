import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editpage = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const nameRef = useRef();
    const genderRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();

    async function handleClick(e) {
        e.preventDefault();
        try {
            const updateItem = {
                id: Number(id),
                name: nameRef.current.value,
                gender: genderRef.current.value,
                mobile_phone: phoneRef.current.value,
                email_address: emailRef.current.value,
            };
            const res = await axios.put(
                "https://m4f8il67ud.execute-api.ap-southeast-1.amazonaws.com/v1/items",
                updateItem
            );
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
    const getStudentData = useRef;
    getStudentData.current = async () => {
        try {
            setLoading(false);
            const student = await axios.get(
                `https://m4f8il67ud.execute-api.ap-southeast-1.amazonaws.com/v1/items?id=${id}`
            );
            setData(student.data.res);
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStudentData.current();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-y-3">
            <h2 className="text-4xl font-bold">Edit Information For ID {id}</h2>
            {!loading && (
                <div className="mt-10">
                    <span className="block w-8 h-8 mx-auto border-2 rounded-full border-t-transparent border-cyan-700 animate-spin"></span>
                </div>
            )}
            {loading && data && (
                <form className="flex flex-col items-center gap-5 p-4 mt-2 rounded-lg bg-slate-700">
                    <input
                        type="text"
                        className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                        placeholder="Name"
                        defaultValue={data.name}
                        ref={nameRef}
                    />
                    <input
                        type="text"
                        className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                        placeholder="Gender"
                        defaultValue={data.gender}
                        ref={genderRef}
                    />
                    <input
                        type="text"
                        className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                        placeholder="Mobile Phone"
                        defaultValue={data.mobile_phone}
                        ref={phoneRef}
                    />
                    <input
                        type="text"
                        className="w-[500px] p-2 border-none outline-none bg-slate-800 rounded-lg"
                        placeholder="Email Address"
                        defaultValue={data.email_address}
                        ref={emailRef}
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
            )}
        </div>
    );
};

export default Editpage;
