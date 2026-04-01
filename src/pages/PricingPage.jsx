import React, { useState } from 'react';
import {
  Card,
  Typography,
  Row,
  Col,
  Divider,
  Space,
  Collapse,
  Button,
  Input,
  Form,
  Modal,
} from 'antd';
import {
  PhoneOutlined,
  RocketOutlined,
  TeamOutlined,
  SafetyOutlined,
  DollarOutlined,
  PlusOutlined,
  MinusOutlined,
  QuestionCircleOutlined,
  MessageOutlined,
  UserOutlined,
  MailOutlined,
  EnvironmentOutlined,
  BankOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PriceCalculator from '../components/PriceCalculator';

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;
const { TextArea } = Input;

const serviceColor = '#19be7d';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Кастомная кнопка для CTA
const CustomCTAButton = ({ children, onClick, variant = 'primary', icon }) => {
  const baseStyles = {
    height: 56,
    padding: '0 40px',
    fontWeight: 600,
    fontSize: 16,
    borderRadius: 8,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    transition: 'all 0.3s ease',
  };

  const primaryStyles = {
    ...baseStyles,
    backgroundColor: '#fff',
    color: serviceColor,
    border: `2px solid #fff`,
  };

  const secondaryStyles = {
    ...baseStyles,
    backgroundColor: 'transparent',
    color: '#fff',
    border: `2px solid #fff`,
  };

  const buttonStyles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <motion.button
      style={buttonStyles}
      whileHover={{
        backgroundColor: variant === 'primary' ? '#14a36b' : '#fff',
        borderColor: variant === 'primary' ? '#14a36b' : '#fff',
        color: variant === 'primary' ? '#fff' : serviceColor,
        transform: 'translateY(-2px)',
        boxShadow: variant === 'primary'
          ? '0 8px 25px rgba(20,163,107,0.3)'
          : '0 8px 25px rgba(255,255,255,0.2)',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {icon}
      {children}
    </motion.button>
  );
};

// Карточка преимущества
const BenefitCard = ({ icon, title, description }) => (
  <motion.div
    style={{
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: '30px 20px',
      textAlign: 'center',
      height: '100%',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
      border: `1px solid ${serviceColor}20`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    whileHover={{
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(25,190,125,0.1)',
      border: `1px solid ${serviceColor}40`,
    }}
  >
    <div
      style={{
        width: 70,
        height: 70,
        borderRadius: 12,
        backgroundColor: `${serviceColor}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
        border: `1px solid ${serviceColor}30`,
      }}
    >
      <div style={{ fontSize: 32, color: serviceColor }}>{icon}</div>
    </div>
    <Title level={4} style={{ marginBottom: 15, fontSize: 18 }}>
      {title}
    </Title>
    <Paragraph style={{ color: '#666', margin: 0, textAlign: 'center' }}>
      {description}
    </Paragraph>
  </motion.div>
);

const PricingPage = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const benefits = [
    { icon: <RocketOutlined />, title: 'Прозрачность', description: 'Вы точно знаете, из чего складывается цена' },
    { icon: <TeamOutlined />, title: 'Индивидуальный подход', description: 'Учитываем специфику вашего бизнеса' },
    { icon: <SafetyOutlined />, title: 'Фиксированная стоимость', description: 'Цена не меняется в течение срока договора' },
    { icon: <DollarOutlined />, title: 'Экономия', description: 'Аутсорсинг обходится дешевле штатного специалиста' },
  ];

  const faqItems = [
    {
      question: 'Как рассчитывается окончательная стоимость?',
      answer: 'Калькулятор даёт предварительную оценку. Итоговая цена фиксируется в договоре после анализа ваших документов и объёма операций.',
    },
    {
      question: 'Входят ли дополнительные услуги в тариф?',
      answer: 'В базовую стоимость включены услуги согласно выбранному тарифу. Дополнительные опции (например, восстановление учёта, инвентаризация) оплачиваются отдельно.',
    },
    {
      question: 'Есть ли скрытые платежи?',
      answer: 'Нет. Мы прописываем все условия в договоре и никогда не выставляем неожиданных счетов.',
    },
    {
      question: 'Можно ли изменить тариф в процессе работы?',
      answer: 'Да, вы можете перейти на другой тариф в любой момент, предупредив нас за 5 рабочих дней.',
    },
    {
      question: 'Как часто нужно оплачивать услуги?',
      answer: 'Оплата производится ежемесячно на основании договора. Для разовых услуг — предоплата 100%.',
    },
    {
      question: 'Предоставляете ли вы отсрочку платежа?',
      answer: 'Для постоянных клиентов с положительной историей сотрудничества мы можем рассмотреть индивидуальные условия оплаты.',
    },
  ];

  // Обработчики модального окна
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log('Form values:', values);
      Modal.success({
        title: 'Заявка успешно отправлена!',
        content: 'Наш менеджер свяжется с вами в ближайшее время',
      });
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: '40px 20px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ height: 60 }} />

        {/* Hero секция */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Card
            style={{
              borderRadius: 20,
              border: 'none',
              boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              marginBottom: 40,
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, ${serviceColor} 0%, #14a36b 100%)`,
                padding: '60px 40px',
                textAlign: 'center',
                color: '#fff',
                borderRadius: 20,
              }}
            >
              <Title level={1} style={{ color: '#fff', marginBottom: 20 }}>
                Цены на наши услуги
              </Title>
              <Paragraph style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', maxWidth: 700, margin: '0 auto' }}>
                Мы предлагаем гибкую систему тарифов, которая позволяет вам выбрать оптимальный объём обслуживания.
                Воспользуйтесь калькулятором для предварительной оценки или свяжитесь с нами для индивидуального расчёта.
              </Paragraph>
            </div>
          </Card>
        </motion.div>

        {/* Калькулятор */}
        <motion.div variants={fadeInUp} initial="initial" animate="animate" transition={{ delay: 0.1 }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>
            Рассчитайте примерную стоимость
          </Title>
          <PriceCalculator />
        </motion.div>

        <Divider style={{ margin: '60px 0' }} />

        {/* Преимущества */}
        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>
            Почему наши цены выгодны?
          </Title>
          <Row gutter={[24, 24]}>
            {benefits.map((benefit, idx) => (
              <Col xs={24} sm={12} md={6} key={idx}>
                <BenefitCard icon={benefit.icon} title={benefit.title} description={benefit.description} />
              </Col>
            ))}
          </Row>
        </motion.div>

        <Divider style={{ margin: '60px 0' }} />

        {/* FAQ */}
        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <Title
              level={2}
              style={{
                color: '#000000',
                marginBottom: 16,
                fontSize: '2.5rem',
                fontWeight: 800,
              }}
            >
              Часто задаваемые вопросы о ценах
            </Title>
            <Paragraph
              style={{
                fontSize: '1.1rem',
                color: '#55646e',
                maxWidth: 800,
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Ответы на самые популярные вопросы от наших клиентов
            </Paragraph>
          </div>

          <Row gutter={[40, 16]}>
            <Col xs={24} lg={12}>
              {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <MinusOutlined
                          style={{
                            color: serviceColor,
                            fontSize: 18,
                            fontWeight: 'bold',
                          }}
                        />
                      ) : (
                        <PlusOutlined
                          style={{
                            color: serviceColor,
                            fontSize: 18,
                            fontWeight: 'bold',
                          }}
                        />
                      )
                    }
                    expandIconPosition="end"
                    style={{
                      backgroundColor: 'transparent',
                      marginBottom: 12,
                    }}
                  >
                    <Panel
                      header={
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 17,
                            color: '#000000',
                            paddingRight: 20,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.question}
                        </div>
                      }
                      key={index}
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 12,
                        border: '2px solid #e6e9ec',
                        overflow: 'hidden',
                      }}
                    >
                      <Paragraph
                        style={{
                          color: '#55646e',
                          margin: 0,
                          fontSize: 16,
                          lineHeight: 1.6,
                          padding: '8px 0',
                        }}
                      >
                        {item.answer}
                      </Paragraph>
                    </Panel>
                  </Collapse>
                </motion.div>
              ))}
            </Col>

            <Col xs={24} lg={12}>
              {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
                <motion.div
                  key={index + Math.ceil(faqItems.length / 2)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <MinusOutlined
                          style={{
                            color: serviceColor,
                            fontSize: 18,
                            fontWeight: 'bold',
                          }}
                        />
                      ) : (
                        <PlusOutlined
                          style={{
                            color: serviceColor,
                            fontSize: 18,
                            fontWeight: 'bold',
                          }}
                        />
                      )
                    }
                    expandIconPosition="end"
                    style={{
                      backgroundColor: 'transparent',
                      marginBottom: 12,
                    }}
                  >
                    <Panel
                      header={
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: 17,
                            color: '#000000',
                            paddingRight: 20,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.question}
                        </div>
                      }
                      key={index + Math.ceil(faqItems.length / 2)}
                      style={{
                        backgroundColor: '#ffffff',
                        borderRadius: 12,
                        border: '2px solid #e6e9ec',
                        overflow: 'hidden',
                      }}
                    >
                      <Paragraph
                        style={{
                          color: '#55646e',
                          margin: 0,
                          fontSize: 16,
                          lineHeight: 1.6,
                          padding: '8px 0',
                        }}
                      >
                        {item.answer}
                      </Paragraph>
                    </Panel>
                  </Collapse>
                </motion.div>
              ))}
            </Col>
          </Row>

          {/* Блок под FAQ */}
          <motion.div
            style={{
              textAlign: 'center',
              marginTop: 60,
              padding: 40,
              backgroundColor: '#f0faf5',
              borderRadius: 20,
              border: `1px solid ${serviceColor}30`,
            }}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                marginBottom: 16,
              }}
            >
              <QuestionCircleOutlined
                style={{ fontSize: 32, color: serviceColor }}
              />
              <Title
                level={3}
                style={{ margin: 0, color: '#000000', fontSize: '1.8rem' }}
              >
                Не нашли ответ на свой вопрос?
              </Title>
            </div>
            <Paragraph
              style={{
                fontSize: 18,
                color: '#55646e',
                maxWidth: 600,
                margin: '0 auto 24px',
              }}
            >
              Задайте его нашему специалисту — получите подробную консультацию
              бесплатно
            </Paragraph>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: serviceColor,
                  borderColor: serviceColor,
                  height: 56,
                  padding: '0 40px',
                  borderRadius: 12,
                  fontSize: 17,
                  fontWeight: 600,
                  boxShadow: `0 4px 15px ${serviceColor}30`,
                }}
                onClick={showModal}
                icon={<MessageOutlined />}
              >
                Задать вопрос специалисту
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <Divider style={{ margin: '60px 0' }} />

        {/* CTA */}
        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <div
            style={{
              background: `linear-gradient(135deg, ${serviceColor} 0%, #14a36b 100%)`,
              borderRadius: 20,
              padding: '60px 40px',
              textAlign: 'center',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 150,
                height: 150,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                width: 100,
                height: 100,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Title level={2} style={{ color: '#fff', marginBottom: 20 }}>
                Готовы оптимизировать бизнес-процессы?
              </Title>
              <Paragraph style={{ fontSize: 18, marginBottom: 40, opacity: 0.9 }}>
                Оставьте заявку и получите бесплатную консультацию от нашего эксперта
              </Paragraph>
              <Space size="large" wrap style={{ justifyContent: 'center' }}>
                <CustomCTAButton
                  variant="primary"
                  onClick={showModal}
                  icon={<MessageOutlined />}
                >
                  Оставить заявку
                </CustomCTAButton>
                <CustomCTAButton
                  variant="secondary"
                  onClick={() => window.location.href = 'tel:+79301208782'}
                >
                  Позвонить
                </CustomCTAButton>
              </Space>
              <Paragraph style={{ fontSize: 14, marginTop: 24, opacity: 0.8, fontStyle: 'italic' }}>
                Первая консультация — бесплатно
              </Paragraph>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Модальное окно для заявки */}
      <Modal
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '0 50px',
            }}
          >
            <MessageOutlined style={{ color: serviceColor }} />
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
            style={{ backgroundColor: serviceColor, borderColor: serviceColor }}
          >
            Отправить заявку
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" style={{ marginTop: 24 }}>
          <Form.Item
            name="name"
            label="Ваше имя"
            rules={[
              { required: true, message: 'Пожалуйста, введите ваше имя' },
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
              { required: true, message: 'Пожалуйста, введите ваш телефон' },
            ]}
          >
            <Input
              size="large"
              placeholder="+7 (930) 120-87-82"
              prefix={<PhoneOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Пожалуйста, введите ваш email' },
              { type: 'email', message: 'Введите корректный email' },
            ]}
          >
            <Input
              size="large"
              placeholder="example@mail.ru"
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Form.Item name="company" label="Название компании">
            <Input
              size="large"
              placeholder="ООО 'Рога и копыта'"
              prefix={<BankOutlined />}
            />
          </Form.Item>

          <Form.Item name="city" label="Город">
            <Input
              size="large"
              placeholder="Москва"
              prefix={<EnvironmentOutlined />}
            />
          </Form.Item>

          <Form.Item name="service" label="Какая услуга вас интересует?">
            <Input
              size="large"
              placeholder="Бухгалтерское обслуживание"
              prefix={<SolutionOutlined />}
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

export default PricingPage;