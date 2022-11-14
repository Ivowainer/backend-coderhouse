import React from 'react'

interface ItemNavInterface {
    icon: React.ReactNode;
    editable: boolean;
}

const ItemNav = ({ icon, editable }: ItemNavInterface) => {
  return (
    <div className={'border border-gray-500 px-2 py-1 rounded-md'}>
        {icon}
    </div>
  )
}

export default ItemNav