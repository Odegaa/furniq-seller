import { Form, Spin } from 'antd';
import React from 'react';
import { useUploadImageMutation } from 'src/services/image/image.api';

const ImageForm: React.FC<{ id: number | undefined }> = ({ id }) => {
  const [files, setFiles] = React.useState<File[] | undefined>();
  const { mutate: uploadImage, isPending } = useUploadImageMutation(Number(id));

  const onFinish = () => {
    if (files) {
      const formData = new FormData();
      formData.append('images', files);
      uploadImage(formData);
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement & {
      file: FileList[];
    };
    if (target.files) {
      setFiles(target.files);
    }
  };

  return (
    <Form
      name="image"
      labelCol={{ span: 20 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
      autoComplete="off"
      encType="multiple/form-data"
    >
      <Form.Item>
        <input
          multiple
          type="file"
          onChange={handleChange}
          className="file:bg-white file:rounded-lg file:py-2 file:px-5 file:cursor-pointer file:transition-all file:hover:bg-slate-600 file:hover:text-white file:hover:border-slate-600"
          accept="image/jpeg, image/jpg, image/png, image/heic, image/svg"
        />
      </Form.Item>
      <Form.Item>
        <button className="py-2 px-5 text-white bg-green-500 rounded-md transition-colors hover:bg-green-600">
          {isPending ? <Spin /> : 'Сохранить'}
        </button>
      </Form.Item>
    </Form>
  );
};

export { ImageForm };
