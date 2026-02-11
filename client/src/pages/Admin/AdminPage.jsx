import React, { useState } from 'react';
import './AdminPage.css';
import MenuManagement from './Menu/MenuManagement';
import PermissionManagement from './Permission/PermissionManagement';

// Mock Data for 3-Depth Menu
// Level 1: ~20 items (Showing a subset for brevity)
// Level 2: ~15 items
// Level 3: ~15 items
// Initial Menu Data
const INITIAL_MENU_DATA = [
  {
    id: 'dashboard',
    name: '대시보드',
    icon: '🏠',
    children: []
  },
  {
    id: 'user-mgmt',
    name: '회원 관리',
    icon: '🧑‍🤝‍🧑',
    children: [
      { id: 'user-list', name: '회원 목록 조회', icon: '📜', children: [] },
      { id: 'user-grade', name: '회원 등급 관리', icon: '🏅', children: [] },
      { id: 'user-withdrawal', name: '탈퇴 회원 관리', icon: '⛔', children: [] },
      {
        id: 'admin-auth',
        name: '관리자 권한 관리',
        children: [
          { id: 'auth-group', name: '권한 그룹 설정' },
          { id: 'auth-assign', name: '권한 부여' },
          { id: 'auth-log', name: '접속 로그' }
        ]
      }
    ]
  },
  {
    id: 'product-mgmt',
    name: '상품 관리',
    icon: '🎁',
    children: [
      {
        id: 'prod-list',
        name: '상품 목록',
        children: [
          { id: 'prod-all', name: '전체 상품' },
          { id: 'prod-display', name: '진열 상품' },
          { id: 'prod-soldout', name: '품절 상품' }
        ]
      },
      { id: 'prod-reg', name: '상품 등록', icon: '✨', children: [] },
      { id: 'prod-category', name: '카테고리 관리', icon: '🗂️', children: [] },
      { id: 'prod-brand', name: '브랜드 관리', icon: '🔖', children: [] }
    ]
  },
  {
    id: 'order-mgmt',
    name: '주문 관리',
    icon: '🛍️',
    children: [
      { id: 'order-list', name: '전체 주문 조회', icon: '🧾', children: [] },
      { id: 'order-pay', name: '입금 대기 관리', icon: '💸', children: [] },
      { id: 'order-prep', name: '배송 준비 관리', icon: '📦', children: [] },
      { id: 'order-ship', name: '배송 중 관리', icon: '🚛', children: [] },
      { id: 'order-complete', name: '배송 완료 조회', icon: '🏁', children: [] },
      {
        id: 'order-claim',
        name: '취소/교환/반품',
        children: [
          { id: 'claim-cancel', name: '취소 관리' },
          { id: 'claim-exchange', name: '교환 관리' },
          { id: 'claim-return', name: '반품 관리' }
        ]
      }
    ]
  },
  {
    id: 'board-mgmt',
    name: '게시판 관리',
    icon: '💬',
    children: [
      { id: 'board-notice', name: '공지사항 관리', icon: '🔔', children: [] },
      { id: 'board-qna', name: 'Q&A 관리', icon: '🙋', children: [] },
      { id: 'board-review', name: '리뷰 관리', icon: '🌟', children: [] },
      { id: 'board-faq', name: 'FAQ 관리', icon: '💡', children: [] }
    ]
  },
  {
    id: 'design-mgmt',
    name: '디자인 관리',
    icon: '🖌️',
    children: [
      { id: 'design-banner', name: '메인 배너 관리', icon: '🏞️', children: [] },
      { id: 'design-popup', name: '팝업 관리', icon: '🗨️', children: [] }
    ]
  },
  {
    id: 'stats-mgmt',
    name: '통계/분석',
    icon: '📊',
    children: [
      { id: 'stats-sales', name: '매출 통계', icon: '💰', children: [] },
      { id: 'stats-visit', name: '접속 통계', icon: '👁️', children: [] },
      { id: 'stats-cart', name: '장바구니 분석', icon: '🧺', children: [] }
    ]
  },
  {
    id: 'setting-mgmt',
    name: '환경 설정',
    icon: '🔧',
    children: [
      { id: 'set-basic', name: '기본 정보 설정', icon: 'ℹ️', children: [] },
      { id: 'set-pay', name: '결제 수단 설정', icon: '🏧', children: [] },
      { id: 'set-ship', name: '배송 정책 설정', icon: '🗺️', children: [] },
      {
        id: 'menu-mgmt',
        name: '메뉴 관리',
        children: [
          { id: 'menu-list', name: '메뉴 목록' },
          { id: 'menu-auth', name: '메뉴 권한' }
        ]
      }
    ]
  }
];

const MenuItem = ({ item, depth = 0, activeId, onSelect, isSidebarOpen, setIsSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeId === item.id;

  const handleClick = (e) => {
    e.stopPropagation();

    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
      if (hasChildren) {
        setIsOpen(true);
      } else {
        onSelect(item);
      }
      return;
    }

    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      onSelect(item);
    }
  };

  return (
    <li className="menu-item">
      <div
        className={`menu-title ${isActive ? 'active' : ''} ${isOpen ? 'open' : ''}`}
        onClick={handleClick}
        style={{ paddingLeft: isSidebarOpen ? `${20 + depth * 15}px` : '20px', justifyContent: isSidebarOpen ? 'flex-start' : 'center' }}
        title={!isSidebarOpen ? item.name : ''}
      >
        <span className="menu-icon" style={{ marginRight: isSidebarOpen ? '10px' : '0' }}>{item.icon}</span>
        {isSidebarOpen && <span className="menu-text">{item.name}</span>}
        {isSidebarOpen && hasChildren && (
          <span className="arrow">{isOpen ? '▲' : '▼'}</span>
        )}
      </div>
      {isSidebarOpen && hasChildren && isOpen && (
        <ul className="submenu">
          {item.children.map(child => (
            <MenuItem
              key={child.id}
              item={child}
              depth={depth + 1}
              activeId={activeId}
              onSelect={onSelect}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const AdminPage = () => {
  const [menuData, setMenuData] = useState(INITIAL_MENU_DATA);
  const [activeMenu, setActiveMenu] = useState(INITIAL_MENU_DATA[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleMenuSelect = (menu) => {
    setActiveMenu(menu);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    if (activeMenu.id === 'menu-list') {
      return <MenuManagement menuData={menuData} setMenuData={setMenuData} />;
    } else if (activeMenu.id === 'menu-auth') {
      return <PermissionManagement />;
    }

    return (
      <>
        <p>현재 선택된 메뉴: <strong>{activeMenu.name}</strong> (ID: {activeMenu.id})</p>
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #eee' }}>
          <p>이곳에 <strong>{activeMenu.name}</strong>에 대한 관리 기능이 표시됩니다.</p>
        </div>
      </>
    );
  };

  return (
    <div className="admin-container">
      <nav className={`admin-sidebar ${isSidebarOpen ? '' : 'collapsed'}`}>
        <div className="admin-sidebar-header">
          {isSidebarOpen ? 'Admin Panel' : 'AP'}
        </div>
        <button className="toggle-btn-boundary" onClick={toggleSidebar}>
          {isSidebarOpen ? '◀' : '▶'}
        </button>
        <ul className="admin-menu">
          {menuData.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              activeId={activeMenu.id}
              onSelect={handleMenuSelect}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ))}
        </ul>
      </nav>
      <main className="admin-content">
        <header className="content-header">
          <h2>{activeMenu.name}</h2>
        </header>
        <section className="content-body">
          {renderContent()}
        </section>
      </main>
    </div>
  );
};

export default AdminPage;
