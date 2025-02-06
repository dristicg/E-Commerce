import { useState } from 'react'
import './App.css'

function App() {
 

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Components</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout/>}></Route>
        <Route path="login" element={<AuthLogin/>}></Route>
        <Route path="register" element={<AuthRegister/>}></Route>
        <Route path="/admin" element={<AdminLayout/>}>
      
      </Route>
      </Routes>
      
    </div>
  )
}

export default App;
