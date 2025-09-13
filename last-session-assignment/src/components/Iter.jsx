const Iter = () => {
    const elementsList = [
        {id:1,name:'A',address:'AA'},
        {id:2,name:'B',address:'BB'},
        {id:3,name:'C',address:'CC'},
        {id:4,name:'D',address:'DD'},
        {id:5,name:'E',address:'EE'},
        {id:6,name:'F',address:'FF'},
        {id:7,name:'G',address:'GG'},
    ]
    return(
        <ul>
            {elementsList.map((el) => (
                //to make the changed elements render when it changes not all the els
                <li key={el.id}> 
                    Hello my name is {el.name} , and my address is {el.address}
                </li>
            ))}
        </ul>
    )
}

export default Iter;