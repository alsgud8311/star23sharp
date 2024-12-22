import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/messages/$messageId/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { messageId } = Route.useParams()
  const navigate = useNavigate()
  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex w-full items-center justify-center border-b-2 border-black p-3 text-xl">
        메시지
      </header>
      <div className="flex flex-grow flex-col gap-2 p-4">
        <div className="h-40 w-full overflow-y-scroll break-all border-2 border-black p-2 text-xl min-[380px]:h-80">
          wqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqwwqrqwrqwrqwrwqrqwrqw
        </div>
        <div>
          <p>보낸사람</p>
          <p>발신자표시제한</p>
        </div>
        <div>
          <p>보낸시간</p>
          <p>24/12/24 12:22</p>
        </div>
      </div>
      <footer className="flex h-10 w-full items-center justify-between border-y-2 border-black text-xl">
        <button className="w-1/3" onClick={() => navigate({ to: '/' })}>
          홈
        </button>
        <button className="w-1/3">확인</button>
        <button className="w-1/3" onClick={() => navigate({ to: '..' })}>
          뒤로
        </button>
      </footer>
    </div>
  )
}
