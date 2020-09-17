import styled from "styled-components";


export const SidebarSection = styled.div`
  grid-area:sidebar;
    @media (max-width: 1024px) {
        position:fixed;
        left:0;
        top:0;
        width:260px;
        height:100vh;
        transition:all .5s;
        transform:${({isShowSidebar}) => isShowSidebar ? "translateX(0px)" : "translateX(-260px)"};
        z-index:999;
        }
        @media (max-width: 450px) {
        }
`;
