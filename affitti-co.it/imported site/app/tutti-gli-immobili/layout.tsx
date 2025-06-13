import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affitti & Co - I professionisti della locazione',
  description: 'I professionisti della locazione. Esplora il nostro catalogo di immobili in affitto e vendita selezionati dai nostri esperti.',
}

export default function TuttiGliImmobiliLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 