import React from "react";
import '../Basket.scss'
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import FormControl from "./FormControl";


const Confirm = ({confirmState}) => {
    const initialValues = {
        name: '',
        surname: '',
        phone: ''
    };
    const validationSchema = Yup.object({
        name:Yup.string()
            .min(2, "Need more letters")
            .max(23, "Many letters")
            .required("Need your name"),
        surname: Yup.string()
            .min(2, "Need more letters")
            .max(23, "Many letters")
            .required("Need your surname"),
        phone: Yup.string()
            .min(2, "Phone number consists at least 8 numbers")
            .max(20, "Many numbers")
            .required("Need your number"),
    });
    const onSubmit = values => console.log(values);
    return (
        <div className="confirm">
            <span className='confirmBack' onClick={()=>confirmState(false)}>Back</span>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    () => <Form>
                        <FormControl control='input' type='text' label='Name' name='name'/>
                        <FormControl control='input' type='text' label='Surname' name='surname'/>
                        <FormControl control='input' type='text' label='Phone' name='phone'/>
                        <button type="submit">Submit</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default Confirm