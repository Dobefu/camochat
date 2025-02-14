import React from 'react'

export type Props = {
  children: React.ReactNode
}
export default function Chrome({ children }: Props) {
  return (
    <div className="h-screen p-2 [-webkit-app-region:drag]">
      <div className="h-full overflow-auto rounded-md bg-white [-webkit-app-region:none]">
        {children}
      </div>
    </div>
  )
}
