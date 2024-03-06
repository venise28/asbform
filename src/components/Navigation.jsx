/*-------------------------------------------------------------------
|  🐼 React FC Navigation
|
|  🐯 Purpose: TOP NAVIGATION BAR
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import React from 'react'

export const Navigation = () => {
  return (
    <div className="header_top border-b">
      <nav className="container flex justify-between items-center">
        <div className="header_title font-semibold">Alalay Sa Buhay Application Form</div>
        <div className="flex items-center gap-4 text-lg"></div>
      </nav>
    </div>
  )
}
