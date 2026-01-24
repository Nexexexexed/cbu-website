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
  ArrowLeftOutlined,
  ClockCircleOutlined,
  BuildOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
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
      icon: "💸",
    },
    {
      title: "Профессионализм",
      description: "Работают эксперты с опытом более 20 лет",
      icon: "🎯",
    },
    {
      title: "Масштабируемость",
      description: "Услуги подстраиваются под рост вашего бизнеса",
      icon: "📈",
    },
    {
      title: "Концентрация на бизнесе",
      description: "Вы занимаетесь развитием, мы — рутиной",
      icon: "🚀",
    },
  ];

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <div style={{height:"60px"}}></div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>


        <Card
          style={{
            borderRadius: "20px",
            border: "none",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
          }}
        >
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

            {/* Преимущества аутсорсинга */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "50px" }}>
                Преимущества аутсорсинга
              </Title>
              
              <Row gutter={[32, 32]}>
                {benefits.map((benefit, index) => (
                  <Col xs={24} sm={12} md={6} key={index}>
                    <div
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "16px",
                        padding: "30px 20px",
                        textAlign: "center",
                        height: "100%",
                        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
                        border: `1px solid ${serviceColor}20`,
                      }}
                    >
                      <div style={{ fontSize: "48px", marginBottom: "20px" }}>{benefit.icon}</div>
                      <Title level={4} style={{ marginBottom: "15px" }}>{benefit.title}</Title>
                      <Paragraph style={{ color: "#666", margin: 0 }}>{benefit.description}</Paragraph>
                    </div>
                  </Col>
                ))}
              </Row>
            </Motion.div>

            <Divider style={{ margin: "60px 0" }} />

            {/* Услуги аутсорсинга */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "50px" }}>
                Наши услуги аутсорсинга
              </Title>
              
              <Row gutter={[32, 32]}>
                {services.map((service, index) => (
                  <Col xs={24} sm={12} md={6} key={index}>
                    <Motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card
                        hoverable={service.available}
                        style={{
                          borderRadius: "16px",
                          border: `1px solid ${service.available ? serviceColor : "#e8e8e8"}`,
                          textAlign: "center",
                          height: "100%",
                          position: "relative",
                          backgroundColor: service.available ? "#fff" : "#fafafa",
                          opacity: service.available ? 1 : 0.7,
                        }}
                        onClick={service.available ? () => navigate(service.link) : undefined}
                      >
                        {!service.available && (
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                            }}
                          >
                            <Tag color="default" style={{ fontSize: "12px" }}>
                              <ClockCircleOutlined style={{ marginRight: "4px" }} />
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
                            margin: "0 auto 25px",
                          }}
                        >
                          <div style={{ fontSize: "32px", color: service.available ? serviceColor : "#999" }}>
                            {service.icon}
                          </div>
                        </div>
                        
                        <Title level={4} style={{ marginBottom: "15px", color: service.available ? "#000" : "#999" }}>
                          {service.title}
                        </Title>
                        
                        <Paragraph style={{ color: service.available ? "#666" : "#999", marginBottom: "20px" }}>
                          {service.description}
                        </Paragraph>
                        
                        {service.available ? (
                          <Button
                            type="link"
                            style={{ color: serviceColor, fontWeight: 600 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(service.link);
                            }}
                          >
                            Подробнее →
                          </Button>
                        ) : (
                          <Paragraph style={{ color: "#999", fontSize: "12px", margin: 0 }}>
                            Сервис в разработке
                          </Paragraph>
                        )}
                      </Card>
                    </Motion.div>
                  </Col>
                ))}
              </Row>
            </Motion.div>

            <Divider style={{ margin: "60px 0" }} />

            {/* Как это работает */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "50px" }}>
                Как передать процессы на аутсорсинг?
              </Title>
              
              <Row gutter={[32, 32]}>
                {[
                  { step: 1, title: "Анализ", description: "Оцениваем текущие процессы и потребности" },
                  { step: 2, title: "План", description: "Разрабатываем индивидуальный план передачи" },
                  { step: 3, title: "Интеграция", description: "Внедряем процессы и настраиваем взаимодействие" },
                  { step: 4, title: "Поддержка", description: "Обеспечиваем непрерывную работу и отчетность" },
                ].map((item, index) => (
                  <Col xs={24} sm={12} md={6} key={index}>
                    <div
                      style={{
                        textAlign: "center",
                        position: "relative",
                      }}
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
                        }}
                      >
                        {item.step}
                      </div>
                      
                      <Title level={4} style={{ marginBottom: "15px" }}>{item.title}</Title>
                      <Paragraph style={{ color: "#666" }}>{item.description}</Paragraph>
                    </div>
                  </Col>
                ))}
              </Row>
            </Motion.div>

            {/* CTA секция */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <div
                style={{
                  backgroundColor: serviceColor,
                  borderRadius: "20px",
                  padding: "60px 40px",
                  textAlign: "center",
                  marginTop: "60px",
                  color: "white",
                }}
              >
                <Title level={2} style={{ color: "white", marginBottom: "20px" }}>
                  Готовы оптимизировать бизнес-процессы?
                </Title>
                
                <Paragraph style={{ fontSize: "18px", marginBottom: "40px", opacity: 0.9 }}>
                  Оставьте заявку и получите бесплатный аудит ваших бизнес-процессов
                </Paragraph>
                
                <Space size="large">
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "white",
                      borderColor: "white",
                      color: serviceColor,
                      height: "56px",
                      padding: "0 40px",
                      fontWeight: 600,
                      fontSize: "16px",
                    }}
                    onClick={() => navigate("/contacts")}
                    icon={<PhoneOutlined />}
                  >
                    Получить консультацию
                  </Button>
                  
                  <Button
                    type="default"
                    size="large"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "white",
                      color: "white",
                      height: "56px",
                      padding: "0 40px",
                      fontWeight: 600,
                    }}
                    onClick={() => navigate("/pricing")}
                  >
                    Узнать цены
                  </Button>
                </Space>
              </div>
            </Motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OutsourcingPage;