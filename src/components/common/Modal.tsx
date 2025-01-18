import styled from 'styled-components'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onOverlayClick?: () => void
}

export const Modal = ({ children, onOverlayClick }: Props) => {
  return (
    <Overlay onClick={onOverlayClick}>
      <Container>{children}</Container>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 318px;
  padding: 40px;
  border-radius: 20px;
  background-color: #fff;
  z-index: 1001;
`
