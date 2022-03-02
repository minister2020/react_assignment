import Button from "./Button"



const HelloWorld = ()=>{
    return(
        <div className="container bg-grey" >
          <h1>  this is my first practice on react</h1><br/>
          <form>
           <div>
          <label htmlfor="username"> <i className="fa fa-user" aria-hidden="true"></i>: </label>
          <input className="username" type="text" id="username" placeholder="username" required /><br/> <br/>
            </div>
          <div>
          <label htmlfor="password"><i className="fa fa-unlock-alt" aria-hidden="true"></i>:
        </label> 
          <input className="surname" type="password" id="password" placeholder="password" required/><br/><br/>
        </div>
        <Button/>
        </form>
        </div>
        
        
    )
}
export default  HelloWorld