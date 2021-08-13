import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/icons';

import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none; /** firefox */
  ::webkit-scrollbar {
    display: none; /** chrome */
  }
`;
export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);

  position: relative;
`;
export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 3.75px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;
  position: absolute;
  background-image: linear-gradient(red 40%, yellow 100%);

  bottom: calc(max(45px, min(135px, 22vw)) * -1 / 2);
  /** valor utilizado no curso */
  /* bottom: max(-60px, -10vw); */
  left: 15px;
`;
export const ProfileData = styled.div`
  /** 7px da borda do avatar */
  padding: min(calc(10vw + 7px), 67px) 16px 0 16px;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 15px;
  }
  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }
  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    > li {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: var(--gray);

      > svg {
        fill: var(--gray);
      }

      & :first-child {
        margin-right: 5px;
      }
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--gray);
`;
export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`;
