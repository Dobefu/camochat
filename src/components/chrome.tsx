import React from 'react'

export type Props = Readonly<{
  children: React.ReactNode
}>

export default function Chrome({ children }: Props) {
  return (
    <div className="h-screen p-2 [-webkit-app-region:drag]">
      <div className="h-full overflow-auto rounded-md bg-stone-100 p-2 pt-10 [-webkit-app-region:none] dark:bg-stone-900">
        {children}
      </div>
    </div>
  )
}
