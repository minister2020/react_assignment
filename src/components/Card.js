import logo from '../logo.svg'

const Card =(props)=> {

const data = props.prop_name

 return(
    <div className="card" >
    <img src={logo} className="card-img-top img-fluid w-25" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">{data.id}</p>
      <p className="card-text">{data.type}</p>
      <p className="card-text">{data.name}</p>
      <p className="card-text">{data.ppu}</p>
      
    </div>
  </div>
 )
}

export default Card