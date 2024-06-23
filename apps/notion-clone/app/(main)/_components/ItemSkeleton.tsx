import React from 'react'
import classNames from 'classnames'
import {Skeleton} from '@repo/ui/components/skeleton'

const ItemSkeleton = ({level=0}: {level: number}) => {
  return (
    <div className={classNames('flex gap-x-2 py-3',
        {[`pl-${level*2+ 2}`]:true },
    )}>
        <Skeleton className='w-4 h-4 '/>
        <Skeleton className='w-[30%] h-4 '/>
    </div>
  )
}

export default ItemSkeleton