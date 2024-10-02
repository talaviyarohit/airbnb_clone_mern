import { IconType } from "react-icons";

interface ButtonProps {
    label : string;
    onClick : (e:React.MouseEvent<HTMLButtonElement>) => void;
    icon?: IconType;
    disabled?: boolean;
    outline ?:boolean;
    small?:boolean;


}
const Button :React.FC<ButtonProps> = ({
    label ,
    onClick ,
    icon  ,
    disabled ,
    outline ,
    small
    }) => {
        return (
            <button 
            className="relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${outline ? 'bg-white' :'bg-rose-500 '}
            {outline ? 'border-black' :'border-rose-500 '}
            {outline ? 'text-black' :'text-white '}
            {small ? 'py-1' :'py-3 '}
            {small ? 'text-sm' :'text-md '}
            {small ? 'font-light' :'font-semiblod '}
            {small ? 'border-[1px]' :'border-2 '}"
            >
                
                {label}
            </button>
        );

}

export default Button;