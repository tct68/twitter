'use client'

import styled from 'styled-components'
const ContainerWrapper = styled.div`
  display: flex;
  @media only screen and (min-width: 500px) and (max-width: 706px) {
    header {
      flex-grow: unset;
    }

    .padding-horizontal {
      padding-left: 4px;
      padding-right: 4px;
    }
  }

  @media only screen and (max-width: 499px) {
    header {
      display: none;
    }

    .padding-horizontal {
      padding-left: 4px;
      padding-right: 4px;
    }
  }
`

type ContainerProps = {
  children: any
  className: string
}
const Container = (props: ContainerProps) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>
}

export default Container
