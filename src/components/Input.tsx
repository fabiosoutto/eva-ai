"use client";
import { ErrorMessage, Field } from "formik";
import React from "react";

export default function Input({ name, type, required, ...props}) {
  return (
    <div className="flex flex-col">
      <div className="capitalize">
        
      </div>
      <Field 
          name={name} 
          type={type} 
          {...props}
          className="w-[320px] p-3 bg-transparent border rounded outline-none focus:border-blue-500 mb-[7px]"
          
        />
        <div className="text-red-500 text-xs mt-1">
          <ErrorMessage name={name}/>
        </div>
    </div>
  )
}