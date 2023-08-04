export default function Card2(props: any) {
    return (
        <div className={`
            border-solid border-2 border-sky-500 
            m-4 rounded-md p-2 w-[295px]
            flex justify-center items-center
            text-xl font-normal
        `}>
            {props.children}
        </div>
    )
}