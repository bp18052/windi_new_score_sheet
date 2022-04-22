import { VFC, useState} from 'react';
import { useForm, SubmitHandler, NestedValue } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { string } from 'yup';
import { supabase } from '../utils/supabaseClient';

const mailForm: VFC = () => {

  //hookのESlintエラーは無視
  /* eslint-disable */
  const [loading, setLoading] = useState(false);
  const [serverSideError, setServerSideError] = useState("");
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
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Mail</label>
        <input {...register('mail',{
          required: true,
          maxLength: 20,

        })}/>
        <label>Passward</label>
        <input {...register('pass',{
          required: true,
          maxLength: 10,
        })}/>
        <p>{serverSideError}</p>
      </form>
    </div>
  );
};

export default mailForm;
