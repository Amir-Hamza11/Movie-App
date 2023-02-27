// import React, { useEffect, useState } from 'react'
// import MainPageLayout from '../components/MainPageLayout'
// import { ApiGet } from '../components/misc/config'
// import { useSavedShows } from '../components/misc/custom-hooks'
// import ShowGrid from '../components/ShowGrid'

// const Saved = () => {

//     const [list] = useSavedShows()
//     const [savedList, setSavedList] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {

//         if (list && list.length > 0) {
//             const promise = list.map((ids) => {
//                 return ApiGet(ids)
//             })

//             Promise.all(promise)
//                 .then(r => ({ results: r.map(show => show) }))
//                 .then(r => {
//                     setSavedList(r)
//                     setIsLoading(false)
//                 })
//                 .catch((err) => {
//                     setError(err.message)
//                     setIsLoading(false)
//                 })
//         }
//     }, [list])


//     // console.log(savedList);

//     return (
//         <MainPageLayout>
//             {isLoading && <div>Shows are still loading...</div>}
//             {error && <div>{`Error Occured: ${error}`}</div>}
//             {!isLoading && !savedList && <div>No shows were added </div>}
//             {!isLoading && !error && savedList && <ShowGrid data={savedList} />}
//         </MainPageLayout>
//     )
// }

// export default Saved