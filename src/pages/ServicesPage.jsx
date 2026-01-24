import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Space,
  Divider,
  Breadcrumb,
  Tag,
} from "antd";
import {
  ArrowLeftOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  BarChartOutlined,
  PhoneOutlined,
  CheckOutlined,
  HomeOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { color, motion as Motion } from "framer-motion";

const { Title, Paragraph, Text } = Typography;

// Анимации
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Данные сервисов
const servicesData = {
  accounting: {
    id: "accounting",
    title: "Бухгалтерское обслуживание",
    icon: <CalculatorOutlined />,
    color: "#19be7d",
    description: "Комплекс бухгалтерских услуг для юридических лиц",
    fullDescription:
      "Возьмем на себя ведение бухгалтерского и налогового учета вашей компании, рассчитаем зарплату, заведем кадровый учет, сдадим отчетность",
    features: [
      "Ведение бухгалтерского и налогового учета",
      "Расчет зарплаты и кадровый учет",
      "Сдача отчетности в контролирующие органы",
      "ВЭД сопровождение",
      "Восстановление учета",
      "Налоговое консультирование",
    ],
    detailedContent: {
      title: "Комплекс бухгалтерских услуг для юридических лиц",
      sections: [
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
      ],
    },
  },
  legal: {
    id: "legal",
    title: "Юридическое сопровождение",
    icon: <FileTextOutlined />,
    color: "#1890ff",
    description: "Правовая защита и консультации для вашего бизнеса",
    fullDescription:
      "Зарегистрируем новый бизнес, внесем изменения, составим договор, возьмем на себя претензионно-исковую работу, представим интересы в суде",
    features: [
      "Регистрация и ликвидация бизнеса",
      "Составление и экспертиза договоров",
      "Судебное представительство",
      "Взыскание дебиторской задолженности",
      "Трудовые споры",
      "Сопровождение банкротства",
    ],
    detailedContent: {
      title: "Юридические услуги для бизнеса",
      sections: [
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
      ],
    },
  },
  management: {
    id: "management",
    title: "Управленческая отчетность",
    icon: <BarChartOutlined />,
    color: "#722ed1",
    description: "Финансовый анализ и стратегическое планирование",
    fullDescription:
      "Посчитаем доходы и расходы, составим бюджет, спрогнозируем и устраним кассовые разрывы, подсветим неэффективные процессы",
    features: [
      "Бюджетирование доходов и расходов",
      "Прогнозирование денежных потоков",
      "Расчет себестоимости и рентабельности",
      "Анализ эффективности подразделений",
      "Разработка KPI и мотивации",
      "Создание управленческих регламентов",
    ],
    detailedContent: {
      title: "Управленческий учет и финансовое планирование",
      sections: [
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
            "Даем рекомендации по управлению ресурсами и запасами",
          ],
        },
      ],
    },
  },
};

const ServicesPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(servicesData.accounting);

  useEffect(() => {
    if (serviceId && servicesData[serviceId]) {
      setActiveService(servicesData[serviceId]);
    } else {
      setActiveService(servicesData.accounting);
    }
  }, [serviceId]);

  const handleServiceSelect = (serviceKey) => {
    navigate(`/services/${serviceKey}`);
  };

  return (
    <div className="services-page" style={{ minHeight: "100vh" }}>
      {/* Хлебные крошки */}
      <Motion.div
        style={{
          padding: "20px 20px 0",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Breadcrumb
          items={[
            {
              title: (
                <>
                  <HomeOutlined />
                  <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    Главная
                  </span>
                </>
              ),
            },
            {
              title: (
                <span onClick={() => navigate("/services")} style={{ cursor: "pointer" }}>
                  Услуги
                </span>
              ),
            },
            {
              title: activeService.title,
            },
          ]}
          style={{ marginBottom: "20px" }}
        />
      </Motion.div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {/* Левая колонка - выбор услуги */}
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Motion.div
              style={{ position: "sticky", top: "100px" }}
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Card
                title={
                  <Title level={4} style={{ margin: 0 }}>
                    Наши услуги
                  </Title>
                }
                style={{
                  borderRadius: "12px",
                  border: "1px solid #e6e9ec",
                }}
              >
                <Space direction="vertical" style={{ width: "100%" }}>
                  {Object.values(servicesData).map((service) => (
                    <Button
                      key={service.id}
                      type={activeService.id === service.id ? "primary" : "default"}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        justifyContent: "flex-start",
                        padding: "16px 20px",
                        height: "auto",
                        backgroundColor:
                          activeService.id === service.id ? service.color : "transparent",
                        borderColor:
                          activeService.id === service.id ? service.color : "#d9d9d9",
                      }}
                      onClick={() => handleServiceSelect(service.id)}
                      icon={
                        <div
                          style={{
                            color: activeService.id === service.id ? "#fff" : service.color,
                            fontSize: "20px",
                            marginRight: "12px",
                          }}
                        >
                          {service.icon}
                        </div>
                      }
                    >
                      <div>
                        <div style={{ fontWeight: 600 }}>{service.title}</div>
                        <div
                          style={{
                            fontSize: "12px",
                            opacity: 0.8,
                            marginTop: "4px",
                          }}
                        >
                          {service.description}
                        </div>
                      </div>
                    </Button>
                  ))}
                </Space>

                <Divider style={{ margin: "24px 0" }} />

                <div style={{ textAlign: "center" }}>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "#19be7d",
                      borderColor: "#19be7d",
                      width: "100%",
                    }}
                    onClick={() => navigate("/#contact")}
                    icon={<PhoneOutlined />}
                  >
                    Заказать консультацию
                  </Button>
                  <Paragraph
                    style={{
                      color: "#8a9aa4",
                      fontSize: "12px",
                      marginTop: "12px",
                    }}
                  >
                    Ответим на все вопросы в течение 30 минут
                  </Paragraph>
                </div>
              </Card>
            </Motion.div>
          </Col>

          {/* Правая колонка - детальная информация */}
          <Col xs={24} md={16}>
            <Motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Card
                style={{
                  borderRadius: "12px",
                  border: "1px solid #e6e9ec",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      backgroundColor: `${activeService.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `2px solid ${activeService.color}40`,
                    }}
                  >
                    <div
                      style={{ fontSize: "32px", color: activeService.color }}
                    >
                      {activeService.icon}
                    </div>
                  </div>
                  <div>
                    <Title level={2} style={{ margin: 0, color: "#000" }}>
                      {activeService.title}
                    </Title>
                    <Paragraph
                      style={{
                        color: "#55646e",
                        fontSize: "16px",
                        margin: "8px 0 0",
                      }}
                    >
                      {activeService.description}
                    </Paragraph>
                  </div>
                </div>

                <Divider style={{ margin: "24px 0" }} />

                {/* Полное описание */}
                <Paragraph
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.6,
                    color: "#000",
                    marginBottom: "32px",
                  }}
                >
                  {activeService.fullDescription}
                </Paragraph>

                {/* Основные возможности */}
                <div style={{ marginBottom: "40px" }}>
                  <Title level={4} style={{ marginBottom: "20px" }}>
                    Основные возможности
                  </Title>
                  <Row gutter={[16, 16]}>
                    {activeService.features.map((feature, index) => (
                      <Col xs={24} sm={12} key={index}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                            padding: "12px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px",
                          }}
                        >
                          <CheckOutlined
                            style={{ color: activeService.color, marginTop: "4px" }}
                          />
                          <span style={{ fontSize: "14px" }}>{feature}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Детализированный контент */}
                <div style={{ marginTop: "40px" }}>
                  <Title level={3} style={{ marginBottom: "32px", color: "#000" }}>
                    {activeService.detailedContent.title}
                  </Title>

                  {activeService.detailedContent.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} style={{ marginBottom: "40px" }}>
                      <Title level={4} style={{ marginBottom: "20px", color: "#000" }}>
                        {section.title}
                      </Title>
                      <ul style={{ paddingLeft: "20px", margin: 0 }}>
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            style={{
                              marginBottom: "12px",
                              fontSize: "15px",
                              lineHeight: 1.5,
                              color: "#55646e",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Кнопка CTA */}
                <div
                  style={{
                    backgroundColor: "#f0faf5",
                    borderRadius: "12px",
                    padding: "32px",
                    textAlign: "center",
                    marginTop: "40px",
                    border: "1px solid #b9ebd7",
                  }}
                >
                  <Title level={4} style={{ marginBottom: "16px", color: "#000" }}>
                    Готовы начать сотрудничество?
                  </Title>
                  <Paragraph
                    style={{
                      color: "#55646e",
                      fontSize: "16px",
                      marginBottom: "24px",
                    }}
                  >
                    Оставьте заявку и получите бесплатную консультацию от нашего эксперта
                  </Paragraph>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: activeService.color,
                      borderColor: activeService.color,
                      padding: "0 40px",
                      height: "48px",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                    onClick={() => navigate("/#contact")}
                    icon={<PhoneOutlined />}
                  >
                    Получить консультацию
                  </Button>
                </div>
              </Card>
            </Motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServicesPage;