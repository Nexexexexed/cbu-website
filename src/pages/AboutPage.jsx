import React from "react";
import {
  Row,
  Col,
  Typography,
  Divider,
  Card,
  Space,
  Tag,
} from "antd";
import {
  PhoneOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  BarChartOutlined,
  TeamOutlined,
  UserOutlined,
  AuditOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { motion as Motion } from "framer-motion";

// Импортируем фото сотрудников
import elenaPhoto from "../assets/images/about_photo.jpg";
import yuliaPhoto from "../assets/images/about_photo.jpg";
import ekaterinaPhoto from "../assets/images/about_photo.jpg";
import lyudmilaPhoto from "../assets/images/about_photo.jpg";
import tatyanaPhoto from "../assets/images/about_photo.jpg";

const { Title, Paragraph, Text } = Typography;

// Анимации
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// ДАННЫЕ О СОТРУДНИКАХ - ПОЛНОСТЬЮ ИЗ ВАШЕГО ТЕКСТА
const teamMembers = [
  {
    id: 1,
    name: "Елена",
    role: "Опытный специалист по бухгалтерскому, налоговому и управленческому учету",
    department: "Отдел бухгалтерского обслуживания",
    departmentIcon: <CalculatorOutlined />,
    extension: "1",
    photo: elenaPhoto,
    experience: "Более 20 лет",
    fullDescription: `Елена — опытный специалист по бухгалтерскому, налоговому и управленческому учету с более чем 20-летним стажем работы в различных отраслях, включая торговлю, строительство, логистику, производство и IT-сферу.`,
    competencies: [
      "Владеет полным циклом бухгалтерского учета в 1С:Бухгалтерия, 1С:КА, 1С:ERP, 1С: ЗУП",
      "Уверенно ориентируется в российском налоговом законодательстве (НДС, налог на прибыль, УСН, НДФЛ)",
      "Проводит глубокий анализ управленческой отчетности для оптимизации затрат и повышения эффективности бизнеса"
    ],
    specialization: [
      "Ведение бухгалтерского и налогового учета 'с нуля' для малых и средних предприятий",
      "Подготовка и сдача отчетности в контролирующие органы",
      "Разработка управленческих бюджетов, cash-flow прогнозов и KPI-анализа",
      "Аудит и восстановление учета, минимизации налоговых рисков",
      "Консультации по налоговой оптимизации и внедрению автоматизированных систем учета"
    ],
    education: "Обладает дипломом по экономике и сертификатом профессионального бухгалтера.",
    approach: "Ее подход — это не только соблюдение норм, но и стратегическая поддержка для роста вашего бизнеса. Работает удаленно, гарантируя конфиденциальность и точность."
  },
  {
    id: 2,
    name: "Юлия",
    role: "Высококвалифицированный юрист",
    department: "Отдел юридического сопровождения",
    departmentIcon: <FileTextOutlined />,
    extension: "2",
    photo: yuliaPhoto,
    experience: "20 лет",
    fullDescription: `Юлия — высококвалифицированный юрист с внушительным 20-летним стажем, чья экспертиза охватывает широчайший спектр правовых вопросов. За годы практики она успешно реализовала проекты в гражданском, корпоративном, трудовом и семейном праве, зарекомендовав себя как надежный защитник интересов бизнеса и частных лиц.`,
    competencies: [
      "Полное юридическое сопровождение бизнеса: от регистрации компаний и разработки сложнейших многоуровневых контрактов до правового аудита и структурирования сделок",
      "Судебное представительство: успешный опыт ведения дел в арбитражных судах и судах общей юрисдикции всех инстанций, включая споры по взысканию задолженностей, защите интеллектуальной собственности и оспариванию решений государственных органов",
      "Недвижимость и строительство: экспертное сопровождение сделок купли-продажи, аренды, а также решение вопросов, связанных с земельным правом и легализацией объектов",
      "Семейное и наследственное право: деликатное и профессиональное решение вопросов раздела имущества и оформления наследственных прав"
    ],
    education: "Сочетает в себе фундаментальные академические знания и колоссальный практический опыт.",
    approach: "Позволяет находить нестандартные и эффективные решения даже в самых запутанных правовых ситуациях. Ее работа базируется на принципах безупречной этики, строгой конфиденциальности и ориентации на реальный результат для клиента."
  },
  {
    id: 3,
    name: "Екатерина",
    role: "Ведущий эксперт в области внешнеэкономической деятельности и таможенного права",
    department: "Отдел бухгалтерского обслуживания",
    departmentIcon: <GlobalOutlined />,
    extension: "1", // ИСПРАВЛЕНО: был 2, стало 1
    photo: ekaterinaPhoto,
    experience: "20 лет",
    fullDescription: `Екатерина — ведущий эксперт в области внешнеэкономической деятельности и таможенного права с 20-летним опытом, чья компетенция позволяет компаниям беспрепятственно масштабировать бизнес на международном уровне. Она обладает глубочайшими знаниями национального и международного законодательства, что делает ее незаменимым стратегом в вопросах трансграничных поставок и минимизации логистических и юридических рисков.`,
    competencies: [
      "Комплексное сопровождение ВЭД-контрактов: разработка и экспертиза международных договоров любой сложности с учетом инкотермс, валютного контроля и специфики законодательства различных юрисдикций",
      "Таможенное администрирование: филигранная работа с классификацией товаров по ТН ВЭД, расчет таможенной стоимости и оптимизация таможенных платежей в строгом соответствии с законом",
      "Взаимодействие с государственными органами: успешное прохождение таможенных проверок, получение разрешительной документации, лицензий и сертификатов",
      "Минимизация рисков: разработка превентивных стратегий для исключения задержек грузов, корректировок таможенной стоимости и административных правонарушений"
    ],
    approach: "Благодаря своему колоссальному опыту, Екатерина видит процессы ВЭД на несколько шагов вперед, обеспечивая клиентам не только юридическую безопасность, но и значительную экономическую выгоду. Ее подход отличается высокой точностью, умением оперативно реагировать на изменения в постоянно меняющейся глобальной торговой среде и нацеленностью на бесперебойную работу цепочек поставок."
  },
  {
    id: 4,
    name: "Людмила",
    role: "Универсальный специалист по бухгалтерскому учету, кадрам и документообороту",
    department: "Отдел бухгалтерского обслуживания",
    departmentIcon: <TeamOutlined />,
    extension: "1",
    photo: lyudmilaPhoto,
    experience: "Высококвалифицированный специалист",
    fullDescription: `Людмила — универсальный и высококвалифицированный специалист, который уверенно закрывает весь контур бухгалтерского и налогового учета, обеспечивая компании точность цифр, прозрачность процессов и снижение финансовых рисков. Она выстраивает работу так, чтобы учет и документооборот были не «формальностью», а надежной системой контроля и управляемости бизнеса.`,
    competencies: [
      "Ведение бухгалтерского и налогового учета в полном объеме: корректное отражение хозяйственных операций, подготовка регистров, закрытие периодов, формирование бухгалтерской и налоговой отчетности",
      "Расчет заработной платы и связанных отчислений: начисления по окладам и сдельной оплате, премии, отпуска, больничные, командировки, удержания, НДФЛ и страховые взносы",
      "Кадровое делопроизводство и воинский учет: оформление приема, перевода, увольнения, ведение личных дел, графиков отпусков, табелей, локальных нормативных актов",
      "Организация документооборота: выстраивает понятные маршруты согласования первички, контролирует полноту комплектов документов, сроки предоставления и правильность оформления, в том числе при работе с электронным документооборотом"
    ],
    approach: "Ее подход сочетает точность расчета, соблюдение сроков и обеспечение порядка в документах. В результате руководитель получает надежные данные для управленческих решений, а бизнес — стабильную и предсказуемую учетную функцию."
  },
  {
    id: 5,
    name: "Татьяна",
    role: "Высококвалифицированный юрист (Корпоративное право, недвижимость, банкротство)",
    department: "Отдел юридического сопровождения",
    departmentIcon: <SafetyCertificateOutlined />,
    extension: "2",
    photo: tatyanaPhoto,
    experience: "Внушительный стаж",
    fullDescription: `Татьяна — высококвалифицированный юрист с внушительным стажем работы, чья экспертиза охватывает как защиту корпоративных интересов, так и комплексную помощь частным клиентам. Ее профессиональный путь сформировал глубокие знания в области гражданского, трудового и корпоративного права, что позволяет эффективно решать правовые задачи любого масштаба и сложности.`,
    competencies: [
      "Управление правовыми рисками бизнеса: от структурирования сложных многоуровневых сделок до проведения тщательного аудита документации",
      "Работа с физическими лицами: сопровождение сделок с недвижимостью, обеспечение полной юридической чистоты процессов купли-продажи, мены или дарения",
      "Банкротство юридических лиц: помощь компаниям законно и грамотно пройти процедуру освобождения от долговых обязательств",
      "Претензионно-исковая работа и выстраивание устойчивых правовых позиций на основе актуальной судебной практики"
    ],
    approach: "Предотвращает конфликты еще на этапе планирования, а в сложных ситуациях находит наиболее эффективные пути их разрешения. Сочетание стратегического мышления в бизнесе и внимательного подхода к личным делам граждан позволяет Татьяне быть универсальным и незаменимым правовым консультантом."
  }
];

const AboutPage = () => {
  return (
    <div className="about-page" style={{ minHeight: "100vh" }}>
      {/* Hero секция */}
      <Motion.section
        style={{
          padding: "120px 20px 80px",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e6e9ec 100%)",
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Motion.div variants={fadeInUp} initial="initial" animate="animate">
            <Title
              level={1}
              style={{
                color: "#000000",
                fontSize: "3rem",
                marginBottom: "24px",
              }}
            >
              Наша команда экспертов
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#55646e",
                lineHeight: 1.6,
              }}
            >
              <Text strong style={{ color: "#19be7d", fontSize: "20px" }}>
                КЕЙС КОНСАЛТИНГ
              </Text>{" "}
              — это объединение профессионалов с многолетним опытом в бухгалтерии, 
              юриспруденции и внешнеэкономической деятельности. Каждый специалист 
              нашей команды — признанный эксперт в своей области, готовый предложить 
              вам комплексные решения для развития бизнеса.
            </Paragraph>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Секция с сотрудниками */}
      <Motion.section
        style={{ padding: "60px 20px", backgroundColor: "#ffffff" }}
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {teamMembers.map((member, index) => (
            <Motion.div key={member.id} variants={fadeInUp}>
              <Row
                gutter={[40, 40]}
                style={{
                  marginBottom: index === teamMembers.length - 1 ? 0 : "80px",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
                align="top"
              >
                {/* Колонка с фото */}
                <Col xs={24} md={10} lg={8}>
                  <Motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        border: "2px solid #f0f0f0",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                      }}
                      bodyStyle={{ padding: 0 }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        style={{
                          width: "100%",
                          height: "auto",
                          aspectRatio: "1/1.1",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </Card>
                  </Motion.div>
                </Col>

                {/* Колонка с информацией */}
                <Col xs={24} md={14} lg={16}>
                  <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                    <div>
                      <Space align="center" wrap>
                        <Title level={2} style={{ margin: 0, color: "#000000" }}>
                          {member.name}
                        </Title>
                        <Tag
                          icon={member.departmentIcon}
                          color="#19be7d"
                          style={{
                            borderRadius: "20px",
                            padding: "4px 12px",
                            fontWeight: 500,
                          }}
                        >
                          {member.department}
                        </Tag>
                      </Space>
                      <Title
                        level={4}
                        style={{ marginTop: "8px", color: "#55646e", fontWeight: 400 }}
                      >
                        {member.role}
                      </Title>
                    </div>

                    <Divider style={{ margin: "12px 0" }} />

                    {/* Полное описание из вашего текста */}
                    <Paragraph style={{ fontSize: "16px", color: "#000000", lineHeight: 1.7 }}>
                      {member.fullDescription}
                    </Paragraph>

                    {/* Ключевые компетенции */}
                    <div style={{ marginTop: "16px" }}>
                      <Text strong style={{ fontSize: "16px", color: "#19be7d" }}>
                        Ключевые компетенции:
                      </Text>
                      <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
                        {member.competencies.map((comp, i) => (
                          <li key={i} style={{ marginBottom: "8px" }}>
                            <Paragraph style={{ marginBottom: 0, color: "#55646e" }}>
                              {comp}
                            </Paragraph>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Специализация (только для Елены) */}
                    {member.specialization && (
                      <div style={{ marginTop: "16px" }}>
                        <Text strong style={{ fontSize: "16px", color: "#19be7d" }}>
                          Специализируется на:
                        </Text>
                        <ul style={{ marginTop: "12px", paddingLeft: "20px" }}>
                          {member.specialization.map((spec, i) => (
                            <li key={i} style={{ marginBottom: "8px" }}>
                              <Paragraph style={{ marginBottom: 0, color: "#55646e" }}>
                                {spec}
                              </Paragraph>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Образование (если есть) */}
                    {member.education && (
                      <Paragraph style={{ fontStyle: "italic", color: "#8a9aa4", marginTop: "8px" }}>
                        {member.education}
                      </Paragraph>
                    )}

                    {/* Подход к работе */}
                    <Paragraph style={{ 
                      backgroundColor: "#f0faf5", 
                      padding: "16px", 
                      borderRadius: "8px", 
                      borderLeft: `4px solid #19be7d`,
                      marginTop: "16px"
                    }}>
                      <Text strong style={{ color: "#000000" }}>
                        Подход к работе:{" "}
                      </Text>
                      {member.approach}
                    </Paragraph>
                  </Space>
                </Col>
              </Row>
              {index < teamMembers.length - 1 && (
                <Divider style={{ margin: "60px 0" }} />
              )}
            </Motion.div>
          ))}
        </div>
      </Motion.section>

      {/* Призыв к действию */}
      <Motion.section
        style={{
          padding: "80px 20px",
          background: "linear-gradient(135deg, #19be7d 0%, #14a36b 100%)",
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Motion.div variants={fadeInUp}>
            <Title level={2} style={{ color: "#ffffff", marginBottom: "24px" }}>
              Готовы обсудить ваш проект?
            </Title>
            <Paragraph
              style={{
                color: "#ffffff",
                fontSize: "18px",
                marginBottom: "32px",
                opacity: 0.9,
              }}
            >
              Позвоните нам — мы подберем эксперта под ваши задачи
            </Paragraph>
            <Space size="large">
              <a
                href="tel:+79301208782"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  backgroundColor: "#ffffff",
                  color: "#19be7d",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
              >
                <PhoneOutlined />
                +7 (930) 120-87-82
              </a>
            </Space>
          </Motion.div>
        </div>
      </Motion.section>
    </div>
  );
};

export default AboutPage;