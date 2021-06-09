import React, { PropsWithChildren } from 'react'

import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

import { URL_GITHUB } from 'src/constants'
import { LinkExternal } from 'src/components/Link/LinkExternal'
import { theme } from 'src/theme'

const Container = styled.div`
  margin: 10px 5px;
  padding: 0.65rem 1rem;
  border-radius: 3px;
`

const Flex = styled.div`
  display: flex;
  margin-bottom: 1rem;
`

const FlexRight = styled.div`
  margin-left: auto;
`

const ProposeChangesText = styled.span`
  font-size: 0.85rem;
`

const ContentMargin = styled.div`
  max-width: 65ch;
  margin: 0 auto;
  text-align: left !important;
`
export interface EditableProps {
  githubUrl: string
  text?: string
}

export function Editable({ githubUrl, text, children, ...restProps }: PropsWithChildren<EditableProps>) {
  return (
    <Container {...restProps}>
      <ContentMargin>
        <Flex>
          <FlexRight>
            <LinkExternal href={`${URL_GITHUB}/${githubUrl}`} icon={<FaGithub />} $color={theme.link.dim.color}>
              <ProposeChangesText>{text ?? 'Propose changes to this section'}</ProposeChangesText>
            </LinkExternal>
          </FlexRight>
        </Flex>
        {children}
      </ContentMargin>
    </Container>
  )
}
