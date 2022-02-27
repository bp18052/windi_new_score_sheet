import { VFC } from 'react';
import dynamic from 'next/dynamic';
import 'windi.css';

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
        <button class="
        bg-transparent
        text-blue-700 
        font-sans 
        font-semibold 
        py-2 px-4 
        border 
        border-blue-500 
        rounded 
        hover:( 
            bg-blue-500 
            text-white 
            border-transparent
        )"
        >
            <Google />
            {props.name}
       </button> 
    );
}

export default SignButton;