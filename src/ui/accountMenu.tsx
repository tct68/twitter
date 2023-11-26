'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { roboto_mono } from '@/fonts'

const Wrapper = styled.div`
  .avatar {
    width: 40px;
    height: 40px;
  }

  .full-name {
    font-size: larger;
    font-weight: 800;
  }

  @media only screen and (max-width: 1283px) {
    .name,
    .icon {
      display: none;
    }
  }
`

type AccountMenuProps = {
  name: string
  userName: string
  avatarUrl: string
}

const AccountMenu = (props: AccountMenuProps) => {
  return (
    <Wrapper className='menu-account css-18t94o4 flex-column items-center content-center rounded-element flex row  r-xyw6el r-o7ynqc r-6416eg'>
      <div className='flex-column'>
        <div className='flex-column d-block visible-overflow avatar'>
          <div className='b-0 h-full l-0 absolute top-0 w-full'>
            <Image
              src={props.avatarUrl}
              height={40}
              width={40}
              className='avatar'
              alt='Avatar'
            />
          </div>
        </div>
      </div>

      <div
        className={`flex-column shrink-1 w-full name ${roboto_mono.className}`}
      >
        <div className='flex-column flex-grow shrink-1 r-1fz3rvf w-full '>
          <div className='flex-column shrink-1 w-full full-name'>
            {props.name}
          </div>
          <div className='flex-column items-center row shrink-1'>
            <div className='flex-column shrink-1 w-full '>
              {props.userName}
            </div>
          </div>
        </div>
      </div>
      <div className='flex-column flex-end flex-grow icon'>
        <Image src='11.svg' width={20} height={20} alt='11.svg' />
      </div>
    </Wrapper>
  )
}

export default AccountMenu
