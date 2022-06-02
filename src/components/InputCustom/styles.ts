import styled, { css } from 'styled-components'

import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow'
import { Search } from '@styled-icons/heroicons-solid/Search'

type WrapperProps = {
  typeInput?:
    | 'default'
    | 'filled'
    | 'success'
    | 'warn'
    | 'error'
    | 'disableInput'
}

const wrapperModifiers = {
  default: () => css`
    border: 0.2rem solid #4995b5;

    :hover {
      border: 0.2rem solid #a9def5;
      box-shadow: 0px 0px 8px #00aeff;
    }
  `,

  filled: () => css`
    border: 0.2rem solid #4995b5;
  `,

  warn: () => css`
    border: 0.2rem solid #ffc44d;
  `,

  error: () => css`
    border: 0.2rem solid #ee4d4d;
  `,

  success: () => css`
    border: 0.2rem solid #4ddbc4;
  `,

  disableInput: () => css`
    border: 0.2rem solid #00364d;
  `
}

export const Wrapper = styled.div`
  padding: 3rem;

  .style-scroll {
    overflow: auto;

    ::-webkit-scrollbar {
      background-color: #173e4f;
      border-radius: 0.4rem;
      opacity: 0.32;
      width: 0.8rem;
    }

    ::-webkit-scrollbar-track {
      background-color: #173e4f;
      border-radius: 0.4rem;
      opacity: 0.32;
      width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #4995b5;
      border-radius: 0.4rem;
      opacity: 0.48;
    }

    ::-webkit-scrollbar-button {
      display: none;
    }
  }
`
export const Label = styled.label<WrapperProps>`
  font-size: 1.2rem;
  color: #4995b5;
  opacity: ${({ typeInput }) => typeInput === 'disableInput' && 0.4};
`

export const AlignLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  max-width: 27rem;
  margin-left: 0.5rem;
  margin-bottom: 0.3rem;
`

export const InputPhone = styled.input<WrapperProps>`
  ${({ typeInput }) => css`
    width: 28rem;
    height: 4.8rem;

    background: none;
    border-radius: 0.8rem;

    color: #fff;
    font-size: 1.6rem;

    padding-left: 13rem;

    ::placeholder {
      text-align: start;
      color: #004b65;
      font-size: 1.6rem;
    }

    :focus {
      outline: none;
      border: 0.2rem solid #a9def5;
    }

    ${!!typeInput && wrapperModifiers[typeInput]}
  `}
`

export const Container = styled.div`
  position: relative;
  max-width: 28.4rem;
`

export const DivFlagAlign = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  opacity: ${({ typeInput }) => typeInput === 'disableInput' && 0.4};

  > span {
    color: #fff;
    font-size: 1.6rem;
  }
`

export const DivFlag = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 11.4rem;
  height: 3.6rem;

  border-right: 0.2rem solid #004b65;
  padding: 1.6rem 1.4rem;

  position: absolute;
  top: 0.6rem;
  left: 0.4rem;

  ${({ typeInput }) =>
    typeInput !== 'disableInput' &&
    css`
      cursor: pointer;
      opacity: 1;
    `}
`

export const IconArrow = styled(DownArrow)<WrapperProps>`
  width: 1.6rem;
  height: 0.8rem;
  color: #89c3de;
  opacity: ${({ typeInput }) => typeInput === 'disableInput' && 0.4};
`

type ImageProps = {
  typeInput?: string
}

export const Image = styled.img<ImageProps>`
  ${({ typeInput }) => css`
    width: 2.4rem;
    height: 1.6rem;
    margin-right: 0.8rem;

    opacity: ${typeInput === 'disableInput' && 0.4};
  `}
`

type BoxProps = {
  isOpen: boolean
}

export const Box = styled.div<BoxProps>`
  ${({ isOpen }) => css`
    position: absolute;

    width: 28rem;
    height: 17.6rem;
    padding: 0 0 0.8rem;

    background: #00151f;
    border: 0.2rem solid #a9def5;
    border-radius: 0.8rem;
    box-shadow: 0px 8px 24px #00aeffa3;

    pointer-events: ${isOpen ? 'all' : 'none'};
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
  `}
`
export const CloseBox = styled.div`
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const AlignSearch = styled.div`
  width: 100%;
  height: 4rem;

  position: relative;
`
export const IconSearch = styled(Search)`
  width: 1.6rem;
  height: 1.6rem;

  color: #89c3de;

  position: absolute;
  top: 1rem;
  left: 2.2rem;
`

export const InputSearch = styled.input`
  width: 26rem;
  height: 4rem;
  background: none;
  border: none;
  border-bottom: 0.2rem solid #4995b5;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0 0.8rem;

  padding-left: 4.4rem;

  :focus {
    outline: none;
  }
`
export const Loading = styled.p`
  color: #fff;
  font-size: 1.6rem;
  margin-left: 1.6rem;
  margin-top: 0.8rem;
`

export const List = styled.ul`
  margin-top: 0.8rem;
  margin-right: 0.8rem;
  z-index: 10;

  height: 11.6rem;
  list-style: none;

  position: absolute;
  left: 0;
  right: 0;
`

export const ListBody = styled.li`
  display: flex;
  align-items: center;

  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  height: 4rem;
  padding: 0;

  cursor: pointer;

  :hover {
    background: #89c3de;
  }

  :active {
    background: #0e7291;
  }

  ${Image} {
    margin-right: 1.2rem;
    margin-left: 1.6rem;
  }
`
