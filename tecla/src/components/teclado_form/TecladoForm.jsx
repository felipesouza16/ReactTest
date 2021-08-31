import { Component } from "react";
import {Button, InputGroup, FormControl} from "react-bootstrap"

class TecladoForm extends Component {

    constructor(props){
        super(props);
        this.list_cor = props.list_cor;
    }
    id;
    switch;
    cor;

    handlerInputId(event){
        this.id = event.target.value;
        event.stopPropagation();
    }
    handlerInputSwitch(event){
        this.switch = event.target.value;
        event.stopPropagation();
    }
    handlerSelectCor(event){
        this.cor = event.target.value;
        event.stopPropagation();
    }
    handlerSalvar(event){
        let teclado = {"id":this.id, "switch":this.switch, "cor": this.cor}
        event.stopPropagation();
        event.preventDefault();
        this.props.create(teclado);
    }

    render(){
        return(
            <section className = "main">
            <form onSubmit = {this.handlerSalvar.bind(this)}>
                <InputGroup className="mb-3"
                    type="number"
                    name="id" 
                    id="id" 
                    placeholder="Digite o id"
                    onChange = {this.handlerInputId.bind(this)}
                >
                <InputGroup.Text>ID</InputGroup.Text>
                <FormControl aria-label="Id" />
                </InputGroup>
                <br />
                <label>Switch: </label>
                <input 
                    type="text" 
                    name="switch"
                    id="switch"
                    placeholder="Digite o switch"
                    onChange = {this.handlerInputSwitch.bind(this)}
                />
                <br />
                <label>Cor: </label>
                <select
                 name="cor"
                 id="cor"
                 onClickCapture = {this.handlerSelectCor.bind(this)}
                >

                    {this.list_cor.map((c,i) => 
                        <option value={c} key = {i}>{c}</option>
                   )}
                </select>
                <br />
                <Button type="submit" variant="success">Salvar</Button>
                {/* <input type="submit" value="Salvar" class = "btn"/> */}
            </form>
            </section>
        )
    } 
    
}

export default TecladoForm;