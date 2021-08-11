function getPagination (page, size) {
    const limit = size ? +size : 3;
    const offset = page ? (+page-1) * limit : 0;
  
    // console.log(offset, limit)
    return { limit, offset };
  };

function getPagingData (data, page, limit) {
    const { count: totalItems, rows: movies } = data;

    if (limit == null) {
      limit = totalItems    
    }

    const currentPage = page ? +page : 1;
    let totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, movies, totalPages, currentPage };
  };

module.exports = {
    getPagination,
    getPagingData
}