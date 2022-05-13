import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import Main from './routes/Main'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
