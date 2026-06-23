import { useMutation } from '@tanstack/react-query'
import { BaseMutationOptions } from '@apis/index.type'
// schemas
import { CalculateBmiFormValues } from '@schemas'
// services
import { bmiService, MutationRequest } from '@services'

export const useCreateBmi = (options?: BaseMutationOptions) => {
  const handleCreateBmi = async (body: MutationRequest<CalculateBmiFormValues>) => {
    return await bmiService.create(body)
  }

  const mutation = useMutation({
    ...options,
    mutationFn: handleCreateBmi,
  })

  return mutation
}
