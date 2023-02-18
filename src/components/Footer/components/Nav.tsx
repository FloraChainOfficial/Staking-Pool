import React from 'react'
import styled from 'styled-components'
import {contractAddresses} from '../../../farm/lib/constants';
import {getEthChainInfo} from "../../../utils/getEthChainInfo";
import githubLogo from '../../../assets/img/github.png'
import {GITHUB} from '../../../constants/config';

const {
    ethscanType,
    chainId
} = getEthChainInfo();

const contractAddressesTemp = contractAddresses as {[index: string]:any};

const Nav: React.FC = () => {
    return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href={`https://${ethscanType}BscScan.com/address/${contractAddressesTemp.farm[chainId]}/contracts`}
      >
        Pool Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href={`https://bscscan.com/address/0x77F2BE773CA0887ba2b3Ef8344C8CF13C98d8ca7`}
      >
        FYT Contract
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  font-weight: 600;
  font-size: 15px;
  color: #00876e;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  img {
    height: 19px;
  }
`

export default Nav
