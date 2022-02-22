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
            <Button color="#c40000" selected typeStyle="filter" title="botão 1" handleClick={()=>{}}/>
            <Button color="#1900ff" typeStyle="filter" title="botão 2" handleClick={()=>{}}/>
            <Button color="#6c009e" typeStyle="filter" title="botão 3" handleClick={()=>{}}/>
            <Button color="#7bff00" typeStyle="filter" title="botão 4" handleClick={()=>{}}/>
            <Button color="#c40000" selected typeStyle="filter" title="botão 1" handleClick={()=>{}}/>
            <Button color="#1900ff" typeStyle="filter" title="botão 2" handleClick={()=>{}}/>
            <Button color="#6c009e" typeStyle="filter" title="botão 3" handleClick={()=>{}}/>
            <Button color="#7bff00" typeStyle="filter" title="botão 4" handleClick={()=>{}}/>
            <Button color="#c40000" selected typeStyle="filter" title="botão 1" handleClick={()=>{}}/>
            <Button color="#1900ff" typeStyle="filter" title="botão 2" handleClick={()=>{}}/>
            <Button color="#6c009e" typeStyle="filter" title="botão 3" handleClick={()=>{}}/>
            <Button color="#7bff00" typeStyle="filter" title="botão 4" handleClick={()=>{}}/>
            </ScrollView>
        </Container>

        </Modal>
    </Container>
}
export default ModalComponent