import { useEffect } from 'react'
import { RecoilState, useRecoilValue } from 'recoil'

export type RecoilObserverProps = {
  node: RecoilState<unknown>
  onChange: (e: unknown) => void
}

export const RecoilObserver = ({ node, onChange }: RecoilObserverProps) => {
  const value = useRecoilValue(node)
  useEffect(() => onChange(value), [onChange, value])
  return null
}
