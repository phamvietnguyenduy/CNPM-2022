import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FAKEDATA } from "./SidebarData";

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #f1f1f1;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #f1f1f1;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
  &:hover {
    background: #f1f1f1;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export function Submenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div>
        <SidebarLink
          className="category"
          to={"?id=" + item.category_id}
          onClick={item.category_id && showSubnav}
        >
          {item.name}
        </SidebarLink>
      </div>
      {console.log(subnav)}
      {subnav &&
        FAKEDATA.map((data) => {
          return (
            <DropdownLink to="/" key={data.id}>
              <SidebarLabel>{data.name}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
}
