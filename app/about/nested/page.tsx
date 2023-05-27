/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const NestedPage = (props: Props) => {
  return (
    <div>
      NestedPage: stranica koja se nalazi unutar 'about', na ruti:
      '/about/nested/'
    </div>
  )
}

export default NestedPage
