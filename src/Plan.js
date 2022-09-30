

export default function Plan(props){
    return(
        <>
            <li className="shadow p-2 me-3 my-2 col-sm-9 ">{props.value}</li>
            <button style={{backgroundColor:'firebrick'}}  className="btn my-2 col-sm-1" onClick={()=>{props.sendData(props.id)}}>X</button>
        </>
    )
}

