import React from 'react'
import { Outlet } from 'react-router-dom'
// import { Footer } from '../Footer'
// import { Header } from '../Header'
import { ErrorBoundary } from '../ErrorBoundary'

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <main style={{ flexGrow: '1' }}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      {/* <Footer /> */}
    </>
  )
}
