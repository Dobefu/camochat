import React from 'react'

export type Props = Readonly<{
  children: React.ReactNode
}>

export default function Layout({ children }: Props) {
  return (
    <div className="flex h-full max-h-full flex-col gap-2 rounded-md bg-stone-100 p-2 [-webkit-app-region:none] dark:bg-stone-900">
      {children}
    </div>
  )
}
