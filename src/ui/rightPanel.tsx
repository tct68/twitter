'use client'
import Image from 'next/image'
import styled from 'styled-components'

const RightMenuWrapper = styled.div``

type RightPanelProps = {}
const RightPanel = (props: RightPanelProps) => {
  return (
    <RightMenuWrapper className='flex-column r-fif9oo right-menu'>
      <div className='flex-column h-full' style={{ minHeight: '100vh' }}>
        <div className='flex-column sticky child'>aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa</div>
      </div>
    </RightMenuWrapper>
  )
}

export default RightPanel
