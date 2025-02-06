import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Components</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout/>}></Route>
        <Routes path="login" element={<AuthLogin/>}></Routes>
        <Routes path="register" element={<AuthRegister/>}></Routes>
      </Routes>
    </div>
  )
}

export default App;
