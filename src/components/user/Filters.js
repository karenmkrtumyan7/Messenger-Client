// import {
//   Button, DatePicker, Form, Input, Row,
// } from 'antd';
// import styled from 'styled-components';
//
// export function Filters() {
//   const [form] = Form.useForm();
//   const onFinish = (values) => {
//     // console.log('Success:', values);
//   };
//
//   const onChange = (date, dateString) => {
//     // console.log(date, dateString);
//   };
//
//   const onFinishFailed = (errorInfo) => {
//     // console.log('Failed:', errorInfo);
//   };
//
//   const FormInputStyled = styled(Input)`
//     //width: 300px;
//   `;
//
//   const FilterWrapper = styled(Row)`
//     column-gap: 30px;
//     justify-content: center;
//     padding: 15px;
//   `;
//
//   const FiltersButtonsWrapper = styled(Row)`
//     column-gap: 10px;
//   `;
//
//   const onReset = () => {
//     form.resetFields();
//   };
//
//   return (
//     <Form
//       form={form}
//       name="filters"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <FilterWrapper>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your username!',
//             },
//           ]}
//         >
//           <FormInputStyled />
//         </Form.Item>
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your username!',
//             },
//           ]}
//         >
//           <FormInputStyled />
//         </Form.Item>
//         <Form.Item
//           label="Date"
//           name="date"
//           rules={[
//             {
//               required: true,
//               message: 'Please pick date!',
//             },
//           ]}
//         >
//           <DatePicker onChange={onChange} />
//         </Form.Item>
//         <Form.Item>
//           <FiltersButtonsWrapper>
//             <Button type="primary" htmlType="submit">
//               Apply
//             </Button>
//             <Button htmlType="button" onClick={onReset}>
//               Reset
//             </Button>
//           </FiltersButtonsWrapper>
//         </Form.Item>
//       </FilterWrapper>
//     </Form>
//   );
// }
