import * as S from "./style";
import { IButton } from "../../interfaces/Button.interface";

const Button = ({ children, bgColor, onClick }: IButton) => {
  return <S.Botao bgColor={bgColor} onClick={onClick} >{children}</S.Botao>;
};

export default Button;