import { FC } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form, FormItem, SubmitButton, Input } from 'formik-antd';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { Redirect, Link } from 'react-router-dom';

// Styles
import styles from './loginPage.module.scss';

// Components
import { Loader } from '../';

// Interfaces
import { IUser } from '../../interfaces';

// Mutations
const mutationLogin = loader('../../gql/users/mutationLogin.gql');

interface IProps {
  onLogin: (authorizedUser: IUser) => void;
  authorizedUser: IUser | null;
}

export const LoginPage: FC<IProps> = ({ onLogin, authorizedUser }) => {
  const [login, { loading, error, data }] = useMutation(mutationLogin, {
    onError: () => { },
  });

  const initialValues = {
    name: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .required('Required'),
    password: Yup
      .string()
      .required('Required'),
  });

  const handleSubmitBtnClick = (values: any) => {
    login({
      variables: values,
    });
  }

  if (authorizedUser) {
    return <Redirect to={`${process.env.PUBLIC_URL}/`} />;
  }

  if (loading) {
    return (
      <div className={styles['login-page']}>
        <Loader>
          Trying to login...
        </Loader>
      </div>
    );
  }

  if (data) {
    onLogin(data.login);
    return <Redirect to={`${process.env.PUBLIC_URL}/`} />;
  }

  return (
    <div className={styles['login-page']}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitBtnClick}
      >
        {() => (
          <Form>
            <FormItem
              label="Name"
              name="name"
            >
              <Input
                name="name"
                placeholder="Enter the name"
              />
            </FormItem>
            <FormItem
              label="Password"
              name="password"
            >
              <Input
                name="password"
                placeholder="Enter the password"
              />
            </FormItem>
            <div className={styles['btn-wrapper']}>
              <SubmitButton>
                Login
              </SubmitButton>
              <Link
                className={styles['signup-btn']}
                to={`${process.env.PUBLIC_URL}/signup`}
              >
                Signup
              </Link>
            </div>
          </Form>
        )}
      </Formik>
      {error && (
        <div className={styles['error-message']}>{error.message}</div>
      )}
    </div>
  );
}
