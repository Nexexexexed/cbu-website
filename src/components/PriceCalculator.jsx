import React, { useState, useEffect, useMemo } from 'react';
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
} from 'antd';
import {
  CalculatorOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// ---------- Тарифы, лимиты ----------
const tariffNames = [
  'Нулевая отчетность',
  'Старт',
  'Базовый',
  'Стандарт',
  'Оптимальный',
  'Стабильный',
  'Профессиональный',
  'Максимальный',
  'Индивидуальный',
];

// Лимиты операций (из строки 3 Excel)
const operationLimits = {
  'Нулевая отчетность': 0,
  Старт: 25,
  Базовый: 50,
  Стандарт: 101,
  Оптимальный: 201,
  Стабильный: 301,
  Профессиональный: 501,
  Максимальный: 701,
  Индивидуальный: Infinity,
};

// Лимиты сотрудников
const employeeLimits = {
  'Нулевая отчетность': 0,
  Старт: 2,
  Базовый: 4,
  Стандарт: 6,
  Оптимальный: 8,
  Стабильный: 10,
  Профессиональный: 15,
  Максимальный: 20,
  Индивидуальный: Infinity,
};

const extraEmployeeCost = 1200;
const cashRegisterCost = 1500;

// Коэффициенты для дополнительных опций
const coefficients = {
  marketplace: 0.2,
  production: 0.2,
  importExport: 0.25,
  separateDivision: 0.25,
  combineSystems: 0.3,
  usnWithVat: 0.25,
};

// ---------- Базовые цены для тарифа "Старт" (как в таблице) ----------
const startPrices = {
  Патент: 8500,
  'УСН 6%': 9500,
  'УСН 15%': 15000,
  ОСНО: 22000,
};

// Цены для "Нулевая отчетность" (разовые)
const zeroReportingPrices = {
  Патент: 0,
  'УСН 6%': 3000,
  'УСН 15%': 3500,
  ОСНО: 5000,
};

// Коэффициенты повышения для последующих тарифов (по строкам Excel)
// Формат: [тариф_от_которого_считаем, множитель_для_патента, множитель_для_УСН6, множитель_для_УСН15, множитель_для_ОСНО]
const upgradeCoefficients = {
  Базовый:    { prev: 'Старт', factor: { Патент: 1.55, 'УСН 6%': 1.55, 'УСН 15%': 1.55, ОСНО: 1.55 } },
  Стандарт:   { prev: 'Базовый', factor: { Патент: 1.70, 'УСН 6%': 1.70, 'УСН 15%': 1.45, ОСНО: 1.45 } },
  Оптимальный:{ prev: 'Стандарт', factor: { Патент: 1.60, 'УСН 6%': 1.60, 'УСН 15%': 1.45, ОСНО: 1.35 } },
  Стабильный: { prev: 'Оптимальный', factor: { Патент: 1.30, 'УСН 6%': 1.65, 'УСН 15%': 1.45, ОСНО: 1.45 } },
  Профессиональный: { prev: 'Стабильный', factor: { Патент: 1.55, 'УСН 6%': 1.55, 'УСН 15%': 1.55, ОСНО: 1.25 } },
  Максимальный:{ prev: 'Профессиональный', factor: { Патент: 1.25, 'УСН 6%': 1.25, 'УСН 15%': 1.25, ОСНО: 1.25 } },
};

// Вычисление всех базовых цен по формулам
const computeAllBasePrices = () => {
  const prices = {};
  prices['Нулевая отчетность'] = { ...zeroReportingPrices };
  prices['Старт'] = { ...startPrices };

  for (const tariff of tariffNames) {
    if (tariff === 'Нулевая отчетность' || tariff === 'Старт') continue;
    const up = upgradeCoefficients[tariff];
    if (!up) continue;
    const prevPrices = prices[up.prev];
    if (!prevPrices) continue;
    prices[tariff] = {};
    for (const tax of Object.keys(prevPrices)) {
      prices[tariff][tax] = Math.round(prevPrices[tax] * up.factor[tax]);
    }
  }
  // Для "Индивидуальный" оставляем null (по договорённости)
  prices['Индивидуальный'] = { Патент: null, 'УСН 6%': null, 'УСН 15%': null, ОСНО: null };
  return prices;
};

const basePrices = computeAllBasePrices();

// ---------- Юридические услуги ----------
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

// Тема для ConfigProvider (зелёная)
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
    borderRadius: 8,
    controlItemBgHover: '#f0faf5',
    controlItemBgActive: '#e6f7ef',
    controlItemBgActiveHover: '#d9f0e6',
  },
  components: {
    Checkbox: { colorPrimary: serviceColor, colorPrimaryHover: '#14a36b' },
    Radio: { colorPrimary: serviceColor, colorPrimaryHover: '#14a36b' },
    Slider: { colorPrimary: serviceColor, colorPrimaryHover: '#14a36b', colorPrimaryBorder: serviceColor, colorPrimaryBorderHover: '#14a36b' },
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

  // Состояние бухгалтерского калькулятора
  const [accounting, setAccounting] = useState({
    plan: 'Старт',
    taxSystem: 'УСН 6%',
    employees: 1,
    cashRegisters: 0,
    operations: 10,                     // новое поле
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

  // Состояние юридического калькулятора
  const [legal, setLegal] = useState({
    selectedService: legalServices[0].name,
    region: 'base',
  });

  // Функция для автоматического подбора тарифа по количеству операций
  const getSuitableTariff = (operations) => {
    if (operations === 0) return 'Нулевая отчетность';
    const suitable = tariffNames.find(t => operationLimits[t] >= operations);
    return suitable || 'Индивидуальный';
  };

  // Обработка изменения количества операций – автоматически меняем тариф
  const handleOperationsChange = (value) => {
    const newOperations = value || 0;
    const suitableTariff = getSuitableTariff(newOperations);
    setAccounting(prev => ({
      ...prev,
      operations: newOperations,
      plan: suitableTariff,
    }));
  };

  // При ручном изменении тарифа проверяем, не превышает ли он лимит операций
  const handlePlanChange = (newPlan) => {
    const currentOps = accounting.operations;
    const limit = operationLimits[newPlan];
    if (limit !== undefined && currentOps > limit && limit !== Infinity) {
      // Если превышает – подбираем подходящий тариф
      const suitable = getSuitableTariff(currentOps);
      setAccounting(prev => ({ ...prev, plan: suitable }));
    } else {
      setAccounting(prev => ({ ...prev, plan: newPlan }));
    }
  };

  // Расчёт итоговой стоимости бухгалтерских услуг
  const calculateAccountingTotal = () => {
    const {
      plan, taxSystem, employees, cashRegisters,
      marketplaces, production, importExport,
      separateDivision, combineSystems, usnWithVat,
      primaryPercent, advanceReports, advanceChecks,
    } = accounting;

    let base = basePrices[plan]?.[taxSystem];
    if (base === null || base === undefined) return 'Индивидуально';
    if (plan === 'Нулевая отчетность') {
      // Для нулевой отчетности база уже правильная, но она разовая
      let total = base;

      // Доплата за сотрудников (если есть)
      const limit = employeeLimits[plan];
      if (employees > limit) {
        total += (employees - limit) * extraEmployeeCost;
      }
      total += cashRegisters * cashRegisterCost;

      // Применяем коэффициенты
      let multiplier = 1.0;
      if (marketplaces) multiplier += coefficients.marketplace;
      if (production) multiplier += coefficients.production;
      if (importExport) multiplier += coefficients.importExport;
      if (separateDivision) multiplier += coefficients.separateDivision;
      if (combineSystems) multiplier += coefficients.combineSystems;
      if (usnWithVat && (taxSystem === 'УСН 6%' || taxSystem === 'УСН 15%')) {
        multiplier += coefficients.usnWithVat;
      }
      total *= multiplier;

      if (primaryPercent > 0) total *= (1 + primaryPercent / 100);
      if (advanceReports > 0) {
        total += advanceReports * 1000;
        const extraChecks = Math.max(0, advanceChecks - advanceReports * 10);
        total += extraChecks * 390;
      }
      return Math.round(total);
    }

    // Обычные тарифы (ежемесячные)
    let total = base;

    const employeeLimit = employeeLimits[plan];
    if (employees > employeeLimit) {
      total += (employees - employeeLimit) * extraEmployeeCost;
    }
    total += cashRegisters * cashRegisterCost;

    let multiplier = 1.0;
    if (marketplaces) multiplier += coefficients.marketplace;
    if (production) multiplier += coefficients.production;
    if (importExport) multiplier += coefficients.importExport;
    if (separateDivision) multiplier += coefficients.separateDivision;
    if (combineSystems) multiplier += coefficients.combineSystems;
    if (usnWithVat && (taxSystem === 'УСН 6%' || taxSystem === 'УСН 15%')) {
      multiplier += coefficients.usnWithVat;
    }
    total *= multiplier;

    if (primaryPercent > 0) total *= (1 + primaryPercent / 100);
    if (advanceReports > 0) {
      total += advanceReports * 1000;
      const extraChecks = Math.max(0, advanceChecks - advanceReports * 10);
      total += extraChecks * 390;
    }
    return Math.round(total);
  };

  const accountingTotal = calculateAccountingTotal();
  const isZeroReporting = accounting.plan === 'Нулевая отчетность';

  const getLegalPrice = () => {
    const service = legalServices.find(s => s.name === legal.selectedService);
    if (!service) return '—';
    const price = legal.region === 'msk' ? service.msk : service.base;
    if (typeof price === 'number') return `от ${price.toLocaleString()} ₽`;
    return price;
  };

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
                                onChange={handlePlanChange}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                              >
                                {tariffNames.map(p => (
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
                              <Text strong style={{ fontSize: 16 }}>Количество операций/документов</Text>
                              <InputNumber
                                min={0}
                                value={accounting.operations}
                                onChange={handleOperationsChange}
                                style={{ width: '100%', marginTop: 4 }}
                                size="large"
                              />
                              <Text type="secondary" style={{ fontSize: 12, display: 'block', marginTop: 4 }}>
                                Лимит тарифа: {operationLimits[accounting.plan] === Infinity ? 'не ограничен' : operationLimits[accounting.plan]}
                                {operationLimits[accounting.plan] < accounting.operations && ' (превышение лимита, будет предложен подходящий тариф)'}
                              </Text>
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
                                Лимит по тарифу: {employeeLimits[accounting.plan]}
                                {isZeroReporting && ' (при наличии сотрудников добавляется доплата)'}
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
                            >
                              Маркетплейсы (+20%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.production}
                              onChange={e => handleAccountingChange('production', e.target.checked)}
                            >
                              Производство / строительство / общепит (+20%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.importExport}
                              onChange={e => handleAccountingChange('importExport', e.target.checked)}
                            >
                              Импорт или экспорт (+25%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.separateDivision}
                              onChange={e => handleAccountingChange('separateDivision', e.target.checked)}
                            >
                              Обособленное подразделение (+25%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.combineSystems}
                              onChange={e => handleAccountingChange('combineSystems', e.target.checked)}
                            >
                              Совмещение систем (+30%)
                            </Checkbox>
                            <Checkbox
                              checked={accounting.usnWithVat}
                              onChange={e => handleAccountingChange('usnWithVat', e.target.checked)}
                            >
                              УСН с НДС (+25%)
                            </Checkbox>
                          </Space>
                        </Card>

                        <Card size="small" style={{ borderRadius: 12, border: `1px solid ${serviceColor}20` }}>
                          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <div>
                              <Text strong style={{ fontSize: 16 }}>Ведение первичной документации: {accounting.primaryPercent}%</Text>
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
                          color: '#fff',
                          borderRadius: 16,
                        }}>
                          <Title level={2} style={{ color: '#fff', margin: 0, fontSize: '2.5rem' }}>
                            {typeof accountingTotal === 'number'
                              ? accountingTotal.toLocaleString() + ' ₽'
                              : accountingTotal}
                          </Title>
                          <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16 }}>
                            {isZeroReporting ? 'Разовый платёж' : 'в месяц'}
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
                              {isZeroReporting ? 'В стоимость разового платежа включено:' : 'В стоимость включено:'}
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
                                <Radio value="base">Регионы</Radio>
                                <Radio value="msk">Москва / СПб</Radio>
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
                          color: '#fff',
                          borderRadius: 16,
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