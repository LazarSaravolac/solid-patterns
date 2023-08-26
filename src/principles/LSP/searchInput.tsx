import styled from "styled-components";

interface ISearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    inputColor?:string
  }

  const InputWrapper = styled.input<{ $inputColor?: string; }>`
  color: ${props => props.$inputColor || "#000000"};
  `

export function SearchInput(props: ISearchInputProps) {
  const { value, onChange, color, ...restProps } = props;

  return (
        <InputWrapper
          type="search"
          id="default-search"
          placeholder="Search for the right one..."
          required
          value={value}
          onChange={onChange}
          {...restProps}
          />
  );
}
