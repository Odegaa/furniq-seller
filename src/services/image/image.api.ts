import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { axiosDeleteImage, axiosGetImages, axiosUploadImage } from './image.services';

const useGetImageQuery = (id: number) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: () => axiosGetImages(id),
    queryKey: ['images', id],
  });

const useUploadImageMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value: FormData) => axiosUploadImage(id, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['images', id] });
      message.success('Успешно добавлен');
    },
    onError: (error) => {
      message.error(`${error}`);
    },
  });
};

const useDeleteImageMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (image_id: number) => axiosDeleteImage(id, image_id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['images', id] });
      message.success('Успешно удален');
    },
    onError: () => {
      message.success('Изображение не удален');
    },
  });
};

export { useDeleteImageMutation, useGetImageQuery, useUploadImageMutation };
