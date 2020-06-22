import React, { useState, useEffect } from 'react'
import Http from '../../utils/http'
import BackButton from '../../components/back-button'
import Navigation from '../../utils/navigation'
import routesNames from '../../router/routes-names'
import { Table, Jumbotron } from 'react-bootstrap'
import './styles.scss'

const Details = ({ match }) => {
	const [date, setDate] = useState('')
	const [name, setName] = useState('')
	const [type, setType] = useState('')

	useEffect(() => {
		loadDragon()
	}, [])

	const loadDragon = async () => {
		const { id } = match.params
		const { data, status } = await Http.get(id)
		if (status === 200) {
			setName(data.name)
			setType(data.type)
			setDate(new Date(data.createdAt).toLocaleDateString())
		} else Navigation(routesNames.list)
	}

	return (
		<Jumbotron>
			<div className="details-container">
				<div className="title-row">
					<h2>{name}</h2>
					<BackButton />
				</div>
				<Table striped bordered>
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Data de criação</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{type}</td>
							<td>{date}</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</Jumbotron>
	)
}

export default Details
