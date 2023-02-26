import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";
import media from "styled-media-query";

import ButtonLeft from './ButtonLeft';
import ButtonRight from './ButtonRight';
import ButtonDelete from './ButtonDelete';

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan("small")`
    justify-content: center;
  `}
`;

const DesktopOrTablet = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isDesktop || isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const ContainersButtons = ({ status, item, socket }) => {
  return (
    <>
      <DesktopOrTablet>
        <ContainerButtons>
          <ButtonLeft status={status} item={item} socket={socket} />
          <ButtonDelete item={item} socket={socket} />
          <ButtonRight status={status} item={item} socket={socket} />
        </ContainerButtons>
      </DesktopOrTablet>

      <Mobile>
        <ContainerButtons>
          <ButtonLeft status={status} item={item} socket={socket} />
          <ButtonRight status={status} item={item} socket={socket} />
        </ContainerButtons>
        <ContainerButtons>
          <ButtonDelete item={item} socket={socket} />
        </ContainerButtons>
      </Mobile>
    </>
  )
}

export default memo(ContainersButtons);
