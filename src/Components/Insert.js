import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Insert = (props) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        tag:"",
        time: "",
        image: "https://ovatheme.com/meup/wp-content/uploads/2019/08/event33-1-710x480.jpg",
    });

    function changeHandler(event) {
        // Use the spread operator to update the formData object with the new value
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function submitHandler(e) {
        e.preventDefault();
        // Create a copy of the existing data array and add the new formData to it
        const newData = [...props.data, formData];
        props.setData(newData); // Update the data in the parent component
        toast.success("Inserted Event");
        navigate("/");
    }

    return (
        <div className="justify-center flex">



       
        <form onSubmit={submitHandler} className="flex flex-col w-1/3 m-10 mt-10 gap-y-4 justify-center bg-slate-800 rounded-lg p-10">
        <p className="text-richblack-5 font-bold text-3xl">Add Event</p>
            <label className="w-full text-richblack-5">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                    Title
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                    type="text"
                    required
                    value={formData.title}
                    placeholder="Enter Title"
                    onChange={changeHandler}
                    name="title"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
            </label>
            <label className="w-full text-richblack-5">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                    Price
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                    type="text"
                    required
                    value={formData.price}
                    placeholder="Enter Price"
                    onChange={changeHandler}
                    name="price"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
            </label>
            <label className="w-full text-richblack-5">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                    Time
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                    type="text"
                    required
                    value={formData.time}
                    placeholder="Enter Time"
                    onChange={changeHandler}
                    name="time"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
            </label>
            <label className="w-full text-richblack-5">
                <p className="text-[0.875rem] mb-1 leading-[1.375rem]">
                    Tag
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                    type="text"
                    required
                    value={formData.tag}
                    placeholder="Enter Tag"
                    onChange={changeHandler}
                    name="tag"
                    className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
                />
            </label>
            <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Insert</button>
        </form>
        </div>
    );
};

export default Insert;
