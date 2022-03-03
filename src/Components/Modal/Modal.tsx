import React, { FC } from "react"
import { Modal } from "react-native"
import  Title  from "../Title/Title"
import Container from "../Container/Contaneir"
import  Button  from "../Button/Button"
import { ScrollView } from "react-native-gesture-handler"

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
        <Container type="header">
            <Title>Select Filters</Title>   
            <Button icon="md-checkmark" handleClick={props.onClose}/>
        </Container>
        <Container type="card"> 
            <ScrollView>    
                    
            {props.children}
            
            </ScrollView>
        </Container>

        </Modal>
    </Container>
}
export default ModalComponent