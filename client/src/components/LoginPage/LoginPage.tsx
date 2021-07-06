import { FC } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form, FormItem, SubmitButton, Input } from 'formik-antd';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

// Styles
import styles from './loginPage.module.scss';

// Components
import { Loader } from '../';

// Mutations
const mutationLogin = loader('../../gql/users/mutationLogin.gql');

interface IProps {
  onSuccess: (isAuthorized: boolean) => void;
  isAuthorized: boolean;
}

export const LoginPage: FC<IProps> = ({ onSuccess, isAuthorized }) => {
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

  if (isAuthorized) {
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
    onSuccess(true);
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
            <SubmitButton>
              Login
            </SubmitButton>
          </Form>
        )}
      </Formik>
      {error && (
        <div className={styles['error-message']}>{error.message}</div>
      )}
    </div>
  );
}
