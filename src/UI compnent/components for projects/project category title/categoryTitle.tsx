import './categoryTitle.css';

export default function CategoryTitle({title}:{title:string}) {
    return (
        <>
            <div className="categoryTitleMain">
                <h1 className="text-gradient text-[40px] font-bold capitalize">{title}</h1>
            </div>
        </>
    )
}