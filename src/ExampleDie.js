
function Dice(props){
    return(
        <div>
             <div className='dot' 
             onClick={() => props.showId(props.id)}> 
             <img src={props.pict} 
             key={props.id} 
             /> 
             </div>
        </div>
    )
}

export default Dice