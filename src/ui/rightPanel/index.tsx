'use client'
import styled from 'styled-components'
import Info from './info'

const RightMenuWrapper = styled.div``

type RightPanelProps = {}
const RightPanel = (props: RightPanelProps) => {
  return (
    <RightMenuWrapper className='flex-column r-fif9oo right-menu'>
      <div className='flex-column h-full' style={{ minHeight: '100vh' }}>
        <Info />
      </div>
    </RightMenuWrapper>
  )
}

export default RightPanel
