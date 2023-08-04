import loading from '../../public/images/loading.svg'

export default function Loading() {
    return(
        <div className={`flex justify-center items-center w-[100%] h-[100%]`}>
            <img className="w-[40px] h-[40px] mt-2" src="/images/loading.svg" alt="Carregando..." />
        </div>
    )
}