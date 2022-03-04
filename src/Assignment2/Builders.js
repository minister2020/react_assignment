
import Build from "./Build"

const Builders = () =>{

        let datas =  [

            {
             Test: 666.66,
             action: 2,
             creationDate: "2021-02-12",
             name: "TestChallengeCheck",
             savingsType: 5,
             customerProfilePicture: "",
             customerName: "Rosh Abayomi",
             id: "038684a3",
             lastModifiedDate: "2021-02",
             Testr: 2000
         },
         
        ]
     return (
            <div className="">
              {
                  datas.map(minister => <Build  name={minister} />)
              }
            </div>
           )


     }
export default Builders