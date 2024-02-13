import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { CustomForm, CustomModal } from 'src/components';
import { useAnswerReviewMutation } from 'src/services';
import { TReviewAnswerValue } from 'src/services/reviews/review.types';
import { useFormStorageStore } from 'src/store';

const ReviewForm: React.FC<{ id: number | undefined }> = ({ id }) => {
  const [form] = Form.useForm();
  const { mutate: answerReview, isPending } = useAnswerReviewMutation(Number(id));
  const { paramsForm, toggleDrawer } = useFormStorageStore();

  const onFinish = (value: TReviewAnswerValue) => {
    if (value) {
      answerReview({ id: paramsForm.id, answer: value.answer });
    }
    toggleDrawer();
    form.resetFields();
  };

  React.useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({
        ...paramsForm,
        user: paramsForm?.user.name,
      });
    }
  }, [paramsForm, form]);

  return (
    <CustomModal form={form} isLoading={isPending}>
      <CustomForm form={form} onFinish={onFinish}>
        <Form.Item label="Пользователь" name="user" className="pointer-events-none">
          <Input className="w-full bg-white" disabled />
        </Form.Item>
        <Form.Item label="Комментарии" name="body" className="pointer-events-none">
          <TextArea className="w-full bg-white" disabled />
        </Form.Item>
        <Form.Item label="Ответ" name="answer">
          <Input className="w-full" />
        </Form.Item>
      </CustomForm>
    </CustomModal>
  );
};

export { ReviewForm };
