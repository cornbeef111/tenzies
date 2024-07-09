import React from 'react'

function Die(props){
    const style ={
         backgroundColor: props.isHeld? "green" : 'white'
    }
    const style2 ={
        height: props.isHeld? '45px' : ''
    }
    return(
        <div className='die' style={style} onClick={()=>props.hold(props.id)}>
            {/* <h1 className='die-num'> {props.value} </h1> */}
            <img src={props.value} style={style2} />
        </div>
    )
}

export default Die