'use client'
import styled from 'styled-components'

const PostWrapper = styled.div`
  width: 100%;
  .wrapper {
    border-bottom-width: 1px;
    border-bottom-color: rgba(239, 243, 244, 1);
    outline-style: none;
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
                              <div className='w-full d-block pb-full'>
                                sss
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
          </article>
        </div>
      </div>
    </PostWrapper>
  )
}

export default Post
