'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { roboto_mono } from '@/pages/fonts'

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
    <Wrapper className='menu-account css-18t94o4 flex-column items-center content-center rounded-element r-6koalj row  r-xyw6el r-o7ynqc r-6416eg'>
      <div className='flex-column'>
        <div className='flex-column r-1adg3ll r-bztko3 avatar'>
          <div className='r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu'>
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
        className={`flex-column flex-shrink r-dnmrzs name ${roboto_mono.className}`}
      >
        <div className='flex-column flex-grow flex-shrink r-1fz3rvf r-dnmrzs '>
          <div className='flex-column flex-shrink r-dnmrzs full-name'>
            {props.name}
          </div>
          <div className='flex-column items-center row flex-shrink'>
            <div className='flex-column flex-shrink r-dnmrzs '>
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
