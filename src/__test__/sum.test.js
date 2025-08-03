import { sum } from "../Components/sum"

test("Output of sum is calculated",()=>{
    let result=sum(2,13)
    let result1=sum(5,15)

    expect(result).toBe(15)
    expect(result1).toBe(20)
})