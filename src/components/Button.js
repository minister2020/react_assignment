

const Button =(props)=>{
const { name, checkMe } = props
function click(){
    return alert('you are welcome')

}
 return(checkMe)? <button className="btn btn-warning" onClick={click}>{name}</button>:<button className="btn btn-danger" onClick={click}>{name}</button>
     
}

export default Button