import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Components/Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
import rootStore from "../utils/Store/rootStore";

test("Should be loaded with header with login button", () => {
    render(
        <Provider store={rootStore}>
            <BrowserRouter >
                <Header />
            </BrowserRouter ></Provider>
    )
    const loginBtn = screen.getByRole("button", { name: 'Login' })
    expect(loginBtn).toBeInTheDocument()

    fireEvent.click(loginBtn)

    const logoutBtn = screen.getByRole("button", { name: 'LogOut' })
    expect(logoutBtn).toBeInTheDocument()

    fireEvent.click(logoutBtn)

    const loginBtn1 = screen.getByRole("button", { name: 'Login' })
    expect(loginBtn1).toBeInTheDocument()
})