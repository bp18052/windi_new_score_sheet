import { VFC } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { string } from 'yup';

type FormInput = {
    mail: string;
    pass: string;
}

const mailForm :VFC = () => {
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> =  data => console.log(data)
    return(
    <div>

    </div>
    )
}

export default mailForm;