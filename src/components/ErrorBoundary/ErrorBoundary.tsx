import { Typography } from '@mui/material'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { ContainerBlock } from '../common/ContainerBlock'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    this.setState({ hasError: true, error, errorInfo })
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ContainerBlock
          sx={{ height: '100%', padding: '60px', paddingTop: '176px', marginTop: '-36px' }}
        >
          <Typography variant='h5' sx={{ textAlign: 'center' }}>
            Упс! Что-то пошло не так
          </Typography>
        </ContainerBlock>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
