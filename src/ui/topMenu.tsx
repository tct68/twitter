import { useState } from 'react'
import TabItem from './tabItem'
import { map, first } from 'lodash'
type TopMenuProps = {
  tabs: string[]
}

const TopMenu = (props: TopMenuProps) => {
  const [tabName, setTabName] = useState(first(props.tabs))

  return (
    <div className='flex-column r-gtdqiz r-1gn8etr'>
      <div className='flex-column r-1g40b8q'>
        <div className='flex-column r-1e5uvyk r-6026j'>
          <div className='flex-column'>
            <div className='flex-column r-6koalj row'>
              <nav className='flex-column items-center r-j5o65s r-rull8r r-qklmqi r-ouzzow row flex-grow r-1hvjb8t'>
                <div className='flex-column items-center r-1ro0kt6 row flex-grow r-1pi2tsx '>
                  <div className='flex-column d-block flex-grow shrink-1 r-1pi2tsx overflow-h'>
                    <div
                      className='flex-column row flex-grow shrink-1 r-tzz3ar r-1pi2tsx r-lltvgl r-buy8e9 r-mfh4gg r-2eszeu r-hbs49y'
                      style={{ scrollPadding: '0px 36px' }}
                    >
                      {map(props.tabs, (tab, index) => (
                        <TabItem
                          isSelected={tabName === tab}
                          key={index}
                          label={tab}
                          onChanged={(selectTab: string) => {
                            setTabName(selectTab)
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu
