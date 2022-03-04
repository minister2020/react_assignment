import Card from './Card'
import Empty from './Empty'




const Cards = ()=>{


  let datas =  [
        {
            id: "0001",
            type: "donut",
            name: "Cake",
            ppu: 0.55,
        },
        {
            id: "0002",
            type: "donut",
            name: "Raised",
            ppu: 0.55
        },
        {
            id: "0003",
            type: "donut",
            name: "Old Fashioned",
            ppu: 0.55
        }
    ]



    return (
       
      <div className='container'>
          {
      (datas.length > 0)? datas.map(mini => <Card key ={datas.id} prop_name={mini} />) : <Empty/>
          }

      </div>  
        )

}
export default Cards