import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
import Contact from './Contact'

describe("<Contact />", () => {
    test("test click", async () => {
        const user = await userEvent.setup()
        render(<Contact />)
        expect(screen.queryByText("Merci d'avoir cliqué")).not.toBeInTheDocument()
        await user.click(screen.getByRole("button")) 
        expect(screen.getAllByText("Merci d'avoir cliqué")).toHaveLength(1);
    })
})