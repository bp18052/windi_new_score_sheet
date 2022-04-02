import { VFC, useState} from 'react';
import { useForm, SubmitHandler, NestedValue } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { string } from 'yup';
import { supabase } from '../utils/supabaseClient';

const mailForm: VFC = () => {

  const [loading, setLoading] = useState(false);
  //hookFormのESlintエラーは無視
  /* eslint-disable */
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
    }catch(sucess){

    }catch(error){
      console.log('signUpError');
      console.log(error);
    }
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
