import React from 'react'

export const Modal = props => {
	console.log("Modal active = ", props.active)
	return (
		<div>
			<div className={props.active ? "modal active" : "modal"} onClick={props.onModalClose}>
				<div className="modal__content" onClick={e => e.stopPropagation()}>
					{props.children}
				</div>
			</div>
		</div>
	)
}