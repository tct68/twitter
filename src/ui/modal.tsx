import React from 'react'
import { createPortal } from 'react-dom'
import './modal/style.css'
import { SvgViewer } from '.'
type ModalProps = {
  children: any
  title?: string
  onClose?: Function
}
const Modal = (props: ModalProps) => {
  const { children, title, onClose } = props

  const handleCloseClick = (e: any) => {
    e.preventDefault()
    onClose!()
  }

  const modalContent = (
    <div className='modal-overlay'>
      <div className='modal' onClick={handleCloseClick}>
        <article
          className='modal-container'
          onClick={(e) => e.stopPropagation()}
        >
          <header className='modal-container-header'>
            <h1 className='modal-container-title'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width={24}
                height={24}
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  fill='currentColor'
                  d='M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z'
                />
              </svg>
              {title}
            </h1>
            <button className='icon-button' onClick={handleCloseClick}>
              <SvgViewer name='close' />
            </button>
          </header>
          <section className='modal-container-body rtf'>{children}</section>
          <footer className='modal-container-footer'></footer>
        </article>
      </div>
    </div>
  )

  return createPortal(modalContent, document.getElementById('modal-root')!)
}

export default Modal
