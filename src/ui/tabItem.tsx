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
      <a className='css-4rbku5 css-18t94o4 flex-column items-center r-1loqt21 flex column flex-grow r-1h3ijdo center-justify-content r-s8bhmr  r-1qhn6m8 r-i023vh r-o7ynqc r-6416eg'>
        <div className='flex-column'>
          <div
            className={`css-901oao items-center r-18jsvk2 flex row r-37j5jr fs-15 ${
              props.isSelected ? 'fw-700' : ''
            } h-full center-justify-content line-height-20 min-width-0 r-1l7z4oj r-95jzfe relative break-word`}
          >
            <span className='css-901oao css-16my406 r-poiln3 min-width-0 break-word'>
              {props.label}
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default TabItem
