import { VFC, useState} from 'react';
import { useForm, SubmitHandler, NestedValue } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { string } from 'yup';
import { supabase } from '../utils/supabaseClient';

const mailForm: VFC = () => {

  //hookFormのESlintエラーは無視
  /* eslint-disable */
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm<FormInput>();
  /* eslint-enable */
  
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    console.log(data)
    try{
      setLoading(true);
      const { user, session, error } = await supabase.auth.signUp({
        email: data.mail,
        password: data.pass,
      });
      if (error) throw error;
    }catch(error){
      console.log('signUpError');
      console.log(error);
      setServerError(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('mail')}/>
        <ErrorMessage errors={errors} name="singleErrorInput" />
      </form>
    </div>
  );
};

export default mailForm;
