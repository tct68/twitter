'use client'
import styled from 'styled-components'
import MenuItem, { MenuItemProps } from './menuItem'
import _ from 'lodash'
import { useState } from 'react'

const RightMenuWrapper = styled.nav`
  .menu-item {
    &:hover {
      background-color: #cfd0d1;
      color: white !important;
    }
  }
`

type RightMenuProps = {
  items: MenuItemProps[]
}
const RightMenu = (props: RightMenuProps) => {
  const [item, setItem] = useState('')
  const onChanged = (item: string) => {
    setItem(item)
  }
  return (
    <RightMenuWrapper className='flex-column r-1habvwh column'>
      {_.map(props.items, (x, i) => (
        <MenuItem
          isSelected={item === x.name}
          onChanged={onChanged}
          key={i}
          {...x}
        />
      ))}
    </RightMenuWrapper>
  )
}

export default RightMenu
