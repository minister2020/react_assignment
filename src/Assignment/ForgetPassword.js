const ForgetPassword = ()=>{
    return (
<div>
           <nav className="navbar navbar-light ">
  <div className="container-fluid">
    
  <a href class="navbar-brand text-primary fs-2 fw-bold">Facebook</a>
    <form className="d-flex">
      <input className="form-control me-2 fs-3" type="Email or phone" placeholder="Email or phone" aria-label="emai or phone"/>
      <input className="form-control me-2 fs-3" type="Password" placeholder="Password" aria-label="password"/>
      <button className="btn btn-primary text-light me-3 " type="submit">LogIn</button>
      <a href class="navbar-brand text-primary ">Forgotten account?</a>

    </form>
  </div>
</nav>

<div className="container-fluid bg-gray py-5">
<div class="container ">
  <div class="row bg-white">
    <div class="col"> </div>
    <div class="col">
    <h1 className="text-bold fs-1">Find Your Account</h1><hr/>
        <p>Please enter your address or mobile number to search for your account</p>
         
        <input className="Email address or mobile number fs-3" type="Email address or mobile number" id="Email address or mobile number" className="form-control" placeholder="Email address or mobile number" required/>

    <div className="d-flex justify-content-end">
         <span><button className="btn btn-secondary me-3 fs-5 my-3">Cancel</button></span>  
         <span><button className="btn btn-primary me-3 fs-5 my-3">Submit</button></span>
        
    </div>
    </div>
    <div class="col"> </div>
  </div>
</div>
</div>

</div>
      
    )
}

export default ForgetPassword