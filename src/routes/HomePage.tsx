import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/HomePage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/HomePage"!</div>
}
