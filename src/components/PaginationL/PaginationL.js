import React, { useState } from "react";
import ReactPaginate from "react-paginate";

//Components
import Items from "../Items/Items";
import GridLayout from "../GridLayout/GridLayout";

//Styles
import { Wrapper, Content } from "./PaginationL.style";
export default function PaginationL({pagecount, pagechange}){
    return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pagecount}
      onPageChange={pagechange}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-link"}
      nextClassName={"page-link"}
      activeClassName={"active"}
      forcePage={window.sessionStorage.getItem("currentPage")}
    />)
}