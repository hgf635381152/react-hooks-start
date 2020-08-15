import Link from 'next/link'

export default () => (
  <>
    <div>JSPang-a  page</div>
    <Link href="/">
      <a>返回首页</a> 
      {/* 不能有兄弟节点 */}
    </Link>
  </>
)