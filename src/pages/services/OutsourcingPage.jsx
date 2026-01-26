import React from "react";
import {
  Card,
  Button,
  Typography,
  Row,
  Col,
  Divider,
  Space,
  Tag,
} from "antd";
import {
  CalculatorOutlined,
  FileTextOutlined,
  BarChartOutlined,
  InsuranceOutlined,
  SearchOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  BuildOutlined,
  DollarOutlined,
  TeamOutlined,
  RocketOutlined,
  AreaChartOutlined,
  SettingOutlined,
  SyncOutlined,
  UserOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Кастомная кнопка для CTA секции
const CustomCTAButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  icon, 
  style = {} 
}) => {
  const serviceColor = "#fa8c16";
  
  const baseStyles = {
    height: "56px",
    padding: "0 40px",
    fontWeight: 600,
    fontSize: "16px",
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
  };

  const primaryStyles = {
    ...baseStyles,
    backgroundColor: "white",
    color: serviceColor,
    border: `2px solid white`,
  };

  const secondaryStyles = {
    ...baseStyles,
    backgroundColor: "transparent",
    color: "white",
    border: `2px solid white`,
  };

  const hoverStyles = {
    primary: {
      backgroundColor: serviceColor,
      borderColor: serviceColor,
      color: "white",
      transform: "translateY(-2px)",
      boxShadow: `0 8px 25px rgba(250, 140, 22, 0.3)`,
    },
    secondary: {
      backgroundColor: "white",
      borderColor: "white",
      color: serviceColor,
      transform: "translateY(-2px)",
      boxShadow: `0 8px 25px rgba(255, 255, 255, 0.2)`,
    },
  };

  const buttonStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <Motion.button
      style={{ ...buttonStyles, ...style }}
      whileHover={hoverStyles[variant]}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {icon}
      {children}
    </Motion.button>
  );
};

// Кастомная карточка для преимуществ
const CustomBenefitCard = ({ icon, title, description }) => {
  const serviceColor = "#fa8c16";

  return (
    <Motion.div
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "30px 20px",
        textAlign: "center",
        height: "100%",
        width: "100%",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
        border: `1px solid ${serviceColor}20`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "default",
      }}
      whileHover={{
        transform: "translateY(-5px)",
        boxShadow: "0 15px 30px rgba(250, 140, 22, 0.1)",
        border: `1px solid ${serviceColor}40`,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "12px",
          backgroundColor: `${serviceColor}15`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "25px",
          border: `1px solid ${serviceColor}30`,
        }}
      >
        <div style={{ fontSize: "32px", color: serviceColor }}>
          {icon}
        </div>
      </div>
      <Title level={4} style={{ marginBottom: "15px", fontSize: "18px", textAlign: "center" }}>
        {title}
      </Title>
      <Paragraph style={{ color: "#666", margin: 0, textAlign: "center" }}>
        {description}
      </Paragraph>
    </Motion.div>
  );
};

