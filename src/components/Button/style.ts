import { ButtonProps } from "../../interfaces/Button.interface"
import styled, { css } from "styled-components"
import { colors } from "../../styles/global"

const colorVariations = {
  default: css`
    background-color: ${colors.yellow};;
  `,
  add: css`
    background-color: ${colors.primary};
    outline: 0.2rem outset ${colors.primary};
  `,
  edit: css`
    background-color: ${colors.success};
    outline: 0.2rem outset ${colors.success};
  `,
  remove: css`
    background-color: ${colors.danger};
    outline: 0.2rem outset ${colors.danger};
  `
}

export const Botao = styled.button<ButtonProps>`
  color: ${colors.black};
  font-size: 12px;
  font-weight: bold;
  padding: 0.8rem;
  border: 0;
  border-radius: 0.5rem;
  width: 5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  svg {
    width: 1rem;
    height: 1rem;
  }
  ${(props) => colorVariations[props.bgColor || "default"]}
`