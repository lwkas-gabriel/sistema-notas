import './App.css'

function App() {

  return (
    <main className='container-lg bg-dark text-light'>
      <h1 className='text-light'>Sistema de Notas</h1>
      <form className='container text-light'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nome</label>
            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Texto</label>
            <input className="form-control" id="exampleInputPassword1" />
          </div>
          <button className='btn btn-success mb-4'>Adicionar nota</button>
      </form>

      <h2>Lista de Notas</h2>
      <ul className='list-group'>
        {/* inicialmente vazia */}
        <li className='list-group-item'>Teste</li>
        <li className='list-group-item'>Teste</li>
        <li className='list-group-item'>Teste</li>
        <li className='list-group-item'>Teste</li>
        <li className='list-group-item'>Teste</li>
      </ul>
    </main>
  )
}

export default App
