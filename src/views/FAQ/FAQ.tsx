import React from 'react'
import styled from 'styled-components'

import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'

const StyledPageHeaderX = styled.div`
  width:100%;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #00876e;
`

const FAQ: React.FC = () => {
  return (
    <Page>
      <StyledPageHeaderX>
		Frequently Asked Questions
	  </StyledPageHeaderX>
      <Container>
        <Card>
          <CardContent>
            <p>
              Here you will find the most common questions and their answers below. If you can't find what you're looking for, then feel free to ask in our social groups.
            </p>
			
            <StyledHeading>
              Is there any lock?
            </StyledHeading>
            <StyledList>
              <StyledListItem>
                There is no lock for staking. It is flexible.
              </StyledListItem>
            </StyledList>

			<StyledHeading>
              FYT on which blockchains?
            </StyledHeading>
            <StyledList>
              <StyledListItem>
                Currently BSC.
              </StyledListItem>
            </StyledList>

			<StyledHeading>
              What is the contract address of FYT?
            </StyledHeading>
			<p>
              0x77F2BE773CA0887ba2b3Ef8344C8CF13C98d8ca7
			</p>
			
            <StyledHeading>Official Links</StyledHeading>
            <StyledList>
              <StyledListItem>
                <a href="https://florachain.org/" target="_blank">
                  Website
                </a>
			  </StyledListItem>
			  <StyledListItem>
				<a href="https://pancakeswap.finance/swap?outputCurrency=0x77F2BE773CA0887ba2b3Ef8344C8CF13C98d8ca7" target="_blank">
                  PancakeSwap
                </a>
			  </StyledListItem>
			  <StyledListItem>
				<a href="https://bilaxy.com/trade/FYT_BUSD" target="_blank">
                  Bilaxy
                </a>
			  </StyledListItem>
			  <StyledListItem>
				<a href="https://florachain.org/#metamask" target="_blank">
                  Metamask
                </a>
			  </StyledListItem>
			  <StyledListItem>
				<a href="https://twitter.com/FloraChain" target="_blank">
                  Twitter
                </a>
			  </StyledListItem>
			  <StyledListItem>
				<a href="https://t.me/FloraChain_Chat" target="_blank">
                  Telegram
                </a>
			  </StyledListItem>
			  <StyledListItem>
				<a href="https://discord.gg/58DS5WCunz" target="_blank">
                  Discord
                </a>
			   </StyledListItem>
            </StyledList>
          </CardContent>
        </Card>
      </Container>
    </Page>
  )
}

const StyledHeading = styled.h2`
  margin-bottom: 0;
  margin-top: ${(props) => props.theme.spacing[5]}px;
`
const StyledList = styled.ul`
  margin: 0;
  padding: 0 ${(props) => props.theme.spacing[6]}px;
`
const StyledListItem = styled.li`
  margin-top: ${(props) => props.theme.spacing[3]}px;
`

const StyledText = styled.p`
  font-style: italic;
  line-height: 2;
  text-indent: ${(props) => props.theme.spacing[4]}px;
`

export default FAQ
