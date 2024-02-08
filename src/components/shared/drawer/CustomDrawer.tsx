// eslint-disable-next-line object-curly-newline
import { Button, Drawer, DrawerProps, Flex, FormInstance, Space } from 'antd';
import React from 'react';
import { useFormStorageStore } from 'src/store';

interface IProps {
  form: FormInstance<any>;
  isLoading: boolean;
}

const CustomDrawer: React.FC<DrawerProps & IProps> = (props) => {
  const { form, isLoading } = props;
  // eslint-disable-next-line object-curly-newline
  const { drawer, paramsForm, setParamsItem, toggleDrawer } = useFormStorageStore();

  const onClose = () => {
    if (drawer) toggleDrawer();
    if (paramsForm) {
      form.resetFields();
      setParamsItem(null);
    }
  };

  React.useEffect(() => {
    if (!isLoading) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, isLoading]);

  return (
    <Drawer
      open={drawer}
      onClose={onClose}
      title={paramsForm ? 'Изменить' : 'Добавить'}
      footer={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <Flex>
          <Space>
            <Button className="border-slate-800 " onClick={onClose}>
              Отмена
            </Button>
            <Button type="primary" onClick={form.submit} loading={isLoading}>
              Сохранить
            </Button>
          </Space>
        </Flex>
      }
      {...props}
    />
  );
};

export { CustomDrawer };
