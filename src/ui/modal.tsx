'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import './modal/style.css'
import { SvgViewer } from '.'
const ModalContainer = styled.div`
  .modal-full-container {
    background-color: #fff;
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
`
type ModalProps = {
  children: any
  title?: string
  onClose?: Function
  full?: boolean
}
const Modal = (props: ModalProps) => {
  const { children, title, onClose } = props

  const handleCloseClick = (e: any) => {
    e.preventDefault()
    onClose!()
  }

  const modalContent = (
    <div className='modal-overlay'>
      <ModalContainer className='modal' onClick={handleCloseClick}>
        <article
          className={props.full ? 'modal-full-container' : 'modal-container'}
          onClick={(e) => e.stopPropagation()}
        >
          <header className='modal-container-header'>
            <h1 className='modal-container-title'>
              {title}
            </h1>
            <button className='icon-button' onClick={handleCloseClick}>
              <SvgViewer name='close' />
            </button>
          </header>
          <section className='modal-container-body relative'>
            {children}
          </section>
          <footer className='modal-container-footer'>
            
          </footer>
        </article>
      </ModalContainer>
    </div>
  )

  return createPortal(modalContent, document.getElementById('modal-root')!)
}

export default Modal
