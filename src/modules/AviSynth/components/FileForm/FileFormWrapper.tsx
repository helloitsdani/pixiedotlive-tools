import { FunctionComponent, useMemo } from 'react'
import { Formik } from 'formik'

import FileForm from './FileForm'

const DEFAULT_VALUES = {
  ffms2: '',
  path: '',
  file: '',
  start: '',
  end: ''
}

interface FileFormWrapperProps {
  input?: AvisynthOptions
  onSubmit: (input: AvisynthOptions) => void
}

const FileFormWrapper: FunctionComponent<FileFormWrapperProps> = ({
  input,
  onSubmit
}) => {
  const initialValues = useMemo(
    () => ({
      ...DEFAULT_VALUES,
      ...input
    }),
    [input]
  )

  return (
    <Formik<AvisynthOptions>
      initialValues={initialValues}
      onSubmit={onSubmit}
      component={FileForm}
    />
  )
}

export default FileFormWrapper
