import React from "react";
import styled from "styled-components";

const ShowHideSidebarStyles = styled.div`
position:absolute;
top:0px;
right:0px;
`;

const ShowHideSidebar = ({ children }) => {
    return <ShowHideSidebarStyles>{children}</ShowHideSidebarStyles>
};

export default ShowHideSidebar
