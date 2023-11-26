'use client'
import styled from 'styled-components'
const BtnPostWrapper = styled.a`
  border-color: rgba(0, 0, 0, 0);
  background-color: rgb(29, 155, 240);
  align-items: center;
  justify-content: center;
`

type BtnPostProps = {
  label: string
}
const BtnPost = (props: BtnPostProps) => {
  return (
    <BtnPostWrapper className='fw-700 flex-container rounded-element solid-border-all r-rs99b7 r-lrvibr r-1waj6vr r-19yznuf r-64el8z r-1dye5f7 r-o7ynqc r-6416eg  r-1loqt21 white'>
      {props.label}
    </BtnPostWrapper>
  )
}

export default BtnPost
