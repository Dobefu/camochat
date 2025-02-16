import React from 'react'

export type Props = Readonly<{
  children: React.ReactNode
}>

export default function Chrome({ children }: Props) {
  return (
    <div className="h-screen max-h-screen p-2 pt-12 [-webkit-app-region:drag]">
      {children}
    </div>
  )
}
