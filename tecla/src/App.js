import { Component } from 'react';
import './components/assets/css/App.css';
import TecladoForm from './components/teclado_form';
import TecladoList from './components/teclado_list'
import CorForms from './components/cor_form';
import CorList from './components/cor_list/CorList';

class App extends Component {
  list = [];
  list_cor = [];

  constructor(){
    super();
    this.state = {
      list : this.list,
      list_cor : this.list_cor 
    }
  }
  createCor(model){
    this.list_cor.push(model);
    this.setState({
        list_cor : this.list_cor
    })
  }
  create(model){
    this.list.push(model);
    console.log(model)
    this.setState({
      list : this.list
    })
  }
  delete(id){
    let remove = this.list.find(c=>c.id === id)
    this.list.splice(remove, 1)
    this.setState({
      list: this.list
    })
  }
  render(){
  return (
    <section>
      <TecladoForm create = {this.create.bind(this)} list_cor = {this.state.list_cor}/>
      <TecladoList list = {this.state.list} delete = {this.delete.bind(this)} />
      <CorForms createCor = {this.createCor.bind(this)}/> 
      <CorList list_cor = {this.state.list_cor}/>
    </section>
  )};
}

export default App;
