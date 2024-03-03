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
          overflow: 'hidden',
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </ErrorBoundary>
  )
}
