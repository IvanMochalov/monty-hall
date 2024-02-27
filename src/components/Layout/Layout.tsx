import React from 'react'
import { Outlet } from 'react-router-dom'
import { ErrorBoundary } from '../ErrorBoundary'
import { Header } from '../Header'
import { Footer } from '../Footer'

export const Layout = () => {
  return (
    <ErrorBoundary>
      <Header />
      <main
        style={{
          flexGrow: '1',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
