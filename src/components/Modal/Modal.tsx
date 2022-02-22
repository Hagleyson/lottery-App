import React, { FC } from "react"
import { Modal } from "react-native"
import { Container } from ".."

type propsType ={
    isVisible:boolean
    onClose:()=>void
}
const ModalComponent:FC<propsType> =(props)=>{
    return <Container>
        <Modal 
        animationType="fade"       
        visible={props.isVisible}
        onRequestClose={props.onClose}
        presentationStyle="pageSheet"
        >
            {props.children}
        </Modal>
    </Container>
}
export default ModalComponent