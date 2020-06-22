import React, { useState, useEffect } from 'react'
import Http from '../../utils/http'
import Toast from '../../utils/toast'
import ModalEdit from './components/modal-edit'
import Navigation from '../../utils/navigation'
import routesNames from '../../router/routes-names'
import { connect } from 'react-redux'
import { Creators as DragonsCreators } from '../../store/dragons'
import { ListGroup, Jumbotron, Button } from 'react-bootstrap'
import './styles.scss'

const goToRegistration = () => Navigation.push(routesNames.registration)

const view = id => () => Navigation.push(routesNames.details, id)

const List = ({ dragons, listDragons, setEditId }) => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		listDragons()
	}, [])

	const handleClose = () => setShow(false)

	const edit = id => async () => {
		setEditId(id)
		setShow(true)
	}

	const remove = id => async () => {
		const { status } = await Http.deleteRequest(id)
		if (status === 200) {
			Toast.success('Dragão removido')
			listDragons()
		}
	}

	return (
		<>
			<Jumbotron>
				<div className="list-container">
					<h2 className="title-row">
						Dragões<Button onClick={goToRegistration}>Adicionar</Button>
					</h2>
					<ListGroup>
						{dragons.map(item => (
							<ListGroup.Item key={item.id} className="list-item">
								<span className="item-name">{item.name}</span>
								<div className="item-actions">
									<span onClick={view(item.id)} className="item-action">
										visualizar
									</span>
									<span onClick={edit(item.id)} className="item-action">
										editar
									</span>
									<span onClick={remove(item.id)} className="item-action">
										remover
									</span>
								</div>
							</ListGroup.Item>
						))}
					</ListGroup>
				</div>
			</Jumbotron>
			<ModalEdit show={show} handleClose={handleClose} />
		</>
	)
}

const mapStateToProps = ({ dragons }) => ({ dragons: dragons.dragons })

const mapDispatchToProps = { listDragons: DragonsCreators.list, setEditId: DragonsCreators.setEditId }

export default connect(mapStateToProps, mapDispatchToProps)(List)
