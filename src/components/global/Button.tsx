'use client'

import { useRouter } from "next/navigation";

interface button {
    onClick? : () => void;
    children: React.ReactNode;
    type? : 'reset' | 'submit' | 'button';
    className? : string;
    halaman_url? : string;
}

export const ButtonSky: React.FC<button> = ({children, type, className, halaman_url, onClick}) => {

    const router = useRouter()
    const pindahHalaman = () => {
        if(halaman_url){
            router.push(halaman_url);
        }
    }

    return(
        <button
            className={`px-3 flex justify-center items-center py-1 bg-gradient-to-r from-[#98B9EC] to-[#3072D6] hover:from-[#071952] hover:to-[#003edab4] text-white rounded-lg ${className}`}
            type={type}
            onClick={onClick || pindahHalaman}
        >
            {children}
        </button>
    )
}
export const ButtonSkyBorder: React.FC<button> = ({children, type, className, halaman_url, onClick}) => {

    const router = useRouter()
    const pindahHalaman = () => {
        if(halaman_url){
            router.push(halaman_url);
        }
    }

    return(
        <button
            className={`px-3 flex justify-center items-center py-1 bg-gradient-to-r border-2 border-[#3072D6] hover:bg-[#3072D6] text-[#3072D6] hover:text-white rounded-lg ${className}`}
            type={type}
            onClick={onClick || pindahHalaman}
        >
            {children}
        </button>
    )
}
export const ButtonGreen: React.FC<button> = ({children, type, className, halaman_url, onClick}) => {

    const router = useRouter()
    const pindahHalaman = () => {
        if(halaman_url){
            router.push(halaman_url);
        }
    }

    return(
        <button
            className={`px-3 flex justify-center items-center py-1 bg-gradient-to-r from-[#00A607] to-[#AFD88F] hover:from-[#AFD88F] hover:to-[#00A607] text-white rounded-lg ${className}`}
            type={type}
            onClick={onClick || pindahHalaman}
        >
            {children}
        </button>
    )
}
export const ButtonGreenBorder: React.FC<button> = ({children, type, className, halaman_url, onClick}) => {

    const router = useRouter()
    const pindahHalaman = () => {
        if(halaman_url){
            router.push(halaman_url);
        }
    }

    return(
        <button
            className={`px-3 flex justify-center items-center py-1 bg-gradient-to-r border-2 border-[#00A607] hover:bg-[#00A607] text-[#00A607] hover:text-white rounded-lg ${className}`}
            type={type}
            onClick={onClick || pindahHalaman}
        >
            {children}
        </button>
    )
}
export const ButtonRed: React.FC<button> = ({children, type, className, halaman_url, onClick}) => {

    const router = useRouter()
    const pindahHalaman = () => {
        if(halaman_url){
            router.push(halaman_url);
        }
    }

    return(
        <button
            className={`px-3 flex justify-center items-center py-1 bg-gradient-to-r from-[#D20606] to-[#D96B6B] hover:from-[#D96B6B] hover:to-[#D20606] text-white rounded-lg ${className}`}
            type={type}
            onClick={onClick || pindahHalaman}
        >
            {children}
        </button>
    )
}
export const ButtonRedBorder: React.FC<button> = ({children, type, className, halaman_url, onClick}) => {

    const router = useRouter()
    const pindahHalaman = () => {
        if(halaman_url){
            router.push(halaman_url);
        }
    }

    return(
        <button
            className={`px-3 flex justify-center items-center py-1 bg-gradient-to-r border-2 border-[#D20606] text-[#D20606] hover:bg-[#D20606] hover:text-white rounded-lg ${className}`}
            type={type}
            onClick={onClick || pindahHalaman}
        >
            {children}
        </button>
    )
}