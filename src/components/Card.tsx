export default function Card(props: any) {
    return (
        <div className={`
          bg-[#2188E8] m-4 rounded-md p-5
            flex justify-center items-center
            w-34 h-34 text-xl font-thin
        `}>
            {props.children}
        </div>
    )
}