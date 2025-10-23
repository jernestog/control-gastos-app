type InputErrorProp = {
    text : string
}

export const InputErrorMessage = ({text}: InputErrorProp) => {
  return (
    <span style={{
        color : 'red',
        fontSize : 'small'
    }}>
       { text }
    </span>
  )
}


