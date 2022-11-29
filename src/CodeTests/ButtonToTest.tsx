import * as React from 'react'

export function giveMeFive(): number {
  return 5
}

interface ButtonProps  {
  buttonText: string
}

const ButtonToTest : React.FC<ButtonProps> = (props) => (
  <button onClick={e => console.log(giveMeFive())}>{props.buttonText}</button>
)
export default ButtonToTest;
