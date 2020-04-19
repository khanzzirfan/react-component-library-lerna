import React from 'react'
import { get } from 'lodash'
import styled from 'styled-components'
import { Button } from '@natterstefan/ns-base-js'
import { Label } from '@natterstefan/ns-label'

export const StyledCard = styled.div`
  border: 5px solid ${(props) => get(props, 'theme.Card.borderColor') || '#000'};
  border-radius: 10px;
  padding: 20px;
  text-align: center;

  h1 {
    color: ${(props) => get(props, 'theme.colors.primary') || 'inherit'};
    margin-bottom: 25px;
  }

  button {
    margin-top: 20px;
  }
`

export const FieldText = ({ children, onClick, buttonText, title }) => (
  <StyledCard>
    <h1>{title}</h1>
    <p>FieldText-001</p>
    <p>{children}</p>
    <Button onClick={onClick}>{buttonText}</Button>
  </StyledCard>
)

export default FieldText
