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

const AccountingPage = () => {
  const navigate = useNavigate();
  const serviceColor = "#19be7d";

  const sections = [
    {
      title: "Основные услуги",
      items: [
        "Постановка, ведение, восстановление бухгалтерского и налогового учета",
        "Составление и подача отчетности в контролирующие органы",
        "Планирование налоговой нагрузки",
        "Ведение кадрового учета",
        "Консультации по бухгалтерским и налоговым вопросам",
        "Работа с первичной документацией",
        "Формирование и ведение архива документов",
        "Расчет заработной платы и сопутствующих выплат",
      ],
    },
    {
      title: "Специализированные услуги",
      items: [
        "ВЭД сопровождение (составление контрактов, платежные поручения, документы для контролирующих органов)",
        "Оценка налоговой нагрузки и оптимизация",
        "Подтверждение налоговых вычетов",
        "Восстановление бухгалтерского и налогового учета",
        "Консультации по организации бухгалтерского и налогового учета",
      ],
    },
    {
      title: "Отчетность и контроль",
      items: [
        "Ежемесячный предварительный расчет НДС",
        "Своевременная сдача всех видов отчетности",
        "Контроль за соблюдением сроков и требований",
        "Регулярная проверка операций и рекомендации",
        "Работа в 1С Бухгалтерия в рамках тарифа",
      ],
    },
  ];

  const features = [
    "Ведение бухгалтерского и налогового учета",
    "Расчет зарплаты и кадровый учет",
    "Сдача отчетности в контролирующие органы",
    "ВЭД сопровождение",
    "Восстановление учета",
    "Налоговое консультирование",
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
          {/* Заголовок и иконка */}
          <div
            style={{
              background: `linear-gradient(135deg, ${serviceColor} 0%, #14a36b 100%)`,
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
                <CalculatorOutlined style={{ fontSize: "48px", color: "white" }} />
              </div>
              
              <Title level={1} style={{ color: "white", marginBottom: "20px" }}>
                Бухгалтерское обслуживание
              </Title>
              
              <Paragraph style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.9)", maxWidth: "800px", margin: "0 auto" }}>
                Комплекс бухгалтерских услуг для юридических лиц. Постановка, ведение, восстановление бухгалтерского и налогового учета.
              </Paragraph>
            </Motion.div>
          </div>

          {/* Контент */}
          <div style={{ padding: "60px 40px" }}>
            {/* Полное описание */}
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
                Возьмем на себя ведение бухгалтерского и налогового учета вашей компании, рассчитаем зарплату, 
                заведем кадровый учет, сдадим отчетность. Профессиональный подход и гарантия качества.
              </Paragraph>
            </Motion.div>

            <Divider style={{ margin: "40px 0" }} />

            {/* Основные возможности */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "40px" }}>
                Основные возможности
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

            {/* Детализированный контент */}
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

            {/* Преимущества */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Divider style={{ margin: "60px 0" }} />
              
              <div
                style={{
                  backgroundColor: "#f0faf5",
                  borderRadius: "20px",
                  padding: "50px",
                  textAlign: "center",
                  border: `2px solid ${serviceColor}40`,
                }}
              >
                <Title level={3} style={{ marginBottom: "20px", color: "#000" }}>
                  Почему выбирают нас?
                </Title>
                
                <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>20+</div>
                      <Paragraph style={{ fontWeight: 500 }}>Лет опыта</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>99.8%</div>
                      <Paragraph style={{ fontWeight: 500 }}>Точность отчетности</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>24/7</div>
                      <Paragraph style={{ fontWeight: 500 }}>Поддержка клиентов</Paragraph>
                    </div>
                  </Col>
                </Row>
              </div>
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
                  Готовы передать бухгалтерию профессионалам?
                </Title>
                
                <Paragraph style={{ fontSize: "18px", marginBottom: "40px", opacity: 0.9 }}>
                  Оставьте заявку и получите бесплатную консультацию от нашего эксперта
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

export default AccountingPage;