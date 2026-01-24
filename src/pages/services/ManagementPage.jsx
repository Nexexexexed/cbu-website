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
  BarChartOutlined,
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

const ManagementPage = () => {
  const navigate = useNavigate();
  const serviceColor = "#722ed1";

  const sections = [
    {
      title: "Бюджетирование и планирование",
      items: [
        "Составление бюджета доходов и расходов на месяц/квартал/год",
        "Разработка системы финансового учета (ДДС, ОПиУ)",
        "Создание бюджета компании на период по запросу",
        "Платежный календарь",
        "Прогнозирование движения денежных средств",
        "Предупреждение и устранение кассовых разрывов",
      ],
    },
    {
      title: "Финансовый анализ",
      items: [
        "Расчет маржинальной, операционной прибыли, чистой прибыли",
        "Сбор отчетов о прибылях и убытках",
        "Расчет себестоимости, наценки, рентабельности",
        "Контроль показателей себестоимости",
        "Расчет точки безубыточности",
        "Расчет среднего чека",
      ],
    },
    {
      title: "Аналитика и оптимизация",
      items: [
        "Оценка структуры бизнеса и эффективности подразделений",
        "Подсветка неэффективных подразделений и процессов",
        "Оценка маржинальности и рентабельности",
        "Финансовое моделирование",
        "Управление рисками",
      ],
    },
    {
      title: "Регламентация и мотивация",
      items: [
        "Разработка системы мотивации персонала",
        "Создание внутренних регламентов компании",
        "Настройка бизнес-процессов",
        "Создание управленческих регламентов",
        "Рекомендации по управлению ресурсами и запасами",
      ],
    },
  ];

  const features = [
    "Бюджетирование доходов и расходов",
    "Прогнозирование денежных потоков",
    "Расчет себестоимости и рентабельности",
    "Анализ эффективности подразделений",
    "Разработка KPI и мотивации",
    "Создание управленческих регламентов",
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
              background: `linear-gradient(135deg, ${serviceColor} 0%, #531dab 100%)`,
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
                <BarChartOutlined style={{ fontSize: "48px", color: "white" }} />
              </div>
              
              <Title level={1} style={{ color: "white", marginBottom: "20px" }}>
                Управленческая отчетность
              </Title>
              
              <Paragraph style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.9)", maxWidth: "800px", margin: "0 auto" }}>
                Финансовый анализ и стратегическое планирование для роста вашего бизнеса
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
                Посчитаем доходы и расходы, составим бюджет, спрогнозируем и устраним кассовые разрывы, 
                подсветим неэффективные процессы. Прозрачное управление финансами для принятия верных решений.
              </Paragraph>
            </Motion.div>

            <Divider style={{ margin: "40px 0" }} />

            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={3} style={{ textAlign: "center", marginBottom: "40px" }}>
                Ключевые инструменты
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
                  backgroundColor: "#f9f0ff",
                  borderRadius: "20px",
                  padding: "50px",
                  textAlign: "center",
                  border: `2px solid ${serviceColor}40`,
                }}
              >
                <Title level={3} style={{ marginBottom: "20px", color: "#000" }}>
                  Результаты для бизнеса
                </Title>
                
                <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>30%</div>
                      <Paragraph style={{ fontWeight: 500 }}>Снижение затрат в среднем</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>25%</div>
                      <Paragraph style={{ fontWeight: 500 }}>Рост прибыли клиентов</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>100%</div>
                      <Paragraph style={{ fontWeight: 500 }}>Контроль финансов</Paragraph>
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
                  Хотите видеть реальную картину бизнеса?
                </Title>
                
                <Paragraph style={{ fontSize: "18px", marginBottom: "40px", opacity: 0.9 }}>
                  Внедрите управленческий учет и получите полный контроль над финансами
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

export default ManagementPage;