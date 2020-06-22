import React, { useState } from 'react'
import Http from '../../utils/http'
import Toast from '../../utils/toast'
import BackButton from '../../components/back-button'
import Navigation from '../../utils/navigation'
import routesNames from '../../router/routes-names'
import { Form, Button, Jumbotron } from 'react-bootstrap'
import './styles.scss'

const Registration = () => {
	const [name, setName] = useState('')
	const [type, setType] = useState('')

	const onSubmit = async ev => {
		ev.preventDefault()

		if (!name || !type) return

		const { status } = await Http.post('', { name, type })

		if (status === 201) {
			Toast.success('Dragão cadastrado')
			Navigation.push(routesNames.list)
		}
	}

	return (
		<Jumbotron>
			<div className="form-container">
				<div className="title-row">
					<h2>Cadastro</h2>
					<BackButton />
				</div>
				<Form onSubmit={onSubmit}>
					<Form.Group>
						<Form.Label>Nome</Form.Label>
						<Form.Control onChange={ev => setName(ev.target.value)} placeholder="Nome" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Tipo</Form.Label>
						<Form.Control onChange={ev => setType(ev.target.value)} placeholder="Tipo" />
					</Form.Group>
					<Button block type="submit">
						Cadastrar
					</Button>
				</Form>
			</div>
		</Jumbotron>
	)
}

export default Registration
