'use client'
import { Container, Header, RightPanel, TopMenu } from '@/ui'
import styled from 'styled-components'
const MainLayoutWrapper = styled.main`
  flex-shrink: 1;
  flex-grow: 1;
  .main-content {
    width: 990px;
  }
  .content {
    max-width: 600px;
  }

  .right-menu {
    width: 350px;
    .child: {
      width: 350px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1283px) {
    .content {
      margin-left: 8px;
      margin-right: 8px;
    }
  }

  @media only screen and (max-width: 1006px) {
    .main-content {
      width: 600px;
    }

    .right-menu {
      display: none;
    }
  }

  @media only screen and (min-width: 1007px) and (max-width: 1097px) {
    flex-grow: 1;
    .right-menu {
      margin-right: 10px;
      width: 290px;
      .child: {
        width: 290px;
      }
    }

    .main-content {
      width: 920px;
    }
  }

  @media only screen and (min-width: 1284px) {
    .right-menu {
      margin-right: 70px;
    }
  }

  @media only screen and (max-width: 706px) {
    .main-content {
      width: 100%;
    }
  }

  @media only screen and (min-width: 1404px) {
    flex-grow: 1;
    .main-content {
      width: 1050px;
    }
  }
`

type MainLayoutProps = {
  children: any
  className?: string
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <Container className={`${props.className} flex-column row`}>
      <Header />
      <MainLayoutWrapper className='flex-column r-1habvwh'>
        <div className='flex-column r-150rngu flex-grow flex-shrink r-113js5t main-content'>
          <div className='flex-column flex-grow'>
            <div className='flex-column stretch r-1niwhzg row flex-grow space-between r-2llsf r-13qz1uu'>
              <div className='flex-column r-14lw9ot r-jxzhtn r-1ljd8xs r-13l2t4g solid-border-all flex-grow r-1jgb5lz r-11wrixw r-61z16t r-1ye8kvj r-13qz1uu r-184en5c content'>
                <TopMenu tabs={['Dành cho bạn', 'Đang theo dõi']} />
                <div className='p-8'>{props.children}</div>
              </div>
              <RightPanel />
            </div>
          </div>
        </div>
      </MainLayoutWrapper>
    </Container>
  )
}

export default MainLayout
