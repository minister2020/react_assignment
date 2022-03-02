import Headers from './Headers'
import Button from './Button'


const Register = ()=>{
     
      
    return(
    
  <div className="container bg-success" >
    <Headers/>
         <h1 className='text-light'>Register</h1>
         <form>
           <div>
          <label htmlfor="firstname"> Firstname: </label>
          <input className="firstname" type="text" id="firstname" className="form-control" placeholder="firsname" required /><br/> <br/>
         </div>
         
            <div>
          <label htmlfor="Lastname"> Lastname </label>
          <input className="lastname" type="text" id="lastname" className="form-control" placeholder="lastname" required /><br/> <br/>
            </div>

          <div>
          <label htmlfor="email">Email</label> 
          <input className="email" type="email" id="email" className="form-control" placeholder="email" required/><br/><br/>
        </div>

        
        <div>
          <label htmlfor="password">Password</label> 
          <input className="password" type="password" id="password" className="form-control" placeholder="password" required/><br/><br/>
        </div>
        <Button name="Register" checkMe = {true}/>
        </form>
 </div>
    )
}
export default Register