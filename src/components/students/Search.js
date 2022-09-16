import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

const Search = () => {
    return (
        <div className="mx-auto">
            <input
                type="text"
                className="w-full px-4 py-3 border-none rounded-lg outline-none bg-slate-800"
                placeholder="Searching..."
            />
        </div>
    );
};

export default Search;
