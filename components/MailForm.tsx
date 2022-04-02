import { VFC } from 'react';
import { useForm, SubmitHandler, NestedValue } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { string } from 'yup';

type FormInput = {
  mail: string;
  pass: string;
};

const mailForm: VFC = () => {

  //hookFormのESlintエラーは無視
  /* eslint-disable */
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm<FormInput>();
  /* eslint-enable */
  
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data)
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('mail')}/>
      </form>
    </div>
  );
};

export default mailForm;
