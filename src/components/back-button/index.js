import React from 'react'
import Navigation from '../../utils/navigation'
import { Button } from 'react-bootstrap'

const BackButton = props => (
	<Button onClick={Navigation.goBack} {...props}>
		Voltar
	</Button>
)

export default BackButton
