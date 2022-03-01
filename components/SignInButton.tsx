import { VFC } from 'react';
import dynamic from 'next/dynamic';

//load icons
const Google = dynamic<{}>(()=>import('react-icons/bs').then(module=>module.BsGoogle));
const Facebook = dynamic<{}>(()=>import('react-icons/fi').then(module=>module.FiFacebook));
const Apple = dynamic<{}>(()=>import('react-icons/bs').then(module=>module.BsApple));
const Twitter = dynamic<{}>(()=>import('react-icons/fi').then(module=>module.FiTwitter));

interface props{
    name: string,
}

const SignButton: VFC<props> = (props) =>{
    let Icon
    switch(props.name){
        case 'Google' : 
            Icon = <Google />
            break
        case 'Facebook' :
            Icon = <Facebook />
            break
        case 'Twitter' :
            Icon = <Twitter />
            break
        case 'Apple' :
            Icon = <Apple />
            break
        default :
            console.log("there is not Icon Error")
            Icon = null
    }

    return (
        <button className="
        bg-transparent
        text-blue-700 
        font-sans 
        font-semibold 
        py-2 px-4 
        border 
        border-blue-500 
        rounded 
        flex
        transition-colors
        hover:( 
            bg-blue-500 
            text-white 
            border-transparent
            shadow-xl
        )"
        >
            <div className='mt-1'>
                {Icon}
            </div>
            <div className='ml-2'>
                {props.name} Sign In
            </div>
       </button> 
    );
}

export default SignButton;