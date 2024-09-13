
type Props = {
    title : string,
    description : string,
    image : any
}


export default function Card({title, description, image} : Props){
    return (
        <div className="h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10">
            <h1 className=" text-white">{title}</h1>
        </div>
    );
}