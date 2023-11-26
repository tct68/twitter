import { PostList, TopMenu } from '@/ui'

export default function Home() {
  return (
    <div className=''>
      <TopMenu tabs={['Dành cho bạn', 'Đang theo dõi']} />
      <PostList items={['2', '3', '4']} />
    </div>
  )
}
