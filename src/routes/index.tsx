import { createFileRoute, useNavigate } from '@tanstack/react-router'
import postbox from '@assets/postbox.png'
import Button from '@/components/common/button'
import React from 'react'
import { useRoomStore } from '@/store/useRoomStore'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const loggedIn = useRoomStore((state) => state.messageRoom)
  return (
    <React.Fragment>
      <img
        src={postbox}
        alt="별이삼샵"
        className="w-1/2 translate-y-10 transform animate-slide-up opacity-0"
      />
      <p className="p-4 text-xl">별이삼샵</p>
      <div className="flex flex-col gap-3">
        <Button
          onClick={() => {
            navigate({ to: '/create' })
          }}
        >
          시작하기
        </Button>
        {loggedIn && (
          <Button
            onClick={() => {
              navigate({ to: '/messages' })
            }}
          >
            내 메시지함
          </Button>
        )}
      </div>
    </React.Fragment>
  )
}
