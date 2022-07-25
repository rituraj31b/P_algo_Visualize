let animation = []

const merge = (auxillaryArr, l, mid, r) => {
    let i = l, j = mid + 1

    const arr = [] 

    while((i <= mid) && (j <= r)){
        animation.push([i, j, null, null])      // Compare i th and j th element  
        if(auxillaryArr[i] <= auxillaryArr[j]){
            arr.push(auxillaryArr[i++])
        } else {
            arr.push(auxillaryArr[j++])
        }
    }

    while(i <= mid){
        animation.push([i, null, null, null])
        arr.push(auxillaryArr[i++])
    }

    while(j <= r){
        animation.push([null, j, null, null])
        arr.push(auxillaryArr[j++])
    }
    
    for(i=l;i<=r;i++){
        auxillaryArr[i] = arr[i - l]
        animation.push([i, null, auxillaryArr.slice(), null]) 
    }

}

const mergeSortHelper = (auxillaryArr, l, r) => {
    if(l >= r) 
        return 
    
    const mid = Math.floor((l + r) / 2)

    mergeSortHelper(auxillaryArr, l, mid)
    mergeSortHelper(auxillaryArr, mid + 1, r) 
    
    merge(auxillaryArr, l, mid, r)
}

const mergeSort = (arr) => {
    animation = []
    const auxillaryArr = arr.slice() // copying arr array
    
    mergeSortHelper(auxillaryArr, 0, auxillaryArr.length - 1)
    
    for(let i=0;i<auxillaryArr.length;i++){
        animation.push([null, null, null, i]) // i th element will be in correct position
    }

    return animation
}

export default mergeSort