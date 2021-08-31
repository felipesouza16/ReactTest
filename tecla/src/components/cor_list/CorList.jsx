import { Component } from "react";

class CorList extends Component{
    constructor(props){
        super(props);
        this.list_cor = props.list_cor;
    }
    render(){
        return(
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Cores Disponíveis</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.list_cor.map((c, i) =>
                            <tr key = {i}>
                                <td>{c}</td>
                            </tr> 
                        )}
                    </tbody>
                </table>
            </section>
        )
    }
}
export default CorList;