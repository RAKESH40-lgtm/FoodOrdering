import { render, screen } from "@testing-library/react"
import Contact from "../Components/Contact"
import "@testing-library/jest-dom"

describe("Testcase for Contact us Html", () => {
    it("should be load the Contact text", () => {
        render(<Contact />)

        let checkText = screen.getByRole("heading")
        expect(checkText).toBeInTheDocument()
    })

    it("Should have 2 textfield",()=>{
        render(<Contact />)

        let inputs = screen.getAllByRole("textbox")
        expect(inputs.length).toBe(2)
    })
    it("Should have button",()=>{
        render(<Contact />)

        let button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })
    it("Should have button text submit",()=>{
        render(<Contact />)

        let button = screen.getByText("Submit")
        expect(button).toBeInTheDocument()
    })
})

