import { createFileRoute } from '@tanstack/react-router'



import Index from '../components/pages/Index'


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <Index
        title='DonaTico'
        img='perezoso.svg'
        alt='perezoso'
      ></Index>
      
  )
}
