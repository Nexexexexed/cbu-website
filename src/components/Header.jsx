import { useState } from "react";
import { Menu, Button, Drawer, Dropdown, Badge, ConfigProvider } from "antd";
import {
  MenuOutlined,
  PhoneOutlined,
  AppstoreOutlined,
  TeamOutlined,
  DollarOutlined,
  ContactsOutlined,
  CalculatorOutlined,
  SafetyCertificateOutlined,
  BarChartOutlined,
  SolutionOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

import logo from "../assets/images/logo.svg";

const Header = ({ isTransparent }) => {
  const [visible, setVisible] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  const servicesMenu = {
    items: [
      {
        key: "accounting",
        icon: <CalculatorOutlined />,
        label: (
          <Link to="/services#accounting">Бухгалтерское обслуживание</Link>
        ),
      },
      {
        key: "legal",
        icon: <SafetyCertificateOutlined />,
        label: <Link to="/services#legal">Юридическое сопровождение</Link>,
      },
      {
        key: "management",
        icon: <BarChartOutlined />,
        label: <Link to="/services#management">Управленческая отчетность</Link>,
      },
      {
        key: "outsourcing",
        icon: <SolutionOutlined />,
        label: (
          <Link to="/services#outsourcing">Аутсорсинг бизнес-процессов</Link>
        ),
      },
    ],
  };

  // Создаем кастомные пункты меню без использования стандартных компонентов Ant Design
  const mainMenuItems = [
    {
      key: "services",
      label: (
        <Dropdown
          menu={servicesMenu}
          placement="bottom"
          popupRender={(menu) => (
            <ConfigProvider
              theme={{
                components: {
                  Dropdown: {
                    borderRadiusLG: 12,
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
                    colorBgElevated: "#ffffff",
                  },
                },
              }}
            >
              <div className="services-dropdown-wrapper">{menu}</div>
            </ConfigProvider>
          )}
          trigger={["hover"]}
        >
          <div className="services-dropdown-trigger">
            <AppstoreOutlined />
            <span style={{ marginLeft: "8px" }}>Услуги</span>
            <CaretDownOutlined
              style={{ marginLeft: "4px", fontSize: "12px" }}
            />
            <span className="services-underline"></span>
          </div>
        </Dropdown>
      ),
    },
    {
      key: "about",
      label: (
        <Link to="/about" className="menu-link-wrapper">
          <TeamOutlined style={{ marginRight: "8px" }} />
          <span>О нас</span>
          <span className="menu-item-underline"></span>
        </Link>
      ),
    },
    {
      key: "pricing",
      label: (
        <Link to="/pricing" className="menu-link-wrapper">
          <DollarOutlined style={{ marginRight: "8px" }} />
          <span>Цены</span>
          <span className="menu-item-underline"></span>
        </Link>
      ),
    },
    {
      key: "contacts",
      label: (
        <Link to="/contacts" className="menu-link-wrapper">
          <ContactsOutlined style={{ marginRight: "8px" }} />
          <span>Контакты</span>
          <span className="menu-item-underline"></span>
        </Link>
      ),
    },
  ];

  // Мобильные пункты меню (с подменю) - исправленная версия
  const mobileMenuItems = [
    {
      key: "services",
      icon: <AppstoreOutlined />,
      label: "Услуги",
      children: [
        {
          key: "accounting",
          icon: <CalculatorOutlined />,
          label: (
            <Link to="/services#accounting" onClick={() => setVisible(false)}>
              Бухгалтерское обслуживание
            </Link>
          ),
        },
        {
          key: "legal",
          icon: <SafetyCertificateOutlined />,
          label: (
            <Link to="/services#legal" onClick={() => setVisible(false)}>
              Юридическое сопровождение
            </Link>
          ),
        },
        {
          key: "management",
          icon: <BarChartOutlined />,
          label: (
            <Link to="/services#management" onClick={() => setVisible(false)}>
              Управленческая отчетность
            </Link>
          ),
        },
        {
          key: "outsourcing",
          icon: <SolutionOutlined />,
          label: (
            <Link to="/services#outsourcing" onClick={() => setVisible(false)}>
              Аутсорсинг бизнес-процессов
            </Link>
          ),
        },
      ],
    },
    {
      key: "about",
      icon: <TeamOutlined />,
      label: (
        <Link to="/about" onClick={() => setVisible(false)}>
          О нас
        </Link>
      ),
    },
    {
      key: "cases",
      icon: <SolutionOutlined />,
      label: (
        <Link to="/cases" onClick={() => setVisible(false)}>
          Кейсы
        </Link>
      ),
    },
    {
      key: "pricing",
      icon: <DollarOutlined />,
      label: (
        <Link to="/pricing" onClick={() => setVisible(false)}>
          Цены
        </Link>
      ),
    },
    {
      key: "contacts",
      icon: <ContactsOutlined />,
      label: (
        <Link to="/contacts" onClick={() => setVisible(false)}>
          Контакты
        </Link>
      ),
    },
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
    setMobileServicesOpen(false);
  };

  const handleMobileMenuClick = (e) => {
    if (e.key === "services") {
      setMobileServicesOpen(!mobileServicesOpen);
    } else {
      // Для остальных пунктов закрываем меню
      setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  };

  return (
    <header
      className={`ant-layout-header custom-header ${
        isTransparent ? "transparent" : "solid"
      }`}
    >
      <div className="header-container">
        {/* Логотип - теперь это переход на главную */}
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img src={logo} className="logo-image" />
        </div>

        {/* Десктопное меню */}
        <div className="desktop-menu">
          <div className="nav-menu-container">
            {/* Создаем свое меню без использования Ant Design Menu */}
            <div
              className="main-nav-menu"
              style={{ display: "flex", alignItems: "center" }}
            >
              {mainMenuItems.map((item) => (
                <div
                  key={item.key}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="header-actions">
            <a href="tel:+79301208782" className="phone-link">
              <PhoneOutlined />
              <span>+7 (930) 120-87-82</span>
            </a>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className="mobile-menu">
          <Button
            type="text"
            icon={
              <MenuOutlined
                style={{
                  color: "#ffffff",
                  fontSize: "24px",
                }}
              />
            }
            onClick={showDrawer}
            className="mobile-menu-button"
          />

          <Drawer
            closable={false}
            onClose={onClose}
            open={visible}
            styles={{
              header: {
                borderBottom: "1px solid #e6e9ec",
              },
              body: {
                padding: "0",
              },
            }}
            size="default"
            className="mobile-drawer"
          >
            <Menu
              mode="inline"
              items={mobileMenuItems}
              onClick={handleMobileMenuClick}
              onOpenChange={(openKeys) => {
                // Обрабатываем открытие/закрытие подменю
                if (openKeys.includes("services")) {
                  setMobileServicesOpen(true);
                } else {
                  setMobileServicesOpen(false);
                }
              }}
              style={{ borderRight: "none" }}
              selectedKeys={[]}
              openKeys={mobileServicesOpen ? ["services"] : []}
              expandIcon={({ isOpen }) => (
                <CaretDownOutlined
                  style={{
                    fontSize: "12px",
                    transition: "transform 0.3s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              )}
            />

            <div className="mobile-contact-section">
              <div className="mobile-contact">
                <PhoneOutlined style={{ color: "#19be7d" }} />
                <a
                  href="tel:+79301208782"
                  style={{
                    marginLeft: "12px",
                    color: "#19be7d",
                    fontWeight: "600",
                  }}
                >
                  +7 (930) 120-87-82
                </a>
              </div>
              <Button
                type="primary"
                block
                style={{
                  marginTop: "16px",
                  backgroundColor: "#19be7d",
                  borderColor: "#19be7d",
                  height: "44px",
                  fontWeight: "600",
                }}
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    navigate("/contacts");
                  }, 300);
                }}
              >
                Заказать звонок
              </Button>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
