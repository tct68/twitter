'use client'
import { useState } from 'react'
import Image from 'next/image'
import { BtnPost, CreateNewPostModal, Modal, RightMenu } from '.'
import styled from 'styled-components'
import AccountMenu from './accountMenu'

const HeaderWrapper = styled.header`
  @media only screen and (min-width: 1284px) {
    .left-panel {
      width: 275px;
    }
  }

  @media only screen and (max-width: 1283px) {
    .left-panel {
      width: 88px !important;
    }

    .left-panel nav a,
    .left-panel nav div {
      -ms-flex-align: center !important;
      -webkit-align-items: center !important;
      -webkit-box-align: center !important;
      align-items: center !important;
    }

    .left-panel nav a .name,
    .left-panel nav div .name {
      display: none !important;
    }

    .logo {
      align-items: center;
    }
  }

  @media only screen and (max-width: 618px) {
    .left-panel {
      width: 68px !important;
    }
  }
`

type HeaderProps = {}
const Header = (props: HeaderProps) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <HeaderWrapper className='flex-column flex-end flex-grow no-select r-1g40b8q'>
      <div className='flex-column r-i5ea98 left-panel'>
        <div className='flex-column h-full r-1xcajam top-0'>
          <div className='flex-column h-full space-between r-1rnoaur padding-horizontal left-panel'>
            <div className='flex-column align-start logo'>
              <div className='flex-column r-1vvnge1'>
                <h1 className='css-4rbku5 flex-column items-center r-1pz39u2 r-1loqt21 flex flex-grow center-justify-content r-4wgw6l'>
                  <a className='css-4rbku5 css-18t94o4 flex-column bg-color r-42olwf rounded-element solid-border-all r-rs99b7 r-1loqt21 r-19yznuf r-64el8z  r-o7ynqc r-6416eg no-select'>
                    <div className='css-901oao items-center r-18jsvk2 flex row flex-grow r-37j5jr fs-15 fw-700 center-justify-content line-height-20 min-width-0 r-q4m81j break-word'>
                      <Image src='1.svg' width={24} height={24} alt='1.svg' />
                      <span className='css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-1inkyih line-height-20 min-width-0 break-word'></span>
                    </div>
                  </a>
                </h1>
              </div>
              <div className='flex-column r-15zivkp r-1bymd8e w-full'>
                <RightMenu
                  items={[
                    {
                      name: 'Trang chủ 1',
                      icon: (
                        <Image src='2.svg' width={24} height={24} alt='2.svg' />
                      ),
                    },
                    {
                      name: 'Trang chủ chủ 2',
                      icon: (
                        <Image src='2.svg' width={24} height={24} alt='2.svg' />
                      ),
                    },
                    {
                      name: 'Trang chủ chủ 3',
                      icon: (
                        <Image src='2.svg' width={24} height={24} alt='2.svg' />
                      ),
                    },
                    {
                      name: 'Trang chủ 4',
                      icon: (
                        <Image src='2.svg' width={24} height={24} alt='2.svg' />
                      ),
                    },
                    {
                      name: 'Trang chủ 5',
                      icon: (
                        <Image src='2.svg' width={24} height={24} alt='2.svg' />
                      ),
                    },
                    {
                      name: 'Trang chủ 6',
                      icon: (
                        <Image src='2.svg' width={24} height={24} alt='2.svg' />
                      ),
                    },
                  ]}
                />
              </div>
              <div className='flex-container r-e7q0ms r-1r5su4o'>
                <BtnPost onClick={() => setShowModal(true)} label='Post' />
              </div>
            </div>
            <div className='flex-column r-usiww2'>
              <div className='flex-column'>
                <AccountMenu
                  avatarUrl='https://pbs.twimg.com/profile_images/1726161199547748352/CBVIXFCr_normal.jpg'
                  name='Richmond'
                  userName='@richmond1368'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal title='Create new post' onClose={() => setShowModal(false)}>
          <CreateNewPostModal />
        </Modal>
      )}
    </HeaderWrapper>
  )
}

export default Header
