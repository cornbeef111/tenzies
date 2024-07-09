
function Dice(props){
    return(
        <div>
             <div className='dot' 
             onClick={() => props.showId(props.id)}> 
             <img src={props.pict} 
             key={props.id} 
             alt='love'
             /> 
             </div>
        </div>
    )
}

export default Dice