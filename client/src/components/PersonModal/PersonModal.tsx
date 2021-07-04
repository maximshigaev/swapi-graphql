import { FC } from 'react';
import { Formik } from 'formik';
import { Form, FormItem, SubmitButton, Input } from 'formik-antd';
import { Row, Col, Empty } from 'antd';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { CloseCircleOutlined } from '@ant-design/icons';

// Components
import { Loader } from '../';

// Styles
import styles from './personModal.module.scss';

// Interfaces
import { IPerson } from '../../interfaces';

// Client
import { client } from '../../init/client';

// Mutations
const mutationAddPerson = loader('../../gql/people/mutationAddPerson.gql');
const mutationUpdatePerson = loader('../../gql/people/mutationUpdatePerson.gql');

interface IProps {
  onCloseBtnClick: () => void;
  pageNumber: number;
  person?: IPerson;
}

export const PersonModal: FC<IProps> = ({ onCloseBtnClick: handleCloseBtnClick, pageNumber, person }) => {
  const { name, gender, birthYear, eyeColor, hairColor, height, skinColor } = person || {};

  const initialValues = person
    ? {
      name,
      gender,
      birthYear,
      eyeColor,
      hairColor,
      height,
      skinColor,
    }
    : {
      name: '',
      gender: '',
      birthYear: '',
      eyeColor: '',
      hairColor: '',
      height: '',
      skinColor: '',
    };

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .required('Required'),
    gender: Yup
      .string()
      .required('Required'),
    birthYear: Yup
      .string()
      .required('Required'),
    eyeColor: Yup
      .string()
      .required('Required'),
    hairColor: Yup
      .string()
      .required('Required'),
    height: Yup
      .number()
      .required('Required'),
    skinColor: Yup
      .string()
      .required('Required'),
  });

  const [
    addPerson,
    {
      loading: isPersonAdding,
      error: addPersonError,
    },
  ] = useMutation(mutationAddPerson, {
    onCompleted: handleCloseBtnClick,
  });

  const [
    updatePerson,
    {
      loading: isPersonUpdating,
      error: updatePersonError,
    },
  ] = useMutation(mutationUpdatePerson, {
    onCompleted: handleCloseBtnClick,
  });

  const handleSubmitBtnClick = (values: any) => {
    if (person) {
      updatePerson({
        variables: {
          id: person.id,
          person: values,
          pageNumber,
        }
      });
    } else {
      addPerson({
        variables: {
          person: values,
          pageNumber,
        },
      });
    }

    client.clearStore();
  }

  if (isPersonAdding || isPersonUpdating) {
    return (
      <Loader>
        Adding the person...
      </Loader>
    );
  }

  if (addPersonError || updatePersonError) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
        There was an error during the person {person ? 'Editing' : 'Adding'}
      </Empty>
    );
  }

  return (
    <div className={styles['person-modal']}>
      <div className={styles['button-wrapper']}>
        <CloseCircleOutlined
          className={styles['close-btn']}
          onClick={handleCloseBtnClick}
        />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitBtnClick}
      >
        {() => (
          <Form>
            <Row gutter={20}>
              <Col lg={12}>
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
                  label="Gender"
                  name="gender"
                >
                  <Input
                    name="gender"
                    placeholder="Enter the gender"
                  />
                </FormItem>
                <FormItem
                  label="Birth year"
                  name="birthYear"
                >
                  <Input
                    name="birthYear"
                    placeholder="Enter the birth year"
                  />
                </FormItem>
                <FormItem
                  label="Eye color"
                  name="eyeColor"
                >
                  <Input
                    name="eyeColor"
                    placeholder="Enter the eye color"
                  />
                </FormItem>
              </Col>
              <Col lg={12}>
                <FormItem
                  label="Hair color"
                  name="hairColor"
                >
                  <Input
                    name="hairColor"
                    placeholder="Enter the hair color"
                  />
                </FormItem>
                <FormItem
                  label="Height"
                  name="height"
                >
                  <Input
                    name="height"
                    type="number"
                    placeholder="Enter the height"
                  />
                </FormItem>
                <FormItem
                  label="Skin color"
                  name="skinColor"
                >
                  <Input
                    name="skinColor"
                    placeholder="Enter the skin color"
                  />
                </FormItem>
              </Col>
            </Row>
            <SubmitButton>
              {person ? 'Edit the person' : 'Add the person'}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}
