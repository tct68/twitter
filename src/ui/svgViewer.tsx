import * as React from 'react'

type SvgViewerProps = {
  name: string
}
const SvgViewer = (props: SvgViewerProps) => {
  const icon = names[props.name]
  return icon
}
export default SvgViewer

const close = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={24}
    height={24}
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path
      fill='currentColor'
      d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z'
    />
  </svg>
)

const names: any = {
  close: close,
}
