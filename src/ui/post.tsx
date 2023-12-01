'use client'
import styled from 'styled-components'

const PostWrapper = styled.div`
  width: 100%;
  .wrapper {
    border-bottom-width: 1px;
    border-bottom-color: rgba(239, 243, 244, 1);
    outline-style: none;
  }

  .icon {
    top: 0px;
    height: 100%;
    bottom: 0px;
    left: 0px;
    width: 100%;
    .main {
      position: absolute;
      inset: 0px;
    }
  }

  .left-2 {
    left: -2px;
  }

  .top-2 {
    top: -2px;
  }

  .image-size {
    width: calc(100% - -4px);
    height: calc(100% - -4px);
  }

  .post-icon {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
  }
`

type PostProps = {}
const Post = (props: PostProps) => {
  return (
    <PostWrapper>
      <div className='flex-container wrapper d-block'>
        <div className='flex-container'>
          <article className='flex-container transition-200ms pr-16 transition-bg-shadow pl-16 outline-none cursor-pointer overflow-hidden'>
            <div className='flex-container column'>
              <div className='flex-container shrink-1 outline-none flex-grow-1'>
                <div className='flex-container'>
                  <div className='flex-container row'>
                    <div className='flex-container pt-12 f-basis-0 flex-grow-1'></div>
                  </div>
                  <div className='flex-container row'>
                    <div className='flex-container f-basic-40 mr-12 items-center f-grow-0'>
                      <div className='flex-container'>
                        <div className='flex-container f-grow-0 w-width shrink-1'>
                          <div className='flex-container max-w-full shrink-1'>
                            <div className='flex-container size-40 visible-overflow d-block'>
                              <div className='w-full d-block pb-full'></div>
                              <div className='absolute icon'>
                                <div className='flex-container absolute center-translate horizontal-center vertical-center h-full w-full visible-overflow d-block'>
                                  <div className='w-full d-block pb-full'>
                                    <div className='absolute icon'>
                                      <div className='flex-container absolute rounded-element left-2 top-2 image-size overflow-hidden'>
                                        <a className='flex-container h-full w-full transition-200ms transition-bg-shadow outline-none'>
                                          <div className='flex-container post-icon absolute rounded-element horizontal-center vertical-center center-translate'>
                                            <div className='flex-container d-block overflow-hidden'>
                                              <div className='w-full d-block pb-full'></div>
                                              <div className='absolute icon'>
                                                <div className='flex-container main overflow-hidden z-0'>
                                                  <div
                                                    className='flex-container r-1mlwlqe overflow-hidden z-0'
                                                    style={{
                                                      position: 'absolute',
                                                      inset: '0px',
                                                    }}
                                                  >
                                                    <div
                                                      className='flex-container bg-color background-position-center no-repeat b-0 h-full l-0 absolute r-0 top-0 w-full r-1wyyakw background-cover'
                                                      style={{
                                                        backgroundImage:
                                                          'url("https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg")',
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex-container pb-12 f-basis-0 f-grow-1'>
                      <div className='flex-container mb-2'>
                        <div className='flex-container align-start row space-between'>
                          <div className='flex-container align-baseline row shrink-1'>
                            <div className='flex-container shrink-1 max-w-full outline-none'>
                              <div className='flex-container shrink-1 max-w-full outline-none items-center row'>
                                <div className='flex-container items-center row shrink-1 max-w-full'>
                                  <div className='flex-container shrink-1 max-w-full'>
                                    <a
                                      href='/elonmusk'
                                      className='flex-container shrink-1 max-w-full outline-none r-1loqt21'
                                    >
                                      <div className='flex-container items-center row shrink-1 max-w-full'>
                                        <div
                                          className='custom-text min-width-0 break-word r-37j5jr fs-15 line-height-20 fw-700 items-center flex overflow-hidden nowrap'
                                          style={{
                                            color: 'rgb(15, 20, 25)',
                                          }}
                                        >
                                          <span className='reset-styles max-w-full overflow-hidden nowrap min-width-0 break-word r-poiln3'>
                                            <span className='reset-styles min-width-0 break-word r-poiln3'>
                                              Elon Musk
                                            </span>
                                          </span>
                                        </div>
                                        <div
                                          className='custom-text min-width-0 break-word r-37j5jr fs-15 line-height-20 r-16dba41 inline-flex row shrink-0'
                                          style={{
                                            color: 'rgb(15, 20, 25)',
                                          }}
                                        >
                                          <span className='reset-styles min-width-0 break-word r-poiln3 items-center inline-flex'>
                                            <svg
                                              viewBox='0 0 22 22'
                                              aria-label='Verified account'
                                              role='img'
                                              className='inline-block r-yyyyoo height-1-25 relative text-bottom r-lrvibr primary max-height-20 max-width-20 ml-2'
                                              data-testid='icon-verified'
                                            >
                                              <g>
                                                <path d='M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z' />
                                              </g>
                                            </svg>
                                            <div className='flex-container inline-flex center-justify-content mr-2 ml-4 outline-none r-1loqt21'>
                                              <div
                                                className='flex-container inline-block max-height-17 max-width-17 relative'
                                                style={{
                                                  height: 'calc(1.0625em)',
                                                  width: 'calc(1.0625em)',
                                                }}
                                              >
                                                <div className='flex-container r-1adg3ll overflow-hidden'>
                                                  <div
                                                    className='r-1adg3ll w-full'
                                                    style={{
                                                      paddingBottom: '100%',
                                                    }}
                                                  />
                                                  <div className='b-0 h-full absolute l-0 top-0 w-full'>
                                                    <div
                                                      className='flex-container r-1mlwlqe overflow-hidden r-417010'
                                                      style={{
                                                        height: '100%',
                                                        width: '100%',
                                                        borderRadius: '2px',
                                                        display: 'flex',
                                                        borderColor:
                                                          'rgb(207, 217, 222)',
                                                        borderWidth: '1px',
                                                      }}
                                                    >
                                                      <div
                                                        className='flex-container inline-flex r-1niwhzg background-position-center no-repeat b-0 h-full l-0 absolute r-0 top-0 w-full r-1wyyakw background-cover'
                                                        style={{
                                                          backgroundImage:
                                                            'url("https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg")',
                                                        }}
                                                      />
                                                      <img
                                                        alt=''
                                                        draggable='false'
                                                        src='https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg'
                                                        className='css-9pa8cd'
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <div className='flex-container row shrink-1 ml-4'>
                                  <div className='flex-container align-baseline row shrink-1'>
                                    <div className='flex-container shrink-1 max-w-full'>
                                      <a
                                        href='/elonmusk'
                                        role='link'
                                        tabIndex={-1}
                                        className='flex-container shrink-1 max-w-full outline-none r-1loqt21'
                                      >
                                        <div
                                          dir='ltr'
                                          className='custom-text max-w-full overflow-hidden nowrap min-width-0 break-word r-37j5jr fs-15 line-height-20 r-16dba41 row r-1wvb978'
                                          style={{
                                            color: 'rgb(83, 100, 113)',
                                          }}
                                        >
                                          <span className='reset-styles min-width-0 break-word r-poiln3'>
                                            @elonmusk
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                    <div
                                      dir='ltr'
                                      aria-hidden='true'
                                      className='custom-text min-width-0 break-word r-37j5jr fs-15 line-height-20 r-16dba41 shrink-0 r-s1qlax'
                                      style={{
                                        color: 'rgb(83, 100, 113)',
                                      }}
                                    >
                                      <span className='reset-styles min-width-0 break-word r-poiln3'>
                                        ·
                                      </span>
                                    </div>
                                    <div className='flex-container row shrink-0'>
                                      <a
                                        href='/elonmusk/status/1728582473247027624'
                                        dir='ltr'
                                        aria-label='3 hours ago'
                                        role='link'
                                        className='custom-text min-width-0 break-word r-37j5jr fs-15 line-height-20 r-16dba41 inline-flex shrink-0 wrap r-9aw3ui nowrap r-1loqt21'
                                        style={{
                                          color: 'rgb(83, 100, 113)',
                                        }}
                                      >
                                        <time dateTime='2023-11-26T01:12:31.000Z'>
                                          3h
                                        </time>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex-container r-1jkjb'>
                            <div className='flex-container items-center row r-1cmwbt1 space-between'>
                              <div className='flex-container items-center flex row'>
                                <div className='flex-container'>
                                  <div className='flex-container row r-1h0z5md'>
                                    <div
                                      aria-expanded='false'
                                      aria-haspopup='menu'
                                      aria-label='More'
                                      role='button'
                                      tabIndex={0}
                                      className='flex-container center-justify-content r-bt1l66 r-bztko3 r-lrvibr r-1loqt21 outline-none'
                                      data-testid='caret'
                                    >
                                      <div
                                        dir='ltr'
                                        className='custom-text min-width-0 break-word r-37j5jr fs-15 line-height-20 r-16dba41 items-center flex r-1h0z5md r-o7ynqc r-clp7b1 nowrap'
                                        style={{
                                          color: 'rgb(83, 100, 113)',
                                        }}
                                      >
                                        <div className='flex-container inline-flex'>
                                          <div className='flex-container inline-flex b-0 l-0 absolute r-0 top-0 r-1niwhzg r-sdzlij r-xf4iuw r-o7ynqc r-6416eg outline-none' />
                                          <svg
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                            className='inline-block r-yyyyoo max-w-full relative text-bottom r-lrvibr height-1-25 r-1hdv0qi'
                                          >
                                            <g>
                                              <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z' />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='css-175oi2r'>
                        <div
                          dir='auto'
                          lang='en'
                          className='custom-text r-8akbws r-krxsd3 r-dnmrzs r-1udh08x r-bcqeeo r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-bnwqim'
                          id='id__rgyy90yxxre'
                          data-testid='tweetText'
                          style={{
                            WebkitLineClamp: 10,
                            color: 'rgb(15, 20, 25)',
                          }}
                        >
                          <span className='css-1qaijid r-bcqeeo r-qvutc0 r-poiln3'>
                            gm Scrollers
                          </span>
                          <img
                            alt='📜'
                            draggable='false'
                            src='https://abs-0.twimg.com/emoji/v2/svg/1f4dc.svg'
                            className='inline-block r-dflpy8 r-zw8f10 r-sjv1od r-10akycc r-h9hxbl'
                            title='Scroll'
                            width='1.2em'
                          />
                          <span className='css-1qaijid r-bcqeeo r-qvutc0 r-poiln3'>
                            It&apos;s time for our end of week update, where we
                            provide an overview of everything that has been
                            happening across the
                          </span>
                          <div className='css-175oi2r r-xoduu5'>
                            <span className='r-18u37iz'>
                              <a
                                dir='ltr'
                                href='/Scroll_ZKP'
                                role='link'
                                className='css-1qaijid r-bcqeeo r-qvutc0 r-poiln3 r-1loqt21'
                                style={{
                                  color: 'rgb(29, 155, 240)',
                                }}
                              >
                                @Scroll_ZKP
                              </a>
                            </span>
                          </div>
                          <span className='css-1qaijid r-bcqeeo r-qvutc0 r-poiln3'>
                            ecosystem. This week, we&apos;re diving into our
                            integration with
                          </span>
                          <div className='css-175oi2r r-xoduu5'>
                            <span className='r-18u37iz'>
                              <a
                                dir='ltr'
                                href='/circle'
                                role='link'
                                className='css-1qaijid r-bcqeeo r-qvutc0 r-poiln3 r-1loqt21'
                                style={{
                                  color: 'rgb(29, 155, 240)',
                                }}
                              >
                                @circle
                              </a>
                            </span>
                          </div>
                          <span className='css-1qaijid r-bcqeeo r-qvutc0 r-poiln3'>
                            , our recap of the
                          </span>
                          <div className='css-175oi2r r-xoduu5'>
                            <span className='r-18u37iz'>
                              <a
                                dir='ltr'
                                href='/ETHGlobal'
                                role='link'
                                className='css-1qaijid r-bcqeeo r-qvutc0 r-poiln3 r-1loqt21'
                                style={{
                                  color: 'rgb(29, 155, 240)',
                                }}
                              >
                                @ETHGlobal
                              </a>
                            </span>
                          </div>
                          <span className='css-1qaijid r-bcqeeo r-qvutc0 r-poiln3'>
                            Istanbul hackathon, and much more
                          </span>
                          <img
                            alt='👇'
                            src='https://abs-0.twimg.com/emoji/v2/svg/1f447.svg'
                            className='inline-block r-dflpy8 r-zw8f10 r-sjv1od r-10akycc r-h9hxbl'
                            title='Down pointing backhand index'
                            width='1.2em'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </PostWrapper>
  )
}

export default Post
