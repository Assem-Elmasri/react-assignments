const Card= ({title,color,para}) => {
    return(
        <>
            <div style={{backgroundColor:color, color:'white'}}>
                <h1>
                    {title}
                </h1>
                <p>
                    {para}
                </p>
            </div>
        </>
    )
}

export default Card;