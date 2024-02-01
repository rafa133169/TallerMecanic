import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/paginas/login';
import Modal from './componentes/paginas/modal';
import Header from './componentes/header';
import UsersManagement from './componentes/paginas/admin';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route
            path="/Home/:id"
            element={
              <div className="p-4">
                <Header />
                <button onClick={openModal} className='text-right p-4 float-right bg-blue-600 rounded-lg m-4'>Agregar Trabajo</button>
                <Modal showModal={showModal} closeModal={closeModal} />
              </div>
            }
          />

          {/* Nueva ruta para la gestión de usuarios */}
          <Route path="/users/:id" element={
           <div className="p-4">
            <Header />
          <UsersManagement />
          </div>
          } />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
