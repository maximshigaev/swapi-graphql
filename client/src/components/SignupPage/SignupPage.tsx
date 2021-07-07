import { FC } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form, FormItem, SubmitButton, Input } from 'formik-antd';
import { loader } from 'graphql.macro';
import { useMutation } from '@apollo/react-hooks';
import { Redirect, Link } from 'react-router-dom';

// Styles
import styles from './signupPage.module.scss';

// Components
import { Loader } from '../';

// Interfaces
import { IUser } from '../../interfaces';

// Mutations
const mutationSignup = loader('../../gql/users/mutationSignup.gql');

interface IProps {
  onSignup: (authorizedUser: IUser) => void;
  authorizedUser: IUser | null;
}

export const SignupPage: FC<IProps> = ({ authorizedUser, onSignup }) => {
  const [signup, { loading, error, data }] = useMutation(mutationSignup, {
    onError: () => { },
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .required('Required'),
    email: Yup
      .string()
      .required('Required'),
    password: Yup
      .string()
      .required('Required'),
  });

  const handleSubmitBtnClick = (values: any) => {
    signup({
      variables: values,
    });
  }

  if (authorizedUser) {
    return <Redirect to={`${process.env.PUBLIC_URL}/`} />;
  }

  if (loading) {
    return (
      <div className={styles['signup-page']}>
        <Loader>
          Trying to signup...
        </Loader>
      </div>
    );
  }

  if (data) {
    onSignup(data.signUp);
    return <Redirect to={`${process.env.PUBLIC_URL}/`} />;
  }

  return (
    <div className={styles['signup-page']}>
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
              label="Email"
              name="email"
            >
              <Input
                name="email"
                placeholder="Enter the email"
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
                Signup
              </SubmitButton>
              <Link
                className={styles['login-btn']}
                to={`${process.env.PUBLIC_URL}/login`}
              >
                Login
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
