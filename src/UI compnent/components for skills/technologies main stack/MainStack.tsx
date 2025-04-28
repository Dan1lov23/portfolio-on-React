import './mainStack.css';

export default function MainStack() {

    const iconSrcArray = [
        {src: "https://cdn-icons-png.flaticon.com/128/174/174854.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/732/732190.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/15484/15484278.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/919/919831.png"},
        {src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg"},
        {src: "https://habrastorage.org/webt/k-/tm/2g/k-tm2gvbb_ky6gdrd-tzqrzjkf4.png"},
        {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkLKIXoV9cqkHD-60xblHWwHPtn3BDpWW4w&s"},
        {src: "https://v3.vitejs.ru/logo.svg"},
        {src: "https://www.w3schools.com/whatis/img_ajax.jpg"},
        {src: "https://webhostinggeeks.com/blog/wp-content/uploads/2023/05/Nginx_server-1200x705-optimized.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/11518/11518876.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/733/733553.png"},
        {src: "https://cdn-icons-png.flaticon.com/128/5968/5968853.png"},
    ];

    return (
        <>
            <div className='mainStack'>
                <div className="mainStackImg">
                    {iconSrcArray.map((item, index) => (
                        <div key={index}>
                            <img src={item.src}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}