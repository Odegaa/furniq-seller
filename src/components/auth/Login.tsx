import { message } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'src/services';
import { useAuthStorageStore } from 'src/store';

// eslint-disable-next-line import/no-cycle
import { ButtonSubmit, InputPassword, InputPhone } from '..';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthStorageStore();
  // eslint-disable-next-line object-curly-newline
  const { data, mutate, isSuccess, isPending, isError } = useLoginMutation();

  const onFinish: React.FormEventHandler<HTMLFormElement> | undefined = (e: any) => {
    e.preventDefault();
    mutate({ phone: e.target[0].value.split(' ').join(''), password: e.target[1].value });
  };

  React.useEffect(() => {
    if (isSuccess) {
      signIn({ token: data.data.token });
      navigate('/products');
    }
    if (isError) {
      message.error('Телефон номер или пароль неверный!');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, signIn, navigate, data, isError]);

  return (
    <section className="min-h-screen w-full grid place-items-center">
      <div className="relative max-w-96 w-full px-2 shadow-2xl py-5 rounded-2xl flex flex-col gap-5">
        <h1 className="text-2xl text-center font-bold tracking-widest">Furni-Q</h1>
        <form onSubmit={onFinish} className="flex flex-col items-center gap-10">
          <div>
            <InputPhone />
            <InputPassword />
          </div>
          <ButtonSubmit isPending={isPending} />
        </form>
      </div>
    </section>
  );
};

export { Login };
