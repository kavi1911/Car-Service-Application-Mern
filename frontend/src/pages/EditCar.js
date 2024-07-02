import React, {useEffect, useState}  from 'react'
import DefaultLayout from './../components/DefaultLayout';
import { Row, Col , Form, Input} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { editCarAction } from '../redux/actions/carAction';

const EditCar = ({match,location}) => {
  const dispatch = useDispatch();
  const [car, setCar] = useState();

  useEffect(()=>{
      setCar(location.state.car)
  }, [match.params.carId]);

  const onFinish = (values) =>{
    values._id = car._id;
    dispatch(editCarAction(values))
  }
  return (
    <DefaultLayout>
      <Row justify='center' className="mt-5">
        <Col lg={5} xs={20}>
          <h5><Link to="/admin">Go to Admin Page</Link></h5>
          {car && (<Form initialValues = {car} className="bs1 p-3 mb-5" layout='vertical' onFinish={onFinish}>
          <h3 className="mt-2">Edit Services</h3>
            <Form.Item name="name" label="Name" rules={[{required:true}]}>
            <Input />
            </Form.Item>
            <Form.Item name="carImg" label="Image URL" rules={[{required:true}]}>
              <Input />
            </Form.Item>
            <Form.Item name="rentPerHour" label="Time Taken (Hour)" rules={[{required:true}]}>
              <Input type="number" />
            </Form.Item>
            <Form.Item name="capacity" label="Price" rules={[{required:true}]}>
              <Input type="number"/>
            </Form.Item>
            <Form.Item name="feulType" label="Description" rules={[{required:true}]}>
              <Input />
            </Form.Item>
            <button className="btn1">Edit</button>
          </Form>)}
        </Col>
      </Row>
    </DefaultLayout>
  )
}

export default EditCar
