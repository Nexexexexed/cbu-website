import React from "react";
import {
  Card,
  Button,
  Typography,
  Row,
  Col,
  Divider,
  Space,
} from "antd";
import {
  FileTextOutlined,
  PhoneOutlined,
  CheckOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const LegalPage = () => {
  const navigate = useNavigate();
  const serviceColor = "#1890ff";

  const sections = [
    {
      title: "Регистрация и сопровождение бизнеса",
      items: [
        "Регистрация юридических лиц и ИП",
        "Внесение изменений в учредительные документы",
        "Подготовка решений собраний участников",
        "Оформление выхода участников и продажи долей",
        "Смена исполнительных органов и юридического адреса",
        "Регистрация изменений в ЕГРЮЛ/ЕГРИП",
      ],
    },
    {
      title: "Документарная поддержка",
      items: [
        "Консультации в области гражданского и административного права",
        "Составление исковых заявлений, апелляционных жалоб, возражений",
        "Подготовка претензий и договоров любой сложности",
        "Правовая экспертиза договоров и дополнительных соглашений",
        "Составление протоколов разногласий",
      ],
    },
    {
      title: "Судебная защита",
      items: [
        "Представление интересов в судах общей юрисдикции",
        "Представительство в арбитражных судах",
        "Апелляционное и кассационное сопровождение",
        "Досудебная претензионная работа",
        "Взыскание проблемной дебиторской задолженности",
      ],
    },
    {
      title: "Специализированные услуги",
      items: [
        "Абонентское обслуживание юридических лиц",
        "Юридическое сопровождение сделок",
        "Сопровождение сделок с коммерческой и жилой недвижимостью",
        "Решение трудовых споров",
        "Сопровождение процедур банкротства юридических лиц",
        "Ведение исполнительных производств",
      ],
    },
  ];

  const features = [
    "Регистрация и ликвидация бизнеса",
    "Составление и экспертиза договоров",
    "Судебное представительство",
    "Взыскание дебиторской задолженности",
    "Трудовые споры",
    "Сопровождение банкротства",
  ];

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{height:"60px"}}></div>

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
              background: `linear-gradient(135deg, ${serviceColor} 0%, #096dd9 100%)`,
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
                <FileTextOutlined style={{ fontSize: "48px", color: "white" }} />
              </div>
              
              <Title level={1} style={{ color: "white", marginBottom: "20px" }}>
                Юридическое сопровождение
              </Title>
              
              <Paragraph style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.9)", maxWidth: "800px", margin: "0 auto" }}>
                Правовая защита и консультации для вашего бизнеса. Защитим ваши интересы в любой ситуации.
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
                  marginBottom: "40px",
                  textAlign: "center",
                }}
              >
                Зарегистрируем новый бизнес, внесем изменения, составим договор, возьмем на себя претензионно-исковую работу, 
                представим интересы в суде. Полный спектр юридических услуг для защиты вашего бизнеса.
              </Paragraph>
            </Motion.div>

            <Divider style={{ margin: "40px 0" }} />

            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "40px" }}>
                Основные направления
              </Title>
              
              <Row gutter={[24, 24]}>
                {features.map((feature, index) => (
                  <Col xs={24} sm={12} md={8} key={index}>
                    <div
                      style={{
                        backgroundColor: "#f8f9fa",
                        borderRadius: "12px",
                        padding: "20px",
                        height: "100%",
                        borderLeft: `4px solid ${serviceColor}`,
                      }}
                    >
                      <CheckOutlined style={{ color: serviceColor, fontSize: "20px", marginBottom: "15px" }} />
                      <Paragraph style={{ margin: 0, fontWeight: 500 }}>{feature}</Paragraph>
                    </div>
                  </Col>
                ))}
              </Row>
            </Motion.div>

            <Divider style={{ margin: "60px 0" }} />

            {sections.map((section, sectionIndex) => (
              <Motion.div 
                key={sectionIndex} 
                variants={fadeInUp} 
                initial="initial" 
                animate="animate"
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div style={{ marginBottom: "50px" }}>
                  <Title level={3} style={{ color: serviceColor, marginBottom: "30px", textAlign: "center" }}>
                    {section.title}
                  </Title>
                  
                  <Row gutter={[24, 24]}>
                    {section.items.map((item, itemIndex) => (
                      <Col xs={24} sm={12} key={itemIndex}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "15px",
                            padding: "20px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              backgroundColor: serviceColor,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <span style={{ color: "white", fontSize: "12px", fontWeight: "bold" }}>
                              {itemIndex + 1}
                            </span>
                          </div>
                          <Paragraph style={{ margin: 0, fontSize: "16px" }}>{item}</Paragraph>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Motion.div>
            ))}

            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Divider style={{ margin: "60px 0" }} />
              
              <div
                style={{
                  backgroundColor: "#e6f7ff",
                  borderRadius: "20px",
                  padding: "50px",
                  textAlign: "center",
                  border: `2px solid ${serviceColor}40`,
                }}
              >
                <Title level={3} style={{ marginBottom: "20px", color: "#000" }}>
                  Наши преимущества
                </Title>
                
                <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>100+</div>
                      <Paragraph style={{ fontWeight: 500 }}>Выигранных дел</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>15+</div>
                      <Paragraph style={{ fontWeight: 500 }}>Лет практики</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>24/7</div>
                      <Paragraph style={{ fontWeight: 500 }}>Юридическая поддержка</Paragraph>
                    </div>
                  </Col>
                </Row>
              </div>
            </Motion.div>

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
                  Нужна юридическая защита бизнеса?
                </Title>
                
                <Paragraph style={{ fontSize: "18px", marginBottom: "40px", opacity: 0.9 }}>
                  Закажите консультацию юриста и получите план защиты ваших интересов
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

export default LegalPage;