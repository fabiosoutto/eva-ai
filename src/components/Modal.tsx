import React from "react"
import IconClose from "./icons/IconClose"

export default function Modal({isOpen, setCloseModal, children}) {

    if(isOpen) {
        return (
            <div className="fixed inset-x-0 inset-y-0 z-50 bg-zinc-950/50 rounded">
                <div className="flex justify-center items-center bg-slate-800">
                    <IconClose className="w-[25px] h-[25px]" onClick={setCloseModal}/>
                    {children}
                </div>
            </div>
        )
    } else {

    }
    
}