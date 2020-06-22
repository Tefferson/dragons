import React, { useState, useEffect } from 'react'
import Http from '../../../../utils/http'
import Toast from '../../../../utils/toast'
import { connect } from 'react-redux'
import { Form, Modal, Button } from 'react-bootstrap'
import { Creators as DragonsCreators } from '../../../../store/dragons'

const ModalEdit = ({ show, dragons, setEditId, editId, handleClose, listDragons }) => {
	const [name, setName] = useState('')
	const [type, setType] = useState('')

	useEffect(() => {
		const dragon = dragons.find(item => item.id === editId)
		if (!dragon) return
		setName(dragon.name)
		setType(dragon.type)
	}, [editId])

	const onSave = async () => {
		if (name && type) {
			const { status } = await Http.put(editId, { name, type })
			if (status === 200) {
				Toast.success('Dragão editado')
				await listDragons()
			}
		}
		onClose()
	}

	const onClose = () => {
		setEditId()
		handleClose()
	}

	return (
		<Modal show={show} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Edição</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label>Nome</Form.Label>
						<Form.Control value={name} onChange={ev => setName(ev.target.value)} placeholder="Nome" />
					</Form.Group>
					<Form.Group>
						<Form.Label>Tipo</Form.Label>
						<Form.Control value={type} onChange={ev => setType(ev.target.value)} placeholder="Tipo" />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={onClose}>
					Fechar
				</Button>
				<Button onClick={onSave}>Salvar</Button>
			</Modal.Footer>
		</Modal>
	)
}

const mapStateToProps = ({ dragons }) => ({ editId: dragons.editId, dragons: dragons.dragons })

const mapDispatchToProps = {
	listDragons: DragonsCreators.list,
	setEditId: DragonsCreators.setEditId
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit)
