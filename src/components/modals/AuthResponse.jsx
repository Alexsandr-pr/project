"use client"
import { useState } from "react";
import ParentModal from "./ParentModal"
import Image from "next/image";


const AuthResponse = ({
    type
}) => {
    const [state, setState] = useState(true);

    return (
        <ParentModal open={state}>
            <div className="w-full bg-white rounded-lg shadow-1 mb:w-[442px] h-80 flex flex-col items-center gap-4 px-6 pt-8 pb-12">
                <button onClick={() => setState(false)}>
                    <Image
                        
                        width={120}
                        height={120}
                        src={type === "well" ? "/assets/icon/tick-circle.svg" : "/assets/icon/auth-response-close.svg"}
                        alt="result icon"
                    />
                </button>
                <h2 className={`text-3xl text-center font-medium ${type === "well" ? "text-status-success" : "text-status-error"}`}>
                    {
                        type === "well" ? "Well done" : "Oops. "
                    }
                </h2>
                <p className="text-lg text-center text-grey-700 font-light">
                    {
                        type === "well" ? "Congratulation your account has been successfully created." : "Unfortunately, there was a problem during creating your account. try again later."
                    }
                </p>
            </div>
        </ParentModal>
    )
}

export default AuthResponse