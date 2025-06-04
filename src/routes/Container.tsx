import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Container')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Container"!</div>
}
