import Pop_up from "./Pop_up";

export default function Registration({id}) {
    return(
        <>
        <div className="flex pl-2 py-4 pr-6 bg-componentes w-5/6 h-12 rounded-lg my-4 flex justify-between">
            <span className="text-primary">
                {id}
            </span>
            <Pop_up />
        </div>
        </>
    );
}