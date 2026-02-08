import { useState } from "react";
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
  Collapse,
} from "antd";
import {
  CheckOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  TeamOutlined,
  BarChartOutlined,
  PhoneOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  DownCircleOutlined,
  BankOutlined,
  GlobalOutlined,
  SolutionOutlined,
  QuestionCircleOutlined,
  MailOutlined,
  UserOutlined,
  EnvironmentOutlined,
  MessageOutlined,
  PlusOutlined,
  MinusOutlined,
  RocketOutlined,
  SafetyOutlined,
  SearchOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

import teamImage from "../assets/images/hero_photo.jpg";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;
const { TextArea } = Input;

// Анимации
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Данные для шагов заказа
  const orderSteps = [
    {
      title: "Заявка",
      icon: <MailOutlined />,
      content: "Оформление заявки с нашим менеджером",
    },
    {
      title: "Анкетирование",
      icon: <AuditOutlined />,
      content:
        "Проведение анкетирования, запрашиваем необходимую информацию для оценки стоимости",
    },
    {
      title: "Предложение",
      icon: <FileTextOutlined />,
      content: "Готовим коммерческое предложение, согласовываем все детали",
    },
    {
      title: "Подключение",
      icon: <CheckOutlined />,
      content: "Заключаем договор",
    },
  ];

  // FAQ данные
  const faqItems = [
    {
      question: "От чего зависит стоимость бухгалтерских услуг?",
      answer:
        "Стоимость зависит от объема работы: количество операций, сотрудников, системы налогообложения. Мы предлагаем гибкую тарификацию — вы платите только за те услуги, которые вам действительно нужны.",
    },
    {
      question:
        "Можете ли вы обеспечить судебную защиту, если это потребуется?",
      answer:
        "Да, наша команда юристов имеет богатый опыт судебной практики. Мы предоставляем полное сопровождение в судах всех инстанций, включая подготовку документов и представительство.",
    },
    {
      question:
        "Входит ли финансовое планирование в перечень услуг вашей компании?",
      answer:
        "Да, управленческая отчетность и финансовое планирование — одна из наших ключевых услуг. Мы помогаем с бюджетированием, прогнозированием и анализом финансовых показателей.",
    },
    {
      question:
        "Хотим заказать только сдачу отчетности вашими силами, это возможно?",
      answer:
        "Конечно! Мы предлагаем модульный подход — можно заказать только сдачу отчетности, только расчет зарплаты или любую другую отдельную услугу.",
    },
  ];

  // Преимущества с иконками
  const advantages = [
    {
      icon: <TeamOutlined />,
      title: "Команда экспертов",
      desc: "Дипломированные и аттестованные специалисты с опытом более 20 лет.",
      color: "#19be7d",
    },
    {
      icon: <GlobalOutlined />,
      title: "Работаем по всей России",
      desc: "Обслуживаем клиентов в любом регионе РФ",
      color: "#19be7d",
    },
    {
      icon: <FileSearchOutlined />,
      title: "Прозрачные тарифы",
      desc: "Фиксированная стоимость без скрытых платежей",
      color: "#19be7d",
    },
  ];

  // Услуги с детальным описанием (без аутсорсинга, только 3 услуги)
  const services = [
    {
      id: "accounting",
      title: "Бухгалтерское обслуживание",
      icon: <CalculatorOutlined />,
      description: "Полный комплекс бухгалтерских услуг для вашего бизнеса",
      features: [
        "Ведение бухгалтерского и налогового учета",
        "Расчет зарплаты и кадровый учет",
        "Сдача отчетности в контролирующие органы",
        "ВЭД сопровождение",
        "Восстановление учета",
        "Налоговое консультирование",
      ],
      buttonText: "Подробнее об услуге",
      fullDescription:
        "Возьмем на себя ведение бухгалтерского и налогового учета вашей компании, рассчитаем зарплату, заведем кадровый учет, сдадим отчетность",
    },
    {
      id: "legal",
      title: "Юридическое сопровождение",
      icon: <FileTextOutlined />,
      description: "Правовая защита и консультации для вашего бизнеса",
      features: [
        "Регистрация и ликвидация бизнеса",
        "Составление и экспертиза договоров",
        "Судебное представительство",
        "Взыскание дебиторской задолженности",
        "Трудовые споры",
        "Сопровождение банкротства",
      ],
      buttonText: "Узнать больше",
      fullDescription:
        "Зарегистрируем новый бизнес, внесем изменения, составим договор, возьмем на себя претензионно-исковую работу, представим интересы в суде",
    },
    {
      id: "management",
      title: "Управленческая отчетность",
      icon: <BarChartOutlined />,
      description: "Финансовый анализ и стратегическое планирование",
      features: [
        "Бюджетирование доходов и расходов",
        "Прогнозирование денежных потоков",
        "Расчет себестоимости и рентабельности",
        "Анализ эффективности подразделений",
        "Разработка KPI и мотивации",
        "Создание управленческих регламентов",
      ],
      buttonText: "Изучить",
      fullDescription:
        "Посчитаем доходы и расходы, составим бюджет, спрогнозируем и устраним кассовые разрывы, подсветим неэффективные процессы",
    },
  ];

  // Аутсорсинг бизнес-процессов - 5 подсекций
  const outsourcingServices = [
    {
      title: "Бухгалтерское обслуживание",
      icon: <CalculatorOutlined />,
      description: "Полный комплекс бухгалтерских и налоговых услуг",
    },
    {
      title: "Юридическое сопровождение",
      icon: <FileTextOutlined />,
      description: "Регистрация бизнеса, договоры, судебная защита",
    },
    {
      title: "Управленческая отчетность",
      icon: <BarChartOutlined />,
      description: "Финансовый анализ, бюджетирование, планирование",
    },
    {
      title: "Страхование",
      icon: <SafetyOutlined />,
      description: "Все виды страхования для бизнеса и сотрудников",
    },
    {
      title: "Поиск и подбор персонала",
      icon: <SearchOutlined />,
      description: "Полный цикл подбора и оценки кандидатов",
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
        content: "Наш менеджер свяжется с вами",
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

  // Обработчик клика по блоку "Аутсорсинг бизнес-процессов"
  const handleOutsourcingClick = () => {
    navigate("/services/outsourcing");
  };

  return (
    <div className="home-page">
      {/* Герой-секция */}
      <Motion.section
        className="hero-section"
        style={{
          height: "100vh",
          minHeight: "700px",
          backgroundImage: `
            linear-gradient(rgba(30, 34, 40, 0.7), rgba(30, 34, 40, 0.25)),
            url(${teamImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
          position: "relative",
          overflow: "hidden",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Motion.div
          style={{
            maxWidth: "1000px",
            position: "relative",
            marginTop:"275px",
            zIndex: 2,
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div style={{ marginBottom: "24px" }}>
            <Title
              style={{
                color: "white",
                fontSize: "3.0rem",
                marginBottom: "24px",
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              КОМПЛЕКСНОЕ СОПРОВОЖДЕНИЕ
              <br />
              <span style={{ color: "#19be7d" }}>ВАШЕГО БИЗНЕСА</span>
            </Title>
          </div>

          <Space size="large">
            <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#19be7d",
                  borderColor: "#19be7d",
                  height: "56px",
                  padding: "0 40px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(25, 190, 125, 0.3)",
                }}
                onClick={showModal}
                icon={<RocketOutlined />}
              >
                Начать сотрудничество
              </Button>
            </Motion.div>
          </Space>

          {/* Анимированные цифры в герое */}
          <Motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { value: "20+", label: "Лет опыта" },
              { value: "24/7", label: "Поддержка" },
            ].map((stat, index) => (
              <Motion.div
                key={index}
                style={{ textAlign: "center" }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Text
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "#19be7d",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {stat.value}
                </Text>
                <Text
                  style={{
                    color: "#b9ebd7",
                    fontSize: "14px",
                    fontWeight: 500,
                    marginTop: "8px",
                    display: "block",
                  }}
                >
                  {stat.label}
                </Text>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>

        {/* Анимированная стрелка скролла */}
        <Motion.div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#19be7d",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 2,
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <DownCircleOutlined />
        </Motion.div>
      </Motion.section>



      {/* Секция услуг с детальным описанием (3 услуги) */}
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
            <Title
              level={2}
              style={{
                color: "#000000",
                marginBottom: "16px",
              }}
            >
              Услуги для бизнеса
            </Title>
            <Paragraph
              style={{
                fontSize: "20px",
                color: "white",
                maxWidth: "700px",
                margin: "0 auto",
                backgroundColor: "rgb(25, 190, 125)",
                padding: "25px 10px",
                borderRadius: "16px",
              }}
            >
              Освободите себя от рутинных задач и переключите свое внимание на
              рост и развитие вашего бизнеса
            </Paragraph>
          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]} justify="center">
              {services.map((service, index) => (
                <Col xs={24} md={8} key={index}>
                  <Motion.div
                    variants={fadeInUp}
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
                        transition: "all 0.3s ease",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      bodyStyle={{
                        padding: "40px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "24px",
                            marginBottom: "32px",
                          }}
                        >
                          <div
                            style={{
                              width: "64px",
                              height: "64px",
                              borderRadius: "12px",
                              backgroundColor: "#f0faf5",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              border: `2px solid #19be7d40`,
                            }}
                          >
                            <div style={{ fontSize: "32px", color: "#19be7d" }}>
                              {service.icon}
                            </div>
                          </div>

                          <div style={{ flex: 1 }}>
                            <Title
                              level={3}
                              style={{ color: "#000000", marginBottom: "12px" }}
                            >
                              {service.title}
                            </Title>
                          </div>
                        </div>

                        <div style={{ marginBottom: "32px", flex: 1 }}>
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "12px",
                                color: "#000000",
                              }}
                            >
                              <CheckOutlined
                                style={{
                                  color: "#19be7d",
                                  marginRight: "12px",
                                  fontSize: "14px",
                                }}
                              />
                              <span style={{ fontSize: "14px" }}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Button
                          type="primary"
                          style={{
                            backgroundColor: "#19be7d",
                            borderColor: "#19be7d",
                            borderRadius: "8px",
                            fontWeight: 600,
                            width: "100%",
                            marginTop: "auto",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#14a36b";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#19be7d";
                          }}
                          onClick={() => navigate(`/services/${service.id}`)}
                          icon={<ArrowRightOutlined />}
                        >
                          {service.buttonText}
                        </Button>
                      </div>
                    </Card>
                  </Motion.div>
                </Col>
              ))}
            </Row>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Секция "Как это работает" */}
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
            <Title level={2} style={{ color: "#000000", marginBottom: "16px" }}>
              <span style={{ color: "#19be7d" }}>4 простых шага</span> до начала
              сотрудничества
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#55646e",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Подключение к услугам бухгалтерского аутсорсинга выполняется
              быстро и легко
            </Paragraph>
          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]} justify="center">
              {orderSteps.map((step, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <Motion.div
                    variants={fadeInUp}
                    whileHover={cardHoverAnimation}
                    style={{ height: "100%" }}
                  >
                    <Card
                      hoverable
                      style={{
                        borderRadius: "16px",
                        border: "2px solid #f0f0f0",
                        textAlign: "center",
                        height: "100%",
                        padding: "32px 24px",
                        transition: "all 0.3s ease",
                      }}
                      bodyStyle={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          backgroundColor: "#f0faf5",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "24px",
                          border: `2px solid #19be7d`,
                        }}
                      >
                        <div style={{ fontSize: "32px", color: "#19be7d" }}>
                          {step.icon}
                        </div>
                      </div>

                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#19be7d",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "16px",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        {index + 1}
                      </div>

                      <Title
                        level={4}
                        style={{ marginBottom: "12px", color: "#000000" }}
                      >
                        {step.title}
                      </Title>
                      <Paragraph style={{ color: "#55646e", margin: 0 }}>
                        {step.content}
                      </Paragraph>
                    </Card>
                  </Motion.div>
                </Col>
              ))}
            </Row>
          </Motion.div>

          <Motion.div
            style={{ textAlign: "center", marginTop: "60px" }}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#19be7d",
                borderColor: "#19be7d",
                height: "56px",
                padding: "0 40px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
              }}
              onClick={showModal}
            >
              <PhoneOutlined /> Заказать звонок
            </Button>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Секция "Почему выбирают нас" */}
      <Motion.section
        style={{
          padding: "80px 20px",
          backgroundColor: "rgb(248, 249, 250)",
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
              Почему вы можете доверять нам
            </Title>
            <Paragraph
              style={{
                fontSize: "20px",
                color: "white",
                maxWidth: "700px",
                margin: "0 auto",
                backgroundColor: "rgb(25, 190, 125)",
                padding: "25px 10px",
                borderRadius: "16px",
              }}
            >
              Передавая часть своих бизнес-задач к нам, вы можете быть уверены в
              экспертном решении каждого вопроса
            </Paragraph>
          </Motion.div>

          <Motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Row gutter={[32, 32]} justify="center">
              {advantages.map((advantage, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <Motion.div
                    variants={fadeInUp}
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
                        transition: "all 0.3s ease",
                      }}
                      bodyStyle={{
                        padding: "32px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
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
                          border: `2px solid ${advantage.color}40`,
                        }}
                      >
                        {typeof advantage.icon === "object" && 
                        advantage.icon.type && 
                        advantage.icon.type.name !== "img" ? (
                          <div style={{ fontSize: "28px", color: advantage.color }}>
                            {advantage.icon}
                          </div>
                        ) : (
                          advantage.icon
                        )}
                      </div>

                      <Title
                        level={4}
                        style={{ color: "#000000", marginBottom: "12px" }}
                      >
                        {advantage.title}
                      </Title>
                      <Paragraph style={{ color: "#55646e", margin: 0 }}>
                        {advantage.desc}
                      </Paragraph>
                    </Card>
                  </Motion.div>
                </Col>
              ))}
            </Row>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Секция FAQ */}
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
              Часто задаваемые вопросы
            </Title>
            <Paragraph
              style={{
                fontSize: "1.1rem",
                color: "#55646e",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Ответы на самые популярные вопросы от наших клиентов
            </Paragraph>
          </Motion.div>

          <Motion.div variants={fadeInUp}>
            <Row gutter={[40, 16]}>
              <Col xs={24} lg={12}>
                {faqItems
                  .slice(0, Math.ceil(faqItems.length / 2))
                  .map((item, index) => (
                    <Motion.div
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
                                color: "#19be7d",
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}
                            />
                          ) : (
                            <PlusOutlined
                              style={{
                                color: "#19be7d",
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}
                            />
                          )
                        }
                        expandIconPosition="end"
                        style={{
                          backgroundColor: "transparent",
                          marginBottom: "12px",
                        }}
                      >
                        <Panel
                          header={
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: "17px",
                                color: "#000000",
                                paddingRight: "20px",
                                lineHeight: 1.4,
                                height: "3rem",
                              }}
                            >
                              {item.question}
                            </div>
                          }
                          key={index}
                          style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            border: "2px solid #e6e9ec",
                            overflow: "hidden",
                          }}
                        >
                          <Paragraph
                            style={{
                              color: "#55646e",
                              margin: 0,
                              fontSize: "16px",
                              lineHeight: 1.6,
                              padding: "8px 0",
                            }}
                          >
                            {item.answer}
                          </Paragraph>
                        </Panel>
                      </Collapse>
                    </Motion.div>
                  ))}
              </Col>

              <Col xs={24} lg={12}>
                {faqItems
                  .slice(Math.ceil(faqItems.length / 2))
                  .map((item, index) => (
                    <Motion.div
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
                                color: "#19be7d",
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}
                            />
                          ) : (
                            <PlusOutlined
                              style={{
                                color: "#19be7d",
                                fontSize: "18px",
                                fontWeight: "bold",
                              }}
                            />
                          )
                        }
                        expandIconPosition="end"
                        style={{
                          backgroundColor: "transparent",
                          marginBottom: "12px",
                        }}
                      >
                        <Panel
                          header={
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: "17px",
                                color: "#000000",
                                paddingRight: "20px",
                                lineHeight: 1.4,
                              }}
                            >
                              {item.question}
                            </div>
                          }
                          key={index + Math.ceil(faqItems.length / 2)}
                          style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            border: "2px solid #e6e9ec",
                            overflow: "hidden",
                          }}
                        >
                          <Paragraph
                            style={{
                              color: "#55646e",
                              margin: 0,
                              fontSize: "16px",
                              lineHeight: 1.6,
                              padding: "8px 0",
                            }}
                          >
                            {item.answer}
                          </Paragraph>
                        </Panel>
                      </Collapse>
                    </Motion.div>
                  ))}
              </Col>
            </Row>
          </Motion.div>

          {/* Блок под FAQ */}
          <Motion.div
            style={{
              textAlign: "center",
              marginTop: "60px",
              padding: "40px",
              backgroundColor: "#f0faf5",
              borderRadius: "20px",
              border: "1px solid #b9ebd7",
            }}
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <QuestionCircleOutlined
                style={{ fontSize: "32px", color: "#19be7d" }}
              />
              <Title
                level={3}
                style={{ margin: 0, color: "#000000", fontSize: "1.8rem" }}
              >
                Не нашли ответ на свой вопрос?
              </Title>
            </div>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#55646e",
                maxWidth: "600px",
                margin: "0 auto 24px",
              }}
            >
              Задайте его нашему специалисту — получите подробную консультацию
              бесплатно
            </Paragraph>
            <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#19be7d",
                  borderColor: "#19be7d",
                  height: "56px",
                  padding: "0 40px",
                  borderRadius: "12px",
                  fontSize: "17px",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(25, 190, 125, 0.2)",
                }}
                onClick={showModal}
                icon={<MessageOutlined />}
              >
                Задать вопрос специалисту
              </Button>
            </Motion.div>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Секция CTA */}
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
              Готовы оптимизировать бизнес-процессы?
            </Title>
            <Paragraph
              style={{
                color: "#ffffff",
                fontSize: "18px",
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Оставьте заявку и получите бесплатную консультацию от нашего
              эксперта
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
                  Получите коммерческое предложение
                </Title>
                <Paragraph style={{ color: "#55646e" }}>
                  Заполните форму и мы свяжемся с вами
                </Paragraph>
              </div>

              <Space
                direction="vertical"
                size="large"
                style={{ width: "100%" }}
              >
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <Motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ flex: 1, minWidth: "200px" }}
                  >
                    <Button
                      type="primary"
                      size="large"
                      style={{
                        width: "100%",
                        backgroundColor: "#19be7d",
                        borderColor: "#19be7d",
                        height: "56px",
                        fontSize: "16px",
                        fontWeight: 600,
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(25, 190, 125, 0.3)",
                      }}
                      onClick={showModal}
                      icon={<MessageOutlined />}
                    >
                      Оставить заявку
                    </Button>
                  </Motion.div>
                </div>

                <Divider style={{ margin: "8px 0", color: "#e6e9ec" }}>
                  <Text type="secondary">или</Text>
                </Divider>

                <div style={{ textAlign: "center" }}>
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
                    }}
                    whileHover={{
                      backgroundColor: "#e6f7ef",
                      boxShadow: "0 8px 25px rgba(25, 190, 125, 0.2)",
                    }}
                  >
                    <PhoneOutlined />
                    <span>+7 (930) 120-87-82</span>
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
              </Space>
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
              prefix={<PhoneOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Пожалуйста, введите ваш email" },
              { type: "email", message: "Введите корректный email" },
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

export default HomePage;