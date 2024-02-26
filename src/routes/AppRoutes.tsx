import React from 'react'
import { Paths } from '@constants/Paths'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { NotFoundPage } from '@/components/NotFoundPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path={Paths.account} element={<div>Account</div>} />
      </Route>
      <Route path={Paths.login} element={<div>Login</div>} />
      <Route path={Paths.registerInfo} element={<div>Register</div>} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export { AppRoutes }
