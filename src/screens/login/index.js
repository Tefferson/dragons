import React, { useState } from 'react'
import Navigation from '../../utils/navigation'
import routesNames from '../../router/routes-names'
import { connect } from 'react-redux'
import { Form, Button, Jumbotron } from 'react-bootstrap'
import { Creators as UserCreators } from '../../store/user'
import './styles.scss'

const Login = ({ login }) => {
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')

	const onSubmit = async ev => {
		ev.preventDefault()

		const credentials = { user, password }
		const success = await login(credentials)

		if (success) Navigation.push(routesNames.list)
		else {
			console.warn(success)
		}
	}

	return (
		<Jumbotron>
			<div className="login-container">
				<h2 className="login-title">Entrar</h2>
				<Form onSubmit={onSubmit}>
					<Form.Group>
						<Form.Label>Usuário</Form.Label>
						<Form.Control onChange={ev => setUser(ev.target.value)} placeholder="Usuário" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Senha</Form.Label>
						<Form.Control
							onChange={ev => setPassword(ev.target.value)}
							type="password"
							placeholder="Senha"
						/>
					</Form.Group>
					<Button type="submit" block>
						Enviar
					</Button>
				</Form>
			</div>
		</Jumbotron>
	)
}

const mapDispatchToProps = { login: UserCreators.login }

export default connect(null, mapDispatchToProps)(Login)
