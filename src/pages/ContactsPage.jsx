import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Space,
  Divider,
  Input,
  Form,
  Modal,
} from "antd";
import {
  PhoneOutlined,
  ClockCircleOutlined,
  UserOutlined,
  MessageOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { motion as Motion } from "framer-motion";

// Импортируем SVG карту России
import RussiaMap from "../assets/images/map.svg";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

// Анимации
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const ContactsPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Контактная информация (оставили только телефон и режим работы)
  const contactInfo = [
    {
      icon: <PhoneOutlined />,
      title: "Телефон",
      content: "+7 (930) 120-87-82",
      description: "Бесплатный звонок по всей России",
      color: "#19be7d",
    },
    {
      icon: <ClockCircleOutlined />,
      title: "Режим работы",
      content: "Пн-Пт: 9:00-18:00",
      description: "Суббота и воскресенье: по договоренности",
      color: "#19be7d",
    },
  ];

  // Обработчики модального окна
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log("Form values:", values);
      Modal.success({
        title: "Заявка успешно отправлена!",
        content: "Наш менеджер свяжется с вами в течение 1 часа",
      });
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Анимация для карточек
  const cardHoverAnimation = {
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(25, 190, 125, 0.15)",
    transition: { duration: 0.3 },
  };

  return (
    <div className="contacts-page" style={{ minHeight: "100vh" }}>
      {/* Hero секция - упрощенная */}

      {/* Карта России */}
      <Motion.section
        style={{
          padding: "80px 20px",
          backgroundColor: "#ffffff",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Motion.div
            style={{ textAlign: "center", marginBottom: "60px" }}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Title
              level={2}
              style={{
                color: "#000000",
                marginBottom: "16px",
                fontSize: "2.5rem",
                fontWeight: 800,
              }}
            >
              <span style={{ color: "#19be7d" }}>Работаем по всей России</span>
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#55646e",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Где бы вы ни находились, мы готовы предоставить качественные услуги
            </Paragraph>
          </Motion.div>

          <Motion.div variants={fadeInUp}>
            <Card
              style={{
                borderRadius: "24px",
                border: "2px solid #f0f0f0",
                backgroundColor: "#ffffff",
                padding: "40px",
                marginBottom: "40px",
              }}
              bodyStyle={{ padding: 0 }}
            >
              <div style={{ position: "relative", width: "100%", height: "600px" }}>
                <img
                  src={RussiaMap}
                  alt="Карта России"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
                  }}
                />
              </div>
            </Card>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Контактная информация (только телефон и режим работы) */}
      <Motion.section
        style={{
          padding: "80px 20px",
          backgroundColor: "#f8f9fa",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Motion.div
            style={{ textAlign: "center", marginBottom: "60px" }}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Title level={2} style={{ color: "#000000", marginBottom: "16px" }}>
              Свяжитесь с нами
            </Title>
          </Motion.div>

          <Motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]} justify="center">
              {contactInfo.map((contact, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Motion.div
                    whileHover={cardHoverAnimation}
                    style={{ height: "100%" }}
                  >
                    <Card
                      hoverable
                      style={{
                        borderRadius: "16px",
                        border: "1px solid #e6e9ec",
                        backgroundColor: "#ffffff",
                        height: "100%",
                        textAlign: "center",
                      }}
                      bodyStyle={{
                        padding: "32px 24px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "12px",
                          backgroundColor: "#f0faf5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "24px",
                          border: `2px solid ${contact.color}40`,
                        }}
                      >
                        <div style={{ fontSize: "28px", color: contact.color }}>
                          {contact.icon}
                        </div>
                      </div>

                      <Title
                        level={4}
                        style={{ marginBottom: "12px", color: "#000000" }}
                      >
                        {contact.title}
                      </Title>
                      
                      <Paragraph
                        style={{
                          color: "#19be7d",
                          fontSize: "18px",
                          fontWeight: 600,
                          marginBottom: "8px",
                        }}
                      >
                        {contact.content}
                      </Paragraph>
                      
                      <Paragraph style={{ color: "#55646e", margin: 0, fontSize: "14px" }}>
                        {contact.description}
                      </Paragraph>
                    </Card>
                  </Motion.div>
                </Col>
              ))}
            </Row>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Форма заявки */}
      <Motion.section
        style={{
          padding: "100px 20px",
          background: "linear-gradient(135deg, #19be7d 0%, #14a36b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Motion.div
            style={{ textAlign: "center", marginBottom: "40px" }}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Title level={2} style={{ color: "#ffffff", marginBottom: "16px" }}>
              Оставить заявку
            </Title>
            <Paragraph
              style={{
                color: "#ffffff",
                fontSize: "18px",
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Заполните форму и мы свяжемся с вами в течение 1 часа
            </Paragraph>
          </Motion.div>

          <Motion.div variants={fadeInUp}>
            <Card
              style={{
                backgroundColor: "#ffffff",
                padding: "48px",
                borderRadius: "24px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                border: "none",
              }}
              bodyStyle={{ padding: 0 }}
            >
              <div style={{ textAlign: "center", marginBottom: "32px" }}>
                <Title
                  level={3}
                  style={{ color: "#000000", marginBottom: "8px" }}
                >
                  Свяжитесь с нами
                </Title>
                <Paragraph style={{ color: "#55646e" }}>
                  Заполните форму и мы подготовим для вас индивидуальное предложение
                </Paragraph>
              </div>

              <Form
                form={form}
                layout="vertical"
                style={{ maxWidth: "600px", margin: "0 auto" }}
              >
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="name"
                      label="Ваше имя"
                      rules={[
                        { required: true, message: "Пожалуйста, введите ваше имя" },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Иван Иванов"
                        prefix={<UserOutlined />}
                        style={{ borderRadius: "8px" }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="phone"
                      label="Телефон"
                      rules={[
                        { required: true, message: "Пожалуйста, введите ваш телефон" },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="+7 (930) 120-87-82"
                        style={{ borderRadius: "8px" }}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="city"
                  label="Ваш город"
                >
                  <Input
                    size="large"
                    placeholder="Москва"
                    style={{ borderRadius: "8px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="service"
                  label="Какая услуга вас интересует?"
                >
                  <Input
                    size="large"
                    placeholder="Бухгалтерское обслуживание"
                    style={{ borderRadius: "8px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Сообщение"
                >
                  <TextArea
                    rows={4}
                    placeholder="Опишите вашу задачу или задайте вопрос..."
                    style={{ borderRadius: "8px" }}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "#19be7d",
                      borderColor: "#19be7d",
                      height: "56px",
                      width: "100%",
                      fontSize: "16px",
                      fontWeight: 600,
                      borderRadius: "8px",
                      boxShadow: "0 4px 15px rgba(25, 190, 125, 0.3)",
                    }}
                    onClick={handleOk}
                    icon={<SendOutlined />}
                  >
                    Отправить заявку
                  </Button>
                </Form.Item>
              </Form>

              <Divider style={{ margin: "8px 0", color: "#e6e9ec" }}>
                <Text type="secondary">или</Text>
              </Divider>

              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <Motion.a
                  href="tel:+79301208782"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "#19be7d",
                    fontSize: "20px",
                    fontWeight: 700,
                    padding: "16px 32px",
                    backgroundColor: "#f0faf5",
                    borderRadius: "12px",
                    border: "2px solid #b9ebd7",
                    textDecoration: "none",
                  }}
                  whileHover={{
                    backgroundColor: "#e6f7ef",
                    boxShadow: "0 8px 25px rgba(25, 190, 125, 0.2)",
                  }}
                >
                  <PhoneOutlined />
                  <span>Позвонить сейчас: +7 (930) 120-87-82</span>
                </Motion.a>
                <Paragraph
                  style={{
                    color: "#8a9aa4",
                    marginTop: "16px",
                    fontSize: "14px",
                  }}
                >
                  Бесплатный звонок по России
                </Paragraph>
              </div>
            </Card>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Модальное окно для заявки */}
      <Modal
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "0 50px",
            }}
          >
            <MessageOutlined style={{ color: "#19be7d" }} />
            <span>Оставить заявку на консультацию</span>
          </div>
        }
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Отмена
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            style={{ backgroundColor: "#19be7d", borderColor: "#19be7d" }}
          >
            Отправить заявку
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" style={{ marginTop: "24px" }}>
          <Form.Item
            name="name"
            label="Ваше имя"
            rules={[
              { required: true, message: "Пожалуйста, введите ваше имя" },
            ]}
          >
            <Input
              size="large"
              placeholder="Иван Иванов"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Телефон"
            rules={[
              { required: true, message: "Пожалуйста, введите ваш телефон" },
            ]}
          >
            <Input
              size="large"
              placeholder="+7 (930) 120-87-82"
            />
          </Form.Item>

          <Form.Item
            name="service"
            label="Какая услуга вас интересует?"
          >
            <Input
              size="large"
              placeholder="Бухгалтерское обслуживание"
            />
          </Form.Item>

          <Form.Item name="message" label="Сообщение">
            <TextArea
              rows={4}
              placeholder="Опишите вашу задачу или задайте вопрос..."
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ContactsPage;