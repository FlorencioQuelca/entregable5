import React from 'react'

const Pagination = ({page,pagesLength, setPage}) => {

    const pagesPerBlock=8
    const currentBlock=Math.ceil(page/pagesPerBlock)
    const blockLength=Math.ceil(pagesLength/pagesPerBlock)
    const arrayPages=[]
    const initialPage=(currentBlock-1)*pagesPerBlock+1
    const limitPage= blockLength ===currentBlock? pagesLength : currentBlock * pagesPerBlock;
    for(let i=initialPage;i<limitPage;i++){
         arrayPages.push(i)
    }
    const handlePrev=()=>{
        setPage(page-1)
    }
    const handleNext=()=>{
        setPage(page+1)
    }
    const handlePage=(e)=>{
        setPage(e)
    }

  return (
       <div>   
           <div onClick={handlePrev}>&#60;</div>
           <ul>
            {
                arrayPages.map(e=>(
                    <li key={e}
                      onClick={()=>handlePage(e)}
                    >{e}</li>
                ))
            }
           </ul>
           <div onClick={handleNext}>&#62;</div>
        
           <div  >Pagination</div>
       </div>
  )
}

export default Pagination