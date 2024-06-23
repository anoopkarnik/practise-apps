import React, { use, useEffect, useState } from 'react'

const useRefresh = () => {
    const [refresh, setRefresh] = useState(false)
  return {refresh,setRefresh}   
}

export default useRefresh