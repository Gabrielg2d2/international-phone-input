import { useState, useCallback } from 'react'
import InputMask from 'react-input-mask'
import Notification from '../Notification'

import { SearchString } from './function'

import * as S from './styles'

export type InputProps = {
  list: Array<{
    name: string
    icon: string
    mask: string
    code: string
  }>
  typeInput?:
    | 'default'
    | 'filled'
    | 'success'
    | 'warn'
    | 'error'
    | 'disableInput'
  label?: string
  errorCharacter?: boolean
  errorNumSimbo?: boolean
  errorEmail?: boolean
}

const countryDefault = {
  name: 'Brasil',
  icon: '/img/flags/brasil.png',
  code: '55',
  mask: '(99) 99999-9999'
}

const InputCustom = ({
  list = [],
  typeInput = 'default',
  label = 'Phone Number',
  errorCharacter,
  errorNumSimbo,
  errorEmail,
  ...props
}: InputProps) => {
  const [open, setOpen] = useState(false)
  const [listCurrent, setListCurrent] = useState([])
  const [flagCurrent, setFlagCurrent] = useState(countryDefault)

  const handleSearchInput = useCallback(
    (value) => {
      const response = SearchString(list, value)
      if (response?.length > 0) {
        setListCurrent(response)
      } else {
        setListCurrent([])
      }
    },
    [list]
  )

  const preferredList = listCurrent?.length > 0 ? listCurrent : list

  return (
    <>
      {open && <S.CloseBox onClick={() => setOpen(false)} />}
      <S.Wrapper {...props}>
        <S.AlignLabel>
          <S.Label typeInput={typeInput}>{label}</S.Label>
          <Notification
            typeInfo={typeInput}
            errorCharacter={errorCharacter}
            errorNumSimbo={errorNumSimbo}
            errorEmail={errorEmail}
          />
        </S.AlignLabel>
        <S.Container>
          <S.DivFlag onClick={() => setOpen(!open)} typeInput={typeInput}>
            <S.DivFlagAlign typeInput={typeInput}>
              <S.Image typeInput={typeInput} src={flagCurrent?.icon} />
              <span>+{flagCurrent?.code}</span>
            </S.DivFlagAlign>
            <S.IconArrow typeInput={typeInput} />
          </S.DivFlag>

          <InputMask
            mask={flagCurrent?.mask}
            maskChar={null}
            typeInput={typeInput}
            disableInput={typeInput === 'disableInput' ? true : false}
            disabled={typeInput === 'disableInput' ? true : false}
            name="phone"
            placeholder="123..."
          >
            {(props) => (
              <S.InputPhone
                disabled={typeInput === 'disableInput' ? true : false}
                {...props}
              />
            )}
          </InputMask>
        </S.Container>

        {typeInput !== 'disableInput' && (
          <>
            <S.Box isOpen={open}>
              <S.AlignSearch>
                <S.IconSearch />
                <S.InputSearch
                  name="search"
                  type="text"
                  onChange={(e) => handleSearchInput(e.currentTarget.value)}
                />
              </S.AlignSearch>

              {preferredList.length < 1 && (
                <S.Loading>Carregando lista...</S.Loading>
              )}

              <S.List className="style-scroll">
                {preferredList.map((item) => (
                  <S.ListBody
                    key={item?.name}
                    onClick={() => setFlagCurrent(item)}
                  >
                    <S.Image src={item?.icon} />
                    {item?.name}
                  </S.ListBody>
                ))}
              </S.List>
            </S.Box>
          </>
        )}
      </S.Wrapper>
    </>
  )
}

export default InputCustom
