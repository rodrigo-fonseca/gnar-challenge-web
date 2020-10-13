import React from 'react'
import styled from 'styled-components'

const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  margin: auto;

  ${(data: any) =>
    data &&
    data.absolute &&
    `
    position: absolute;
  `};

  &.spinner {
    width: 100px;
    z-index: 9501;
    text-align: center;
  }

  &.spinner > div {
    width: 15px;
    height: 15px;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  &.spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    background-color: grey;
  }

  &.spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    background-color: grey;
  }

  &.spinner .bounce3 {
    background-color: grey;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

const Mask = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9500;
  opacity: 0.2;
  position: fixed;
  top: 0;
  left: 0;

  ${(data: any) =>
    data &&
    data.absolute &&
    `
    position: absolute;
  `};
`

const HideMask = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9500;
  position: fixed;
  top: 0;
  left: 0;

  ${(data: any) =>
    data &&
    data.absolute &&
    `
    position: absolute;
  `};
`

interface Props {
  loading: boolean
  absolute?: boolean
  hideMask?: boolean
}

const LoadingComponent = ({ loading, absolute, hideMask }: Props) => {
  const spread = { absolute }

  return (
    <>
      {loading && (
        <>
          <Loading className="spinner" {...spread}>
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </Loading>

          {!hideMask && <Mask className="" {...spread} />}

          {hideMask && <HideMask className="" {...spread} />}
        </>
      )}
    </>
  )
}

export default React.memo(LoadingComponent)
