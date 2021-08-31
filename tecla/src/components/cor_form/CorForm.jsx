import { Component} from "react";
import "../assets/css/CorForm.css"

class CorForms extends Component{
    cor;

    handlerEnter(event){
        if (event.keyCode === 13){
            this.cor = event.target.value;
            console.log(this.cor)
            this.handlerSalvar(event)
            event.stopPropagation();
            event.preventDefault();
        }
    }
    handlerSalvar(event){
        this.props.createCor(this.cor)
        event.stopPropagation();
        event.preventDefault();
    }
    render(){
        return(
            <form id = "formCor">
                <label>Cor: </label>
                <input 
                type="text" 
                name="cor" 
                id="cor" 
                placeholder="Digite a cor"
                onKeyDown = {this.handlerEnter.bind(this)}
                />
                <table>
                    <tbody>
                    </tbody>
                </table>
            </form>
        )
    }
}
export default CorForms;