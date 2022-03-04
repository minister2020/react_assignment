import Build from "./Build"
import Create from './Create'

const Builds = ()=>{
    
        let datas = [
            {
                name: "Vacation",
                savingsID: "e090ce43",
                amountToSave: 50000.,
                amountSaved: 0.000,
                totalInterestEarned: 0,
                estimatedTerminationDate: "2022-03-0",
                startDate: "2022-02-26",
                maturityDate: "2022-04-23",
                savingsType: 1,
                status: 1,
                imageURL: "",
                interestRate: 15.50,
                schedule: 1,
                installmentalContribution: 5000.,
                isPaused: false
            },
            {
                name: "Testing Personal Target",
                savingsID: "7282413",
                amountToSave: 2000,
                amountSaved: 2500.,
                totalInterestEarned: 10.61,
                estimatedTerminationDate: "2022-02-23T",
                startDate: "2022-02-20",
                savingsType: 1,
                status: 2,
                imageURL: "",
                interestRate: 15.50,
                schedule: 1,
                installmentalContribution: 666.66,
                lastPaymentDate: "2022-02-20T00:",
                isPaused: true
            },
            {
                name: "G Challenge Weekly",
                savingsID: "c6a1f776",
                amountToSave: 2000.,
                amountSaved: 0.00,
                totalInterestEarned: 0,
                estimatedTerminationDate: "0001-01-01",
                startDate: "0001-01-01",
                savingsType: 5,
                status: 1,
                imageURL: "",
                interestRate: 12.50,
                schedule: 2,
                installmentalContribution: 250.0,
                isPaused: false
            },
            {
                name: "G challenge week",
                savingsID: "286c453",
                amountToSave: 5000.00,
                amountSaved: 0.0,
                totalInterestEarned: 0,
                estimatedTerminationDate: "0001-01-01",
                startDate: "0001-01-0",
                savingsType: 5,
                status: 1,
                imageURL: "",
                interestRate: 12.50,
                schedule: 1,
                installmentalContribution: 166,
                isPaused: false
            },
            {
                name: "G challenge",
                savingsID: "87c9042a",
                amountToSave: 2000.0,
                amountSaved: 0.0,
                totalInterestEarned: 0,
                estimatedTerminationDate: "0001-01-01",
                startDate: "0001-01-01",
                savingsType: 5,
                status: 1,
                imageURL: "",
                interestRate: 12.50,
                schedule: 3,
                installmentalContribution: 500.0,
                isPaused: false
            },
            {
                name: "GroupTargetTest2",
                savingsID: "d16d61a",
                amountToSave: 10000.,
                amountSaved: 3333.3,
                totalInterestEarned: 0,
                estimatedTerminationDate: "2021-02-26",
                startDate: "2021-02-23",
                savingsType: 4,
                status: 5,
                imageURL: "",
                interestRate: 12.75,
                schedule: 1,
                installmentalContribution: 1666.7,
                lastPaymentDate: "2021-02-23",
                isPaused: false
            },
            {
                name: "CheckTargetTest",
                savingsID: "d5393",
                amountToSave: 500,
                amountSaved: 1666.66,
                totalInterestEarned: 0,
                estimatedTerminationDate: "2021-02-26",
                startDate: "2021-02-23",
                savingsType: 4,
                status: 5,
                imageURL: "",
                interestRate: 12.75,
                schedule: 1,
                installmentalContribution: 833.3,
                lastPaymentDate: "2021-02-2",
                isPaused: false
            },
            {
                name: "TestChallengeCheck",
                savingsID: "1ed6b0c",
                amountToSave: 2000.0,
                amountSaved: 2000.,
                totalInterestEarned: 0.6,
                estimatedTerminationDate: "2021-02-26",
                startDate: "2021-02-23",
                savingsType: 5,
                status: 5,
                imageURL: "",
                interestRate: 12.50,
                schedule: 1,
                installmentalContribution: 666.,
                isPaused: false
            }
        ]

        return(
           <div>
               <Create/>
               {
                     datas.map(minister => <Build  name={minister} />)
               }
           </div>

              )
}


export default Builds