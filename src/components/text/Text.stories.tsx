import { Text, TextProps } from "./Text"
import { Meta, StoryObj } from "@storybook/react"

export default {
	title: "Components/Text",
	component: Text,
	args: {
		children: "Lorem ipsum",
		size: "md",
	},
	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: {
				type: "inline-radio",
			},
		},
	},
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
	args: {
		size: "sm",
	},
	argTypes: {
		asChild: {
			table: {
				disable: true,
			},
		},
	},
}

export const Large: StoryObj<TextProps> = {
	args: {
		size: "lg",
	},
	argTypes: {
		asChild: {
			table: {
				disable: true,
			},
		},
	},
}

export const CustomComponent: StoryObj<TextProps> = {
	args: {
		asChild: true,
		children: <p>text with paragraph tag</p>,
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
}
