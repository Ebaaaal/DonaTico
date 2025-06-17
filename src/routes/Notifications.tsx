import { createFileRoute } from '@tanstack/react-router'

import Notifications from '../components/pages/Notifications'


export const Route = createFileRoute('/Notifications')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Notifications
      prioritys={['High', 'Low', 'Medium', 'High', 'Low', 'Medium']}
      notification='Notifications'
      titles={['Donation sent', 'Donation state', 'Donation increased', 'Donation sent', 'Donation state', 'Donation increased']}
      texts={['Lorem ipsum dolor sit amet consectetur. Nunc imperdiet ornare aliquet enim.Lorem ipsum dolor sit amet consectetur. Nunc imperdiet ornare aliquet enim.Lorem ipsum dolor sit amet consectetur. Nunc imperdiet ornare aliquet enim.Lorem ipsum dolor sit amet consectetur. Nunc imperdiet ornare aliquet enim.', 'Lorem ipsum dolor sit amet consectetur. Nunc imperdiet ornare aliquet enim.', 'Text 3','Lorem ipsum dolor sit amet consectetur. Nunc imperdiet ornare aliquet enim.', 'Lorem ipsum dolor sit amet consectetur. Nunc imperdiet ornare aliquet enim.', 'Text 3']}
      dates={['23/03/2023', '21/09/2009', '10/10/2010','23/03/2023', '21/09/2009', '10/10/2010']}
      images={['bell.svg', 'bell.svg', 'bell.svg', 'bell.svg', 'bell.svg', 'bell.svg']}
      alts={['bell', 'bell', 'bell', 'bell', 'bell', 'bell']}

    />
  )
}
