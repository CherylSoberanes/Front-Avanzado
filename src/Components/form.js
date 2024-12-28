import React from "react"; 
import { Box } from "@mui/material";
import useForm from "../hooks/useForm";

const Form = () => {
    [FormData, handleChange, resetForm] = useForm ({name: '', email:'', date:'', country:'', age: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);
        resetForm();
    };

    return (
        <Box sx={{p: 2, border: '1px dashed grey'}}>

        </Box>
    );

};

export default Form;

