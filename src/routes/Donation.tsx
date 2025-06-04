import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Donation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Donation"!</div>
}
