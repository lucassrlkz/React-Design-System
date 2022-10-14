import { FormEvent, useState } from "react"
import { Checkbox } from "@radix-ui/react-checkbox"
import { Envelope, Lock } from "phosphor-react"
import axios from "axios"

import { Heading } from "../components/heading/Heading"
import { TextInput } from "../components/textInput/TextInput"
import { Text } from "../components/text/Text"
import { Button } from "../components/button/Button"
import { Logo } from "../Logo"

export function Signin() {
	const [isUserSignedIn, setisUserSignedIn] = useState(false)

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		await axios.post("/sessions", {
			email: "lucasValido@hotmail.com",
			password: "123456789",
		})
		setisUserSignedIn(true)
	}

	return (
		<div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
			<header className="flex flex-col items-center">
				<Logo />
				<Heading size="lg" className="mt-4" children="Ignite Lab" />
				<Text
					size="lg"
					className="text-gray-400 mt-1"
					children="Faça login e comece a usar!"
				></Text>
			</header>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
			>
				{isUserSignedIn && <Text children="Login realizado!"></Text>}
				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold" children="Endereço de e-mail"></Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Lock />
						</TextInput.Icon>
						<TextInput.Input
							type="email"
							id="email"
							placeholder="Digite seu e-mail"
						/>
					</TextInput.Root>
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold" children="Sua senha"></Text>
					<TextInput.Root>
						<TextInput.Icon>
							<Envelope />
						</TextInput.Icon>
						<TextInput.Input
							type="password"
							id="password"
							placeholder="******"
						/>
					</TextInput.Root>
				</label>

				<label htmlFor="remember" className="flex item-center gap-2">
					<Checkbox id="remember" />
					<Text
						size="sm"
						className="text-gray-200"
						children="Lembrar de mim por 30 dias"
					></Text>
				</label>

				<Button
					type="submit"
					className="mt-4"
					children="Entrar na plaraforma"
				></Button>

				<footer className="flex flex-col items-center gap-4 mt-8">
					<Text asChild size="sm">
						<a
							href=""
							className="text-gray-400 underline transition-colors hover:text-gray-200"
						>
							Esqueceu sua senha?
						</a>
					</Text>

					<Text asChild size="sm">
						<a
							href=""
							className="text-gray-400 underline transition-colors hover:text-gray-200"
						>
							Não possui conta? Crie uma agora
						</a>
					</Text>
				</footer>
			</form>
		</div>
	)
}
