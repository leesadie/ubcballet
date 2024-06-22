'use client';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    icon
}) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-row pt-3 transition hover:-translate-y-1 text-neutral-100 focus:text-secondary"
        >
            {label}
            {icon}
        </button>
    );
}

export default Button;