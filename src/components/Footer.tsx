export default function Footer() {
    return (
       
        <div className={`
            w-full mx-auto max-w-screen-xl p-4 
            md:flex md:items-center 
            text-center flex flex-col
            mt-[80px]
        `}>
            <span className="text-sm text-white">© 2023 <a href="https://evolluo.com/" target="_blank" className="hover:underline">Feito com 💛 pela Evolluo™</a>.
            </span>
        </div>
    )
}