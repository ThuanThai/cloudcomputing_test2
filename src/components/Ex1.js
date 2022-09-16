import React from "react";

const ex1 = () => {
    return (
        <>
            <header className="flex items-center justify-between page-container">
                <div className="flex items-center gap-3 py-5">
                    <img
                        src="data:image/png;base64,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"
                        alt=""
                        className="w-[100px] h-[100px]"
                    />
                    <div>
                        <h3 className="text-xl font-bold text-blue-800 uppercase">
                            Bo Y Te
                        </h3>
                        <h3 className="text-xl font-bold text-red-500 uppercase">
                            Trang tin ve dich benh viem duong ho hap cap
                            covid-19
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold">Duong day nong</h4>
                    <p className="text-xl font-bold text-red-500 uppercase">
                        19009095/19003228
                    </p>
                </div>
            </header>
            <section className="bg-[#293179] py-3">
                <ul className="flex items-center gap-[25px] text-white page-container">
                    <li className="font-semibold uppercase">Trang Chu</li>
                    <li className="font-semibold uppercase">
                        he thong van ban
                    </li>
                    <li className="font-semibold uppercase">Dieu Can Biet</li>
                    <li className="font-semibold uppercase">Khuyen Cao</li>
                    <li className="font-semibold uppercase">
                        Ho Tro Nguoi Dan
                    </li>
                    <li className="font-semibold uppercase">
                        Ho Tro Trong Nganh
                    </li>
                    <li className="font-semibold uppercase">Tin Tuc</li>
                </ul>
            </section>
            <section className="py-5 bg-white">
                <div className="flex items-center justify-between font-semibold page-container">
                    <h3 className="text-red-500 uppercase">Cap Nhat</h3>
                    <div className="flex items-center gap-x-5 text-[#293179]">
                        <p>
                            Chong 'giac' nCOV: Tin vui tu Ban Chi dao Quoc gia
                        </p>
                        <p>
                            Dich nCoV: Viet Nam se dam bao an toan , an ninh cac
                            hoat dong cua nam Chu tich ASE
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-[25px] bg-[#6269b9]">
                <div className="flex gap-5 page-container">
                    <div className="flex flex-col gap-5">
                        <img
                            src="https://moh.gov.vn/image/journal/article?img_id=1246004&t=1652149627678"
                            alt=""
                            className="object-cover w-full rounded-lg h-1/2"
                        />
                        <img
                            src="https://moh.gov.vn/image/journal/article?img_id=1246004&t=1652149627678"
                            alt=""
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>

                    <img
                        src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/1/17/995722/Ban-Do-01.jpg"
                        alt=""
                        className="object-cover w-1/3 h-full rounded-lg"
                    />
                </div>
            </section>
        </>
    );
};

export default ex1;
