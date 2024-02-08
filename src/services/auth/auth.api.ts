import { message } from 'antd';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { axiosLogin } from './auth.services';
import { TLoginRequest } from './auth.types';

const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: TLoginRequest) => axiosLogin(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['login'] });
      message.success('Успешно!');
    },
  });
};

export { useLoginMutation };
