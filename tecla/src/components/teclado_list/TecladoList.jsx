import { Component } from "react";
import {ReactComponent as DeleteSvg} from "../assets/css/img/delete.svg" 

class TecladoList extends Component{
    constructor(props){
        super(props);
        this.list = props.list;
    }
    handlerDelete(id, event){
        event.stopPropagation();
        this.props.delete(id);
    }
    render(){
        return(
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Switch</th>
                            <th>Cor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.list.map ((c, i) => 
                            <tr key= {i}>
                                <td>{c.id}</td>
                                <td>{c.switch}</td>
                                <td>{c.cor}</td>
                                <td><DeleteSvg onClick= {this.handlerDelete.bind(this, c.id)} title = "Remover item" alt = "Lixeira"/> </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default TecladoList;