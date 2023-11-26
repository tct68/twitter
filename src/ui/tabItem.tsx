type TabItemProps = {
  label: string
  isSelected?: boolean
  onChanged: Function
}
const TabItem = (props: TabItemProps) => {
  return (
    <div
      onClick={() => {
        props.onChanged(props.label)
      }}
      className='flex-column flex-grow r-6b64d0 r-cpa5s6 no-select'
    >
      <a className='css-4rbku5 css-18t94o4 flex-column items-center r-1loqt21 r-6koalj column flex-grow r-1h3ijdo r-1777fci r-s8bhmr  r-1qhn6m8 r-i023vh r-o7ynqc r-6416eg'>
        <div className='flex-column'>
          <div
            className={`css-901oao items-center r-18jsvk2 r-6koalj row r-37j5jr r-a023e6 ${
              props.isSelected ? 'bold' : ''
            } r-1pi2tsx r-1777fci r-rjixqe r-bcqeeo r-1l7z4oj r-95jzfe r-bnwqim r-qvutc0`}
          >
            <span className='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0'>
              {props.label}
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default TabItem
