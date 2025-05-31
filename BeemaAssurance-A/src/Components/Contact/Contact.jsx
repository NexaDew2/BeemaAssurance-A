import React, { useState } from "react";
import Input from "./Input"; // adjust path as needed

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // You can add actual form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
            <Input
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
            />
            <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
            />
            <Input
                label="Message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Send Message
            </button>
        </form>
    );
}

export default Contact;
