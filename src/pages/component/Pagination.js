import React from 'react';

function Pagination({ pageCount, setPage, page, changePage }) {
    
    const nextPage = () => {
       return changePage(true)
    }
    const prevPage = () => {
       return changePage(false)
    }
  return (
    <>
        <div className='pag-wrapper'>
            <div onClick={prevPage}> {"<"} </div>
            {[...Array(pageCount).keys()].map((el) => (
                <div
                    onClick={() => setPage(el + 1)}
                    key={el}
                    className={`${page === el + 1 ? "activeDiv" : ""}`}
                >
                    {el + 1}
                </div>
            ))}
            <div onClick={nextPage}> {">"} </div>
        </div>
    </>
  );
}

export default Pagination;