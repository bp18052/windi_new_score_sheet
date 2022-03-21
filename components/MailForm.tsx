import { VFC } from 'react';
import { useForm, SubmitHandler, NestedValue } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { string } from 'yup';

type FormInput = {
  mail: string;
  pass: string;
};


const mailForm: VFC = () => {

  //ESlintエラーのため、useFormはuseMemoでwrapする。
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);
  return (
    <div>
      <form>
        
      </form>
    </div>
  );
};

export default mailForm;
