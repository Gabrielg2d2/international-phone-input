import { useState } from 'react'
import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { CircleFill } from '@styled-icons/bootstrap/CircleFill'
import { Check } from '@styled-icons/boxicons-regular/Check'

export type NotificationProps = {
  typeInfo?:
    | 'default'
    | 'filled'
    | 'success'
    | 'error'
    | 'warn'
    | 'disableInput'
  errorCharacter?: boolean
  errorNumSimbo?: boolean
  errorEmail?: boolean
}

const Notification = ({
  typeInfo = 'default',
  errorCharacter,
  errorNumSimbo,
  errorEmail
}: NotificationProps) => {
  const [open, setOpen] = useState(false)

  return (
    <S.Wrapper>
      <>
        {typeInfo !== 'error' && typeInfo !== 'warn' && (
          <>
            {typeInfo !== 'disableInput' && (
              <>
                <S.Box typeInfo={typeInfo} open={open}>
                  <S.Title>Your password must:</S.Title>
                  <S.List>
                    <S.ListRow>
                      {typeInfo === 'success' ? (
                        <>
                          <Check /> Contain at least 8 characters.
                        </>
                      ) : (
                        <>
                          <CircleFill style={{ padding: 4 }} /> Contain at least
                          8 characters.
                        </>
                      )}
                    </S.ListRow>
                    <S.ListRow>
                      {typeInfo === 'success' ? (
                        <>
                          <Check /> Contain unique, number or symbols.
                        </>
                      ) : (
                        <>
                          <CircleFill style={{ padding: 4 }} /> Contain unique,
                          number or symbols.
                        </>
                      )}
                    </S.ListRow>
                    <S.ListRow>
                      {typeInfo === 'success' ? (
                        <>
                          <Check /> Not constais your email address.
                        </>
                      ) : (
                        <>
                          <CircleFill style={{ padding: 4 }} /> Not constais
                          your email address.
                        </>
                      )}
                    </S.ListRow>
                  </S.List>
                </S.Box>
              </>
            )}

            {typeInfo === 'success' ? (
              <S.Logo
                src="/img/notification/infoSuc.svg"
                typeInfo={typeInfo}
                onClick={() => setOpen(!open)}
              />
            ) : (
              <S.Logo
                src="/img/notification/infoDefault.svg"
                typeInfo={typeInfo}
                onClick={() => setOpen(!open)}
              />
            )}
          </>
        )}

        {(typeInfo === 'error' || typeInfo === 'warn') && (
          <>
            <S.Box typeInfo={typeInfo} open={open}>
              <S.Title>Your password must:</S.Title>
              <S.List>
                <S.ListRow>
                  {errorCharacter ? (
                    <>
                      <CloseOutline style={{ color: '#fff' }} />
                      <div style={{ color: '#fff' }}>
                        Contain at least 8 characters.
                      </div>
                    </>
                  ) : (
                    <>
                      <Check /> Contain at least 8 characters.
                    </>
                  )}
                </S.ListRow>
                <S.ListRow>
                  {errorNumSimbo ? (
                    <>
                      <CloseOutline style={{ color: '#fff' }} />
                      <div style={{ color: '#fff' }}>
                        Contain unique, number or symbols.
                      </div>
                    </>
                  ) : (
                    <>
                      <Check /> Contain unique, number or symbols.
                    </>
                  )}
                </S.ListRow>
                <S.ListRow>
                  {errorEmail ? (
                    <>
                      <CloseOutline style={{ color: '#fff' }} />
                      <div style={{ color: '#fff' }}>
                        Not constais your email address.
                      </div>
                    </>
                  ) : (
                    <>
                      <Check /> Not constais your email address.
                    </>
                  )}
                </S.ListRow>
              </S.List>
            </S.Box>

            {typeInfo === 'error' ? (
              <S.Logo
                src="/img/notification/infoError.svg"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <S.Logo
                src="/img/notification/infoWarn.svg"
                onClick={() => setOpen(!open)}
              />
            )}
          </>
        )}
      </>
    </S.Wrapper>
  )
}

export default Notification
