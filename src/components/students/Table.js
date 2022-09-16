import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

const Table = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");
    const filter = useDebounce(query, 500);
    console.log(filter);
    const [url, setUrl] = useState(
        "https://m4f8il67ud.execute-api.ap-southeast-1.amazonaws.com/v1/items"
    );

    useEffect(() => {
        if (filter) {
            setUrl(
                `https://m4f8il67ud.execute-api.ap-southeast-1.amazonaws.com/v1/search?name=${filter}`
            );
        } else {
            setUrl(
                "https://m4f8il67ud.execute-api.ap-southeast-1.amazonaws.com/v1/items"
            );
        }
    }, [filter]);
    async function handleDelete(id) {
        try {
            const res = await axios.delete(
                `https://m4f8il67ud.execute-api.ap-southeast-1.amazonaws.com/v1/items?id=${id}`
            );

            return res;
        } catch (error) {
            console.log(error);
        }
    }

    const getStudentData = useRef();
    getStudentData.current = async () => {
        try {
            setLoading(false);
            const students = await axios.get(url);
            setData(students.data.res);
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getStudentData.current();
    }, [url]);

    return (
        <div>
            <div className="mx-auto">
                <input
                    type="text"
                    className="w-full px-4 py-3 border-none rounded-lg outline-none bg-slate-800"
                    placeholder="Searching..."
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="relative h-full py-10">
                {!loading && (
                    <div className="">
                        <span className="block w-8 h-8 mx-auto border-2 rounded-full border-t-transparent border-cyan-700 animate-spin"></span>
                    </div>
                )}
                {loading && (
                    <table className="w-full border-2 border-slate-700">
                        <thead>
                            <tr className="bg-slate-800">
                                <th
                                    className={`py-3
                                }`}>
                                    No.
                                </th>
                                <th
                                    className={`py-3
                                }`}>
                                    ID
                                </th>
                                <th className="py-3">Name</th>
                                <th className="py-3">Gender</th>
                                <th className="py-3">Mobile Phone</th>
                                <th className="py-3">Email</th>
                                <th className="py-3">
                                    <button
                                        className="hover:text-pink-600"
                                        onClick={() => navigate("/add")}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                            />
                                        </svg>
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className={`text-center overflow-y-scroll`}>
                            {data &&
                                data.map((item, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className={`duration-300 cursor-pointer border border-slate-600 hover:bg-slate-300 hover:text-slate-800 text-lg font-semibold`}>
                                            <td className="px-6 py-3">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-3">
                                                {item.id}
                                            </td>
                                            <td className="px-6 py-3">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-3">
                                                {item.gender}
                                            </td>
                                            <td className="px-6 py-3">
                                                {item.mobile_phone}
                                            </td>
                                            <td className="px-6 py-3">
                                                {item.email_address}
                                            </td>
                                            <td className="px-6 py-3">
                                                <button
                                                    className="hover:text-pink-600"
                                                    onClick={() =>
                                                        navigate(
                                                            `/edit/${item.id}`
                                                        )
                                                    }>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-6 h-6">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                        />
                                                    </svg>
                                                </button>
                                                <button
                                                    className="hover:text-pink-600"
                                                    onClick={async () => {
                                                        await handleDelete(
                                                            item.id
                                                        );
                                                        window.location.reload(
                                                            true
                                                        );
                                                    }}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        className="w-6 h-6">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Table;
