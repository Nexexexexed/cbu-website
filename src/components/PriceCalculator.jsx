import React, { useState } from 'react';
import {
  Card,
  Typography,
  Row,
  Col,
  Select,
  InputNumber,
  Slider,
  Checkbox,
  Radio,
  Tabs,
  Space,
  Divider,
  ConfigProvider,
  theme,
} from 'antd';
import {
  CalculatorOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// Моковые данные (можно вынести в отдельный файл)
const mockData = {
  basePrices: {
    'Нулевая отчетность': { Патент: 0, 'УСН 6%': 3000, 'УСН 15%': 3500, ОСНО: 5000 },
    Старт: { Патент: 8500, 'УСН 6%': 9500, 'УСН 15%': 15000, ОСНО: 22000 },
    Базовый: { Патент: 13175, 'УСН 6%': 14725, 'УСН 15%': 23250, ОСНО: 34100 },
    Стандарт: { Патент: 22398, 'УСН 6%': 25033, 'УСН 15%': 33713, ОСНО: 49445 },
    Оптимальный: { Патент: 35836, 'УСН 6%': 40052, 'УСН 15%': 48884, ОСНО: 66751 },
    Стабильный: { Патент: 46587, 'УСН 6%': 66086, 'УСН 15%': 70882, ОСНО: 96789 },
    Профессиональный: { Патент: 72210, 'УСН 6%': 102433, 'УСН 15%': 88587, ОСНО: 120986 },
    Максимальный: { Патент: 90262, 'УСН 6%': 128041, 'УСН 15%': 110734, ОСНО: 151233 },
    Индивидуальный: { Патент: null, 'УСН 6%': null, 'УСН 15%': null, ОСНО: null },
  },
  employeeLimits: {
    'Нулевая отчетность': 0,
    Старт: 2,
    Базовый: 4,
    Стандарт: 6,
    Оптимальный: 8,
    Стабильный: 10,
    Профессиональный: 15,
    Максимальный: 20,
    Индивидуальный: Infinity,
  },
  extraEmployeeCost: 1200,
  cashRegisterCost: 1500,
  coefficients: {
    marketplace: 0.2,
    production: 0.2,
    importExport: 0.25,
    separateDivision: 0.25,
    combineSystems: 0.3,
    usnWithVat: 0.25,
  },
  primaryRange: { min: 30, max: 80 },
};

const legalServices = [
  { name: 'Первичная консультация', base: 0, msk: 0 },
  { name: 'Консультация с изучением документов', base: 3000, msk: 5000 },
  { name: 'Подготовка договора', base: 5000, msk: 7000 },
  { name: 'Сопровождение сделок с недвижимостью', base: 30000, msk: 50000 },
  { name: 'Представительство в суде (недвижимость)', base: 'договорная', msk: 'договорная' },
  { name: 'Консультирование юрлиц', base: 5000, msk: 10000 },
  { name: 'Договорная работа (разработка/экспертиза)', base: 3500, msk: 3500 },
  { name: 'Претензионно-исковая работа', base: 50000, msk: 70000 },
  { name: 'Сопровождение исполнительного производства', base: 15000, msk: 30000 },
  { name: 'Трудовые споры', base: 50000, msk: 60000 },
  { name: 'Наследственные споры', base: 30000, msk: 50000 },
  { name: 'Защита прав потребителей', base: 20000, msk: 40000 },
  { name: 'Споры с УК и ресурсоснабжающими', base: 35000, msk: 45000 },
  { name: 'Возмещение ущерба', base: 30000, msk: 40000 },
  { name: 'Трудовые споры (выплаты, компенсации)', base: 30000, msk: 40000 },
  { name: 'Компенсация морального вреда', base: 20000, msk: 40000 },
  { name: 'Споры о ДТП', base: 'договорная', msk: 'договорная' },
];

const serviceColor = '#19be7d';

// Тема для ConfigProvider с зелёным цветом
const greenTheme = {
  token: {
    colorPrimary: serviceColor,
    colorPrimaryHover: '#14a36b',
    colorPrimaryActive: '#0f8a58',
    colorPrimaryBorder: serviceColor,
    colorPrimaryBorderHover: '#14a36b',
    colorPrimaryBg: '#f0faf5',
    colorPrimaryBgHover: '#e6f7ef',
    colorLink: serviceColor,
    colorLinkHover: '#14a36b',
    colorLinkActive: '#0f8a58',
    colorSuccess: serviceColor,
    colorWarning: serviceColor,
    colorError: serviceColor,
    colorInfo: serviceColor,
    borderRadius: 8,
    controlItemBgHover: '#f0faf5',
    controlItemBgActive: '#e6f7ef',
    controlItemBgActiveHover: '#d9f0e6',
  },
  components: {
    Checkbox: {
      colorPrimary: serviceColor,
      colorPrimaryHover: '#14a36b',
    },
    Radio: {
      colorPrimary: serviceColor,
      colorPrimaryHover: '#14a36b',
    },
    Slider: {
      colorPrimary: serviceColor,
      colorPrimaryHover: '#14a36b',
      colorPrimaryBorder: serviceColor,
      colorPrimaryBorderHover: '#14a36b',
    },
    Tabs: {
      colorPrimary: serviceColor,
      colorPrimaryHover: '#14a36b',
      colorPrimaryActive: '#0f8a58',
      inkBarColor: serviceColor,
      itemHoverColor: serviceColor,
      itemSelectedColor: serviceColor,
      itemActiveColor: serviceColor,
    },
    Select: {
      colorPrimary: serviceColor,
      colorPrimaryHover: '#14a36b',
      colorPrimaryActive: '#0f8a58',
      optionSelectedBg: '#f0faf5',
      optionActiveBg: '#e6f7ef',
    },
    InputNumber: {
      colorPrimary: serviceColor,
      colorPrimaryHover: '#14a36b',
      colorPrimaryActive: '#0f8a58',
      activeBorderColor: serviceColor,
      hoverBorderColor: '#14a36b',
    },
    Input: {
      colorPrimary: serviceColor,
      colorPrimaryHover: '#14a36b',
      colorPrimaryActive: '#0f8a58',
      activeBorderColor: serviceColor,
      hoverBorderColor: '#14a36b',
    },
    Button: {
      colorPrimary: serviceColor,
      colorPrimaryHover: '#14a36b',
      colorPrimaryActive: '#0f8a58',
      primaryColor: '#fff',
      primaryShadow: `0 2px 0 ${serviceColor}40`,
    },
  },
};

const PriceCalculator = () => {
  const [activeTab, setActiveTab] = useState('accounting');

  // Состояние для бухгалтерского калькулятора
  const [accounting, setAccounting] = useState({
    plan: 'Старт',
    taxSystem: 'УСН 6%',
    employees: 1,
    cashRegisters: 0,
    marketplaces: false,
    production: false,
    importExport: false,
    separateDivision: false,
    combineSystems: false,
    usnWithVat: false,
    primaryPercent: 0,
    advanceReports: 0,
    advanceChecks: 0,
  });

  // Состояние для юридического калькулятора
  const [legal, setLegal] = useState({
    selectedService: legalServices[0].name,
    region: 'base',
  });

  // Расчёт бухгалтерской стоимости
  const calculateAccountingTotal = () => {
    const { plan, taxSystem, employees, cashRegisters, marketplaces, production, importExport, separateDivision, combineSystems, usnWithVat, primaryPercent, advanceReports, advanceChecks } = accounting;

    let base = mockData.basePrices[plan]?.[taxSystem];
    if (base === null || base === undefined) return 'Индивидуально';
    if (plan === 'Нулевая отчетность') base = 0;

    let total = base;

    const limit = mockData.employeeLimits[plan];
    if (employees > limit) {
      total += (employees - limit) * mockData.extraEmployeeCost;
    }

    total += cashRegisters * mockData.cashRegisterCost;

    let multiplier = 1.0;
    if (marketplaces) multiplier += mockData.coefficients.marketplace;
    if (production) multiplier += mockData.coefficients.production;
    if (importExport) multiplier += mockData.coefficients.importExport;
    if (separateDivision) multiplier += mockData.coefficients.separateDivision;
    if (combineSystems) multiplier += mockData.coefficients.combineSystems;
    if (usnWithVat && (taxSystem === 'УСН 6%' || taxSystem === 'УСН 15%')) {
      multiplier += mockData.coefficients.usnWithVat;
    }

    total *= multiplier;

    if (primaryPercent > 0) {
      total *= (1 + primaryPercent / 100);
    }

    if (advanceReports > 0) {
      total += advanceReports * 1000;
      const extraChecks = Math.max(0, advanceChecks - advanceReports * 10);
      total += extraChecks * 390;
    }

    return Math.round(total);
  };

  const accountingTotal = calculateAccountingTotal();

  const getLegalPrice = () => {
    const service = legalServices.find(s => s.name === legal.selectedService);
    if (!service) return '—';
    const price = legal.region === 'msk' ? service.msk : service.base;
    if (typeof price === 'number') return `от ${price.toLocaleString()} ₽`;
    return price;
  };

  // Обработчики изменений
  const handleAccountingChange = (field, value) => {
    setAccounting(prev => ({ ...prev, [field]: value }));
  };

  const handleLegalChange = (field, value) => {
    setLegal(prev => ({ ...prev, [field]: value }));
  };

  return (
    <ConfigProvider theme={greenTheme}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          style={{
            borderRadius: 20,
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
            border: 'none',
          }}
        >
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            centered
            size="large"
            items={[
              {
                key: 'accounting',
                label: (
                  <span style={{ color: activeTab === 'accounting' ? serviceColor : 'inherit' }}>
                    <CalculatorOutlined /> Бухгалтерские услуги
                  </span>
                ),
                children: (
                  <Row gutter={[32, 32]}>
                    <Col xs={24} md={12}>
                      <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <Card size="small" style={{ borderRadius: 12, border: `1px solid ${serviceColor}20` }}>
                          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <div>
                              <Text strong style={{ fontSize: 16 }}>Тарифный план</Text>
                              <Select
                                value={accounting.plan}
                                onChange={v => handleAccountingChange('plan', v)}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                              >
                                {Object.keys(mockData.basePrices).map(p => (
                                  <Option key={p} value={p}>{p}</Option>
                                ))}
                              </Select>
                            </div>

                            <div>
                              <Text strong style={{ fontSize: 16 }}>Система налогообложения</Text>
                              <Select
                                value={accounting.taxSystem}
                                onChange={v => handleAccountingChange('taxSystem', v)}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                              >
                                <Option value="Патент">Патент</Option>
                                <Option value="УСН 6%">УСН 6%</Option>
                                <Option value="УСН 15%">УСН 15%</Option>
                                <Option value="ОСНО">ОСНО</Option>
                              </Select>
                            </div>

                            <div>
                              <Text strong style={{ fontSize: 16 }}>Количество сотрудников</Text>
                              <InputNumber
                                min={0}
                                value={accounting.employees}
                                onChange={v => handleAccountingChange('employees', v)}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                              />
                              <Text type="secondary" style={{ fontSize: 12, display: 'block', marginTop: 4 }}>
                                Лимит по тарифу: {mockData.employeeLimits[accounting.plan]}
                              </Text>
                            </div>

                            <div>
                              <Text strong style={{ fontSize: 16 }}>Кассовых аппаратов</Text>
                              <InputNumber
                                min={0}
                                value={accounting.cashRegisters}
                                onChange={v => handleAccountingChange('cashRegisters', v)}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                              />
                            </div>
                          </Space>
                        </Card>

                        <Card size="small" style={{ borderRadius: 12, border: `1px solid ${serviceColor}20` }}>
                          <Text strong style={{ fontSize: 16, display: 'block', marginBottom: 16 }}>
                            Дополнительные опции
                          </Text>
                          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <Checkbox
                              checked={accounting.marketplaces}
                              onChange={e => handleAccountingChange('marketplaces', e.target.checked)}
                              style={{ fontSize: 15 }}
                            >
                              Маркетплейсы (+20%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.production}
                              onChange={e => handleAccountingChange('production', e.target.checked)}
                              style={{ fontSize: 15 }}
                            >
                              Производство / строительство / общепит (+20%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.importExport}
                              onChange={e => handleAccountingChange('importExport', e.target.checked)}
                              style={{ fontSize: 15 }}
                            >
                              Импорт или экспорт (+25%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.separateDivision}
                              onChange={e => handleAccountingChange('separateDivision', e.target.checked)}
                              style={{ fontSize: 15 }}
                            >
                              Обособленное подразделение (+25%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.combineSystems}
                              onChange={e => handleAccountingChange('combineSystems', e.target.checked)}
                              style={{ fontSize: 15 }}
                            >
                              Совмещение систем (+30%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.usnWithVat}
                              onChange={e => handleAccountingChange('usnWithVat', e.target.checked)}
                              style={{ fontSize: 15 }}
                            >
                              УСН с НДС (+25%)
                            </Checkbox>
                          </Space>
                        </Card>

                        <Card size="small" style={{ borderRadius: 12, border: `1px solid ${serviceColor}20` }}>
                          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <div>
                              <Text strong style={{ fontSize: 16 }}>Ведение первички: {accounting.primaryPercent}%</Text>
                              <Slider
                                min={0}
                                max={80}
                                step={5}
                                value={accounting.primaryPercent}
                                onChange={v => handleAccountingChange('primaryPercent', v)}
                                tipFormatter={v => `${v}%`}
                              />
                            </div>

                            <div>
                              <Text strong style={{ fontSize: 16 }}>Количество авансовых отчётов</Text>
                              <InputNumber
                                min={0}
                                value={accounting.advanceReports}
                                onChange={v => handleAccountingChange('advanceReports', v)}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                              />
                            </div>

                            <div>
                              <Text strong style={{ fontSize: 16 }}>Всего чеков в авансовых отчётах</Text>
                              <InputNumber
                                min={0}
                                value={accounting.advanceChecks}
                                onChange={v => handleAccountingChange('advanceChecks', v)}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                              />
                            </div>
                          </Space>
                        </Card>
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Card
                        style={{
                          background: '#ffffff',
                          borderRadius: 16,
                          border: `1px solid ${serviceColor}30`,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          padding: 0,
                          boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                          overflow: 'hidden',
                        }}
                      >
                        <div style={{ 
                          background: `linear-gradient(135deg, ${serviceColor} 0%, #14a36b 100%)`,
                          padding: '32px 24px',
                          textAlign: 'center',
                          color: '#fff'
                        }}>
                          <Title level={2} style={{ color: '#fff', margin: 0, fontSize: '2.5rem' }}>
                            {typeof accountingTotal === 'number'
                              ? accountingTotal.toLocaleString() + ' ₽'
                              : accountingTotal}
                          </Title>
                          <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16 }}>
                            {accounting.plan === 'Нулевая отчетность' ? 'Разовый платёж' : 'в месяц'}
                          </Text>
                        </div>
                        
                        <div style={{ padding: '24px' }}>
                          <div style={{ 
                            backgroundColor: '#f0faf5', 
                            borderRadius: 8, 
                            padding: 16,
                            marginBottom: 16,
                            border: `1px solid ${serviceColor}20`
                          }}>
                            <Space align="center" style={{ width: '100%', justifyContent: 'center' }}>
                              <InfoCircleOutlined style={{ color: serviceColor }} />
                              <Text style={{ color: '#000', textAlign: 'center' }}>
                                Предварительная оценка
                              </Text>
                            </Space>
                          </div>
                          
                          <Paragraph style={{ textAlign: 'center', color: '#666', margin: 0 }}>
                            Окончательная стоимость рассчитывается индивидуально после анализа документов и может отличаться.
                          </Paragraph>
                          
                          <Divider style={{ margin: '24px 0' }} />
                          
                          <div style={{ textAlign: 'center' }}>
                            <Text strong style={{ color: serviceColor, fontSize: 16, display: 'block', marginBottom: 8 }}>
                              В стоимость включено:
                            </Text>
                            <Space direction="vertical" size="small" style={{ width: '100%', textAlign: 'left' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: serviceColor }} />
                                <Text style={{ color: '#666', fontSize: 14 }}>Ведение учета согласно тарифу</Text>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: serviceColor }} />
                                <Text style={{ color: '#666', fontSize: 14 }}>Подготовка и сдача отчетности</Text>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: serviceColor }} />
                                <Text style={{ color: '#666', fontSize: 14 }}>Консультации по телефону</Text>
                              </div>
                            </Space>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                ),
              },
              {
                key: 'legal',
                label: (
                  <span style={{ color: activeTab === 'legal' ? serviceColor : 'inherit' }}>
                    <SafetyCertificateOutlined /> Юридические услуги
                  </span>
                ),
                children: (
                  <Row gutter={[32, 32]}>
                    <Col xs={24} md={12}>
                      <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <Card size="small" style={{ borderRadius: 12, border: `1px solid ${serviceColor}20` }}>
                          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <div>
                              <Text strong style={{ fontSize: 16 }}>Выберите услугу</Text>
                              <Select
                                value={legal.selectedService}
                                onChange={v => handleLegalChange('selectedService', v)}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                                showSearch
                                optionFilterProp="children"
                              >
                                {legalServices.map(s => (
                                  <Option key={s.name} value={s.name}>{s.name}</Option>
                                ))}
                              </Select>
                            </div>

                            <div>
                              <Text strong style={{ fontSize: 16 }}>Регион</Text>
                              <Radio.Group
                                onChange={e => handleLegalChange('region', e.target.value)}
                                value={legal.region}
                                style={{ marginTop: 8, display: 'block' }}
                              >
                                <Radio value="base" style={{ fontSize: 15 }}>Регионы</Radio>
                                <Radio value="msk" style={{ fontSize: 15 }}>Москва / СПб</Radio>
                              </Radio.Group>
                            </div>
                          </Space>
                        </Card>
                      </Space>
                    </Col>

                    <Col xs={24} md={12}>
                      <Card
                        style={{
                          background: '#ffffff',
                          borderRadius: 16,
                          border: `1px solid ${serviceColor}30`,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          padding: 0,
                          boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                          overflow: 'hidden',
                        }}
                      >
                        <div style={{ 
                          background: `linear-gradient(135deg, ${serviceColor} 0%, #14a36b 100%)`,
                          padding: '32px 24px',
                          textAlign: 'center',
                          color: '#fff'
                        }}>
                          <Title level={2} style={{ color: '#fff', margin: 0, fontSize: '2.5rem' }}>
                            {getLegalPrice()}
                          </Title>
                          <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16 }}>
                            ориентировочная стоимость
                          </Text>
                        </div>
                        
                        <div style={{ padding: '24px' }}>
                          <div style={{ 
                            backgroundColor: '#f0faf5', 
                            borderRadius: 8, 
                            padding: 16,
                            marginBottom: 16,
                            border: `1px solid ${serviceColor}20`
                          }}>
                            <Space align="center" style={{ width: '100%', justifyContent: 'center' }}>
                              <InfoCircleOutlined style={{ color: serviceColor }} />
                              <Text style={{ color: '#000', textAlign: 'center' }}>
                                Цена указана как «от»
                              </Text>
                            </Space>
                          </div>
                          
                          <Paragraph style={{ textAlign: 'center', color: '#666', margin: 0 }}>
                            Точная стоимость определяется после изучения деталей и сложности задачи.
                          </Paragraph>
                          
                          <Divider style={{ margin: '24px 0' }} />
                          
                          <div style={{ textAlign: 'center' }}>
                            <Text strong style={{ color: serviceColor, fontSize: 16, display: 'block', marginBottom: 8 }}>
                              В стоимость может входить:
                            </Text>
                            <Space direction="vertical" size="small" style={{ width: '100%', textAlign: 'left' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: serviceColor }} />
                                <Text style={{ color: '#666', fontSize: 14 }}>Подготовка документов</Text>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: serviceColor }} />
                                <Text style={{ color: '#666', fontSize: 14 }}>Консультации экспертов</Text>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: serviceColor }} />
                                <Text style={{ color: '#666', fontSize: 14 }}>Правовая экспертиза</Text>
                              </div>
                            </Space>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                ),
              },
            ]}
          />
        </Card>
      </motion.div>
    </ConfigProvider>
  );
};

export default PriceCalculator;