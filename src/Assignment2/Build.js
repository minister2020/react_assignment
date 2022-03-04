    const Build =(props)=>{
    const data = props.name


    return(
        <div className="container bg-secondary">
        <div className="row">
          <div className="col">
        
          <div className="card" >
    
    <div className="card-body">
      <h5 className="card-title fs-3">Transaction History</h5>
      <div className="card-body">
      
    <div className="container">
  <div className="row row-cols-2">
    <div className="col"><p className="card-text">{data.name}</p></div>
    <div className="col"><p className="card-text">{data.action}</p></div>
    <div className="col"><p className="card-text">{data.amount}</p></div>
    <div className="col"><p className="card-text">{data.savingsType}</p></div>
    <div className="col"><p className="card-text">{data.customerProfilePicture}</p></div>
    <div className="col"><p className="card-text">{data.customerName}</p></div>
    <div className="col"><p className="card-text">{data.id}</p></div>
 
    
  </div>
</div>
   
      
    </div>
     
      
    </div>
  </div>

      
      
    
          </div>
          
          <div className="col">
          <div className="card" >
     <div>
     <div className="card-body">
      <h5 className="card-title fs-4">{data.name}</h5>
    </div>
     </div>
    <div className="card-body">
      
    <div className="container">
    <div className="row row-cols-2">
       <p>Total saved</p>
     <h5>{data.amountToSave}/Day</h5>
     <p>Start Date</p>
     <h5 className="card-text">{data.startDate}</h5>
     <p>End Date</p>
     <h5 className="card-text">{data.maturityDate}</h5>
     <p>Interest Rate</p>
     <h5 className="card-text">{data.InterestRate}</h5>
    <div className="col">
    
    </div>
    
    

  </div>
</div>
   
      
    </div>
  </div>
          </div>
        </div>
      </div>
    )
}

export default Build