// Кастомная карточка для услуг
const CustomServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const serviceColor = "#fa8c16";

  return (
    <Motion.div
      style={{
        borderRadius: "16px",
        border: `1px solid ${service.available ? serviceColor : "#e8e8e8"}`,
        textAlign: "center",
        height: "320px",
        position: "relative",
        backgroundColor: service.available ? "#fff" : "#fafafa",
        opacity: service.available ? 1 : 0.7,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "24px",
        cursor: service.available ? "pointer" : "default",
      }}
      whileHover={service.available ? {
        transform: "translateY(-5px)",
        boxShadow: "0 15px 30px rgba(250, 140, 22, 0.1)",
        border: `1px solid ${serviceColor}`,
      } : {}}
      transition={{ duration: 0.3 }}
      onClick={service.available ? () => navigate(service.link) : undefined}
    >
      {!service.available && (
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <Tag color="default" style={{ fontSize: "12px", background: "#f0f0f0" }}>
            <ClockCircleOutlined style={{ marginRight: "4px", color: "#999" }} />
            {service.comingSoon}
          </Tag>
        </div>
      )}
      
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "16px",
          backgroundColor: service.available ? `${serviceColor}15` : "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: "32px", color: service.available ? serviceColor : "#999" }}>
          {service.icon}
        </div>
      </div>
      
      <Title
        level={4}
        style={{
          marginBottom: "15px",
          color: service.available ? "#000" : "#999",
          fontSize: "16px",
          lineHeight: 1.4,
          flexShrink: 0,
        }}
      >
        {service.title}
      </Title>
      
      <Paragraph
        style={{
          color: service.available ? "#666" : "#999",
          marginBottom: "20px",
          fontSize: "14px",
          lineHeight: 1.5,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {service.description}
      </Paragraph>
      
      {service.available ? (
        <Button
          type="link"
          style={{
            color: serviceColor,
            fontWeight: 600,
            fontSize: "14px",
            padding: "0",
            height: "auto",
            marginTop: "auto",
          }}
          onClick={(e) => {
            e.stopPropagation();
            navigate(service.link);
          }}
        >
          Подробнее →
        </Button>
      ) : (
        <Paragraph style={{ color: "#999", fontSize: "12px", margin: 0, marginTop: "auto" }}>
          Сервис в разработке
        </Paragraph>
      )}
    </Motion.div>
  );
};

// Кастомная карточка для шагов
const CustomStepCard = ({ step, title, description, icon }) => {
  const serviceColor = "#fa8c16";

  return (
    <Motion.div
      style={{
        textAlign: "center",
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: "16px",
        padding: "30px 20px",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
        border: `1px solid ${serviceColor}20`,
        height: "100%",
        width: "100%",
        cursor: "default",
      }}
      whileHover={{
        transform: "translateY(-5px)",
        boxShadow: "0 15px 30px rgba(250, 140, 22, 0.1)",
        border: `1px solid ${serviceColor}40`,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: serviceColor,
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 20px",
          fontSize: "24px",
          fontWeight: "bold",
          border: `3px solid ${serviceColor}30`,
        }}
      >
        {step}
      </div>
      
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "12px",
          backgroundColor: `${serviceColor}15`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 15px",
        }}
      >
        <div style={{ fontSize: "24px", color: serviceColor }}>
          {icon}
        </div>
      </div>
      
      <Title level={4} style={{ marginBottom: "15px", fontSize: "18px", marginTop: 0 }}>
        {title}
      </Title>
      <Paragraph style={{ color: "#666", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>
        {description}
      </Paragraph>
    </Motion.div>
  );
};

const OutsourcingPage = () => {
  const navigate = useNavigate();
  const serviceColor = "#fa8c16";

  const services = [
    {
      title: "Бухгалтерское обслуживание",
      icon: <CalculatorOutlined />,
      description: "Полный комплекс бухгалтерских и налоговых услуг",
      available: true,
      link: "/services/accounting",
    },
    {
      title: "Юридическое сопровождение",
      icon: <FileTextOutlined />,
      description: "Регистрация бизнеса, договоры, судебная защита",
      available: true,
      link: "/services/legal",
    },
    {
      title: "Управленческая отчетность",
      icon: <BarChartOutlined />,
      description: "Финансовый анализ, бюджетирование, планирование",
      available: true,
      link: "/services/management",
    },
    {
      title: "Страхование",
      icon: <InsuranceOutlined />,
      description: "Все виды страхования для бизнеса и сотрудников",
      available: false,
      comingSoon: "Скоро появится",
    },
    {
      title: "Поиск и подбор персонала",
      icon: <SearchOutlined />,
      description: "Полный цикл подбора и оценки кандидатов",
      available: false,
      comingSoon: "В разработке",
    },
  ];

  const benefits = [
    {
      title: "Экономия ресурсов",
      description: "Сокращаем расходы на содержание штатных специалистов",
      icon: <DollarOutlined />,
    },
    {
      title: "Профессионализм",
      description: "Работают эксперты с опытом более 20 лет",
      icon: <TeamOutlined />,
    },
    {
      title: "Масштабируемость",
      description: "Услуги подстраиваются под рост вашего бизнеса",
      icon: <AreaChartOutlined />,
    },
    {
      title: "Концентрация на бизнесе",
      description: "Вы занимаетесь развитием, мы — рутиной",
      icon: <RocketOutlined />,
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Анализ",
      description: "Оцениваем текущие процессы и потребности",
      icon: <FileProtectOutlined />,
    },
    {
      step: 2,
      title: "План",
      description: "Разрабатываем индивидуальный план передачи",
      icon: <SettingOutlined />,
    },
    {
      step: 3,
      title: "Интеграция",
      description: "Внедряем процессы и настраиваем взаимодействие",
      icon: <SyncOutlined />,
    },
    {
      step: 4,
      title: "Поддержка",
      description: "Обеспечиваем непрерывную работу и отчетность",
      icon: <UserOutlined />,
    },
  ];

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ height: "60px" }}></div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Card
          style={{
            borderRadius: "20px",
            border: "none",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              background: `linear-gradient(135deg, ${serviceColor} 0%, #d46b08 100%)`,
              padding: "60px 40px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                }}
              >
                <BuildOutlined style={{ fontSize: "48px", color: "white" }} />
              </div>
              
              <Title level={1} style={{ color: "white", marginBottom: "20px" }}>
                Аутсорсинг бизнес-процессов
              </Title>
              
              <Paragraph style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.9)", maxWidth: "800px", margin: "0 auto" }}>
                Передавайте непрофильные функции на обслуживание профессионалам и сосредоточьтесь на развитии бизнеса
              </Paragraph>
            </Motion.div>
          </div>

          <div style={{ padding: "60px 40px" }}>
            {/* Introduction */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Paragraph
                style={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  color: "#000",
                  marginBottom: "60px",
                  textAlign: "center",
                }}
              >
                Мы берем на себя рутинные бизнес-процессы, позволяя вам сосредоточиться на стратегическом развитии компании. 
                От бухгалтерии до подбора персонала — комплексный подход к оптимизации вашего бизнеса.
              </Paragraph>
            </Motion.div>

            {/* Benefits Section */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "50px" }}>
                Преимущества аутсорсинга
              </Title>
              
              <Row gutter={[32, 32]} justify="center">
                {benefits.map((benefit, index) => (
                  <Col xs={24} sm={12} md={6} key={index} style={{ display: "flex" }}>
                    <CustomBenefitCard
                      icon={benefit.icon}
                      title={benefit.title}
                      description={benefit.description}
                    />
                  </Col>
                ))}
              </Row>
            </Motion.div>

            <Divider style={{ margin: "60px 0" }} />

            {/* Services Section */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "50px" }}>
                Наши услуги аутсорсинга
              </Title>
              
              <Row gutter={[24, 24]} justify="center">
                {services.map((service, index) => (
                  <Col xs={24} sm={12} md={8} lg={4.8} key={index} style={{ display: "flex" }}>
                    <CustomServiceCard service={service} />
                  </Col>
                ))}
              </Row>
            </Motion.div>

            <Divider style={{ margin: "60px 0" }} />

            {/* How it Works Section */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "50px" }}>
                Как передать процессы на аутсорсинг?
              </Title>
              
              <Row gutter={[32, 32]} justify="center">
                {steps.map((item, index) => (
                  <Col xs={24} sm={12} md={6} key={index} style={{ display: "flex" }}>
                    <CustomStepCard
                      step={item.step}
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                    />
                  </Col>
                ))}
              </Row>
            </Motion.div>

            {/* CTA Section */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <div
                style={{
                  backgroundColor: serviceColor,
                  borderRadius: "20px",
                  padding: "60px 40px",
                  textAlign: "center",
                  marginTop: "60px",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Декоративные элементы */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50px",
                    right: "-50px",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    left: "-30px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <Title level={2} style={{ color: "white", marginBottom: "20px" }}>
                    Готовы оптимизировать бизнес-процессы?
                  </Title>
                  
                  <Paragraph style={{ fontSize: "18px", marginBottom: "40px", opacity: 0.9 }}>
                    Оставьте заявку и получите бесплатный аудит ваших бизнес-процессов
                  </Paragraph>
                  
                  <Space size="large" wrap style={{ justifyContent: "center" }}>
                    <CustomCTAButton
                      variant="primary"
                      onClick={() => navigate("/contacts")}
                      icon={<PhoneOutlined />}
                    >
                      Получить консультацию
                    </CustomCTAButton>
                    
                    <CustomCTAButton
                      variant="secondary"
                      onClick={() => navigate("/pricing")}
                    >
                      Узнать цены
                    </CustomCTAButton>
                  </Space>
                  
                  {/* Дополнительный текст под кнопками */}
                  <Paragraph 
                    style={{ 
                      fontSize: "14px", 
                      marginTop: "24px", 
                      opacity: 0.8,
                      fontStyle: "italic"
                    }}
                  >
                    Первая консультация — бесплатно
                  </Paragraph>
                </div>
              </div>
            </Motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OutsourcingPage;