import { Meta, StoryObj } from "@storybook/react"
import { within, userEvent, waitFor } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { Signin } from "./Signin"
import { rest } from "msw"
export default {
	title: "Pagees/Sign in",
	component: Signin,
	args: {},
	argTypes: {},
	parameters: {
		msw: {
			handlers: [
				rest.post("/sessions", (req, res, context) => {
					return res(
						context.json({
							message: "Login realizado!",
						})
					)
				}),
			],
		},
	},
} as Meta

export const Default: StoryObj = {
	play: async ({ canvasElement }: any) => {
		const canvas = within(canvasElement)

		userEvent.type(
			canvas.getByPlaceholderText("Digite seu e-mail"),
			"lucasValido@hotmail.com"
		)
		userEvent.type(canvas.getByPlaceholderText("******"), "123456789")
		userEvent.click(canvas.getByRole("button"))

		await waitFor(() => {
			return expect(canvas.getByText("Login realizado!")).toBeInTheDocument()
		})
	},
}
