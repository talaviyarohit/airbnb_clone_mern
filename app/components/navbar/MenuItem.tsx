'use client';
interface MenuItemProps {
    onClick : () => void;
    label :string;
}


const Menuitem:React.FC<MenuItemProps > = ({

    onClick,
    label
}) => {
    return (
        <div onClick={onClick} className="px-4 py-3 hover:bg-neutral-100 transtion font-semibold">

        {label}
        </div>
    )
}

export default Menuitem;