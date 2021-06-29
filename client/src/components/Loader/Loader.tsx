import { FC } from 'react';
import { Spin } from 'antd';

interface IProps {
  children: string;
}

export const Loader: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Spin size="large" />
      <div>{children}</div>
    </div>
  );
}
