export type MenuItemProps = {
  name: string
  icon: any
  isSelected?: boolean
  onChanged?: Function
}
const MenuItem = (props: MenuItemProps) => {
  return (
    <a
      onClick={() => {
        props.onChanged!(props.name)
      }}
      className='css-4rbku5 css-18t94o4 flex-column align-start r-1loqt21 flex column flex-grow  r-oyd9sg w-full'
    >
      <div className='flex-column items-center rounded-element row center-justify-content r-xyw6el r-o7ynqc r-6416eg menu-item'>
        <div className='flex-column'>{props.icon}</div>
        <div className='name css-901oao css-1hf3ou5 r-18jsvk2 r-37j5jr r-adyw6z r-16dba41 r-135wba7 r-1joea0r r-88pszg min-width-0 break-word'>
          <span
            className='css-901oao css-16my406 r-poiln3 min-width-0 break-word'
            style={{
              color: props.isSelected ? 'black' : 'unset',
              fontWeight: props.isSelected ? '700' : 'unset',
            }}
          >
            {props.name}
          </span>
        </div>
      </div>
    </a>
  )
}

export default MenuItem